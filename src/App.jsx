import { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import CardGroup from "./Components/CardGroup"
import Footer from './Components/Footer'
import {v4 as uuid} from "uuid"
import Favourite from './Components/Favourite'
import challengesData from './Data/data.json'

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
    setChallenges(challengesData);
  }, [])
  const addChallenge = (values) => {
    console.log('Challenge added: ', values)
    setChallenges([...challenges, values])
  }
  const deleteChallenge = (id)=> {
    console.log("Eliminated", id)
    const challengeValidated = challenges.filter((challenge)=> challenge.id !== id)
    setChallenges(challengeValidated)
  }
  const addFav = (id)=> {
    const challengeValidated = challenges.map((challenge)=> {
      if (challenge.id === id) {
        challenge.fav = !challenge.fav
      }
      return challenge
    })
    setChallenges(challengeValidated)
  }

  return (
    <Grid component="main" container justifyContent="center">
      <Header nombre="Alexa"/>
      <Banner/>
      <Favourite challenges={challenges.filter(challenge => challenge.fav === true)} deleteChallenge={deleteChallenge} addFav={addFav} />
      { teams.map((team)=> <CardGroup data={team} key={team.id} challenges={challenges.filter(challenge => challenge.team === team.title )} teams={teams.map((TEAM)=> TEAM.title)} addChallenge={addChallenge} deleteChallenge={deleteChallenge} addFav={addFav} />) }
      <Footer/>
    </Grid>
  )
}

export default App
