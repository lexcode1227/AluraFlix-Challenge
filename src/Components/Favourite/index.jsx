import React from 'react'
import { Grid, Typography,} from '@mui/material'
import ChallengeCard from '../ChallengeCard'
import Slider from '../Slider'

const Favourite = ({challenges, addFav, deleteChallenge,}) => {

  return (
    <Grid container component="section" maxWidth="1333px" flexDirection="column" sx={{ marginBottom: '40px', padding: "0 25px" }}>
        <Typography component="h3" variant="h5" marginBottom="20px">Favourite Items</Typography>
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
  )
}

export default Favourite