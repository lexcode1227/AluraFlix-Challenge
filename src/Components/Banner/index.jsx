import React from 'react'
import { Grid, Typography } from '@mui/material'
import HeaderBg from "../../assets/wave-header.svg"
import Imagen from "../../assets/team-working.jpg"
import Features from '../Features'
import { useMediaQuery } from '@mui/material'

const Banner = () => {
  // const hideOn600px = useMediaQuery('(max-width:600px)')
  const hideOn541px = useMediaQuery('(max-width:541px)')
  const data = {
    tit: "Improve your front-end coding skills by solving the Alura challenges",
    text: "Solve and share the challenges of the ONE program while working with professional designs. Join a large community of developers who create projects and help each other improve."
  }
  const gridGrid = {
    backgroundImage: `url(${HeaderBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  }
  const GridContStyles = {
    display: "flex", 
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "25px",
  }
  const gridItemStyles = {
    gap: "20px",
    padding: "15px 15px 15px 0",
  }
  const typoStyles = {
    maxWidth: "700px",
  }
  const imgStyles = {
    width: hideOn541px ? "305px" : "460px",
    borderRadius: "25px",
    margin: "0 auto",
  }
  
  return (
        <Grid component="section" width="100%" sx={gridGrid}>
          <Grid sx={{maxWidth: "1333px", margin: "0 auto"}}>
            <Grid component="section" width="100%" padding="0 25px" justifyContent="space-around" alignItems="center" sx={GridContStyles} >
              <Grid item container direction="column" maxWidth="731px" sx={gridItemStyles}>
                <Typography component="h1" variant='h3' color="white" style={{fontSize: "45px"}} sx={typoStyles}>{data.tit} </Typography>
                <Typography component="h2" variant='h6' marginTop="25px" sx={typoStyles}>{data.text}</Typography>
                <Features/>
              </Grid>
              <Grid item >
                  <img src={Imagen} alt="team-working" height="auto" style={imgStyles}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  )
}

export default Banner