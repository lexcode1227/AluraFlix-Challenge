import React from 'react'
import { Grid, Typography } from '@mui/material'
import {v4 as uuid} from "uuid"
import firstIcon from "../../assets/icon-evento-gratuito.svg"
import secondIcon from "../../assets/icon-portfolio.svg"
import thirdIcon from "../../assets/icon-comunidades.svg"

const Features = () => {
    const data = [
        {
            id: uuid(),
            title: "New themes to practice",
            url: firstIcon,
        },
        {
            id: uuid(),
            title: "Unique projects for your portfolio",
            url: secondIcon,
        },
        {
            id: uuid(),
            title: "A supportive community through Discord",
            url: thirdIcon,
        },
    ]
    const ulStyles = {
        maxWidth: "900px",
        display: "grid",
        alignItems: "start",
        gridTemplateColumns: "repeat(3,1fr)",
        listStyle: "none",
    }
    const liStyles = {
        height: "auto",
    }
    const iconStyles = {
        marginRight: "10px",
        borderRadius: "4px",
        backgroundColor:"cornflowerblue", 
        padding: "10px"
    }
  return (
    <Grid >
        <Grid component="ul" sx={ulStyles} >
        {data.map((dat)=>
                <Grid container component="li" key={dat.id} alignItems="center" style={liStyles}>
                    <img src={dat.url} alt={dat.title} width="45px" height="45px" style={iconStyles} />
                    <Typography variant='body2' component="p" width="70%">{dat.title}</Typography>
                </Grid>
        )}
        </Grid>
    </Grid>
  )
}

export default Features