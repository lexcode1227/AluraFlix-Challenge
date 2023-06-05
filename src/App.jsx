import { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import CardGroup from "./Components/CardGroup"
import Footer from './Components/Footer'
import {v4 as uuid} from "uuid"
import Favourite from './Components/Favourite'
import challengesData from './Data/data.json'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

function App() {
  const [ challenges, setChallenges ] = useState([])
  const [ teams, setTeams ] = useState([
    {
      id: uuid(),
      title: "Frontend",
    },
    {
      id: uuid(),
      title: "Backend",
    },
    {
      id: uuid(),
      title: "Programming logic",
    },
  ])
  useEffect(() => {
    setChallenges(challengesData)
  }, [])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const addChallenge = (values) => {
    console.log('Challenge added: ', values)
    setChallenges([...challenges, values])
    setCreateAlert(true)
  }
  const deleteChallenge = (id)=> {
    console.log("Eliminated", id)
    const challengeValidated = challenges.filter((challenge)=> challenge.id !== id)
    setChallenges(challengeValidated)
    showSnackbar('Challenge eliminated sucessfully!')
  }
  const addFav = (id)=> {
    const challengeValidated = challenges.map((challenge)=> {
      if (challenge.id === id) {
        challenge.fav = !challenge.fav
        const message = challenge.fav ? 'Challenge added to favorites sucessfully!' : 'Challenge deleted from favorites!'
        showSnackbar(message)
      }
      return challenge
    })
    setChallenges(challengeValidated)
  }
  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  }
    
  return (
    <Grid component="main" container justifyContent="center">
      <Header nombre="Alexa"/>
      <Banner/>
      <Favourite challenges={challenges.filter(challenge => challenge.fav === true)} deleteChallenge={deleteChallenge} addFav={addFav} />
      { teams.map((team)=> <CardGroup data={team} key={team.id} challenges={challenges.filter(challenge => challenge.team === team.title )} teams={teams.map((TEAM)=> TEAM.title)} addChallenge={addChallenge} deleteChallenge={deleteChallenge} addFav={addFav} />) }
      <Footer/>
      <Snackbar open={snackbarOpen} autoHideDuration={1000} onClose={() => setSnackbarOpen(false)} >
        <MuiAlert onClose={() => setSnackbarOpen(false)} severity="success" elevation={6} variant="filled">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  )
}

export default App
