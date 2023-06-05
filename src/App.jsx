import { useState } from 'react'
import { Grid } from "@mui/material"
import Header from "./Components/Header"
import Banner from "./Components/Banner"
import CardGroup from "./Components/CardGroup"
import Footer from './Components/Footer'
import {v4 as uuid} from "uuid"
import Favourite from './Components/Favourite'

function App() {
  const [ challenges, setChallenges ] = useState([
    {
      id: uuid(),
      team: "Frontend",
      link: "https://www.aluracursos.com/challenges/oracle-one/sprint01-construye-un-encriptador-texto-con-javascript",
      picture: "https://cdn.pixabay.com/photo/2019/07/16/18/18/frontend-4342425_1280.png",
      title: "Encriptador de texto",
      text: "Construye un encriptador de texto con Javascript",
      fav: false,
    },
    {
      id: uuid(),
      team: "Frontend",
      link: "https://www.aluracursos.com/challenges/oracle-one-back-end/hotelalura/sprint01",
      picture: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      title: "Alura Hotel",
      text: "Crea tu propia aplicación Desktop con conexión al Banco de Datos.",
      fav: false,
    },
    {
      id: uuid(),
      team: "Frontend",
      link: "https://www.aluracursos.com/challenges/oracle-one-back-end/hotelalura/sprint01",
      picture: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      title: "Alura Hotel",
      text: "Crea tu propia aplicación Desktop con conexión al Banco de Datos.",
      fav: false,
    },
    {
      id: uuid(),
      team: "Frontend",
      link: "https://www.aluracursos.com/challenges/oracle-one-back-end/hotelalura/sprint01",
      picture: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      title: "Alura Hotel",
      text: "Crea tu propia aplicación Desktop con conexión al Banco de Datos.",
      fav: false,
    },
    {
      id: uuid(),
      team: "Backend",
      link: "https://www.aluracursos.com/challenges/oracle-one-back-end/hotelalura/sprint01",
      picture: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      title: "Hotel Alura",
      text: "Crea tu propia aplicación Desktop con conexión al Banco de Datos.",
      fav: true,
    }, 
  ])
  const [ teams, setTeams ] = useState([
    {
      id: uuid(),
      title: "Frontend",
    },
    {
      id: uuid(),
      title: "Backend",
    },
  ])

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
