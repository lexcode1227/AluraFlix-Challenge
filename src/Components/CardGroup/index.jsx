import React, { useState } from 'react'
import { Grid, Typography, Button, Modal } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ChallengeCard from '../ChallengeCard'
import Slider from '../Slider'
import Form from '../Form'

const CardGroup = (props) => {
  const { title } = props.data
  const { challenges, teams, addChallenge, deleteChallenge, addFav } = props

  const [open, setOpen] = useState(false)
  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return (
    <>
      <Grid container maxWidth="1333px" component="section" flexDirection="column" sx={{ marginBottom: '40px', padding: "0 25px" }}>
        <Grid
          item
          container
          flexDirection
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
        >
          <Typography component="h3" variant="h5">
            {title}
          </Typography>
          {title === 'Frontend' && (
            <Button variant="contained" endIcon={<AddCircleOutlineOutlinedIcon />} onClick={openModal}>
              New
            </Button>
          )}
        </Grid> 
        {challenges.length <= 2 ? (
        // Renderiza el segundo Grid si hay menos o igual a 2 challenges
          <Grid 
            container 
            flexDirection="row" 
            justifyContent="space-evenly" 
            alignItems="center" 
            sx={{ padding: "0 25px" }}
          >
            {challenges.map((challenge) => (
              <ChallengeCard key={challenge.id} data={challenge} deleteChallenge={deleteChallenge} addFav={addFav} />
            ))}
          </Grid>
        ) : (
          // Renderiza el componente Slider si hay más de 2 challenges
          <Slider data={challenges} deleteChallenge={deleteChallenge} addFav={addFav} />
        )}
      </Grid>
      <Modal open={open} onClose={closeModal}>
        <><Form teams={teams} closeModal={closeModal} addChallenge={addChallenge} /></>
      </Modal>
    </>
  )
}

export default CardGroup
