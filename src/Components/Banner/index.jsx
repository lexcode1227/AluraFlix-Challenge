import React from 'react'
import { Grid, Typography } from '@mui/material'
import HeaderBg from "../../assets/wave-header.svg"
import Imagen from "../../assets/team-working.jpg"
import Features from '../Features'

const Banner = () => {
  const data = {
    tit: "Improve your front-end coding skills by solving the Alura challenges",
    text: "Solve and share the challenges of the ONE program while working with professional designs. Join a large community of developers who create projects and help each other improve."
  }
  const bgImgStyles = {
    display: "flex", 
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundImage: `url(${HeaderBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  }
  const gridItemStyles = {
    gap: "20px",
    padding: "15px 15px 15px 0",
  }
  const typoStyles = {
    maxWidth: "700px",
  }
  const imgStyles = {
    maxWidth: "460px",
    borderRadius: "25px",
  }
  const spanStyles = {
    backgroundImage: `url(${Imagen})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  }
  return (
        <Grid component="section" width="100%" padding="0 25px" justifyContent="space-around" alignItems="center" sx={bgImgStyles} >
          <Grid item container direction="column" width="60%" maxWidth="731px" sx={gridItemStyles}>
            <Typography component="h1" variant='h3' color="white" sx={typoStyles}>{data.tit} </Typography>
            <Typography component="h2" variant='h6' marginTop="25px" sx={typoStyles}>{data.text}</Typography>
            <Features/>
          </Grid>
          <Grid item sx={{minWidth: "500px", width: "40%"}}>
              <img src={Imagen} alt="team-working" height="auto" style={imgStyles}/>
          </Grid>
        </Grid>
  )
}

export default Banner