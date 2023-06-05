import React from 'react'
import { Grid, IconButton, Stack, Typography } from '@mui/material'
import Logo from "../../assets/Logo--png.png"
import FooterBg from "../../assets/wave-hai.svg"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
    const footerStyles = {
        backgroundColor: "transparent",
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "10px 0"
    }
    const iconsStyles = {
        color: "#fff",
        cursor: "pointer",
    }
  return (
    <Grid container component="footer" direction="column" justifyContent="center" alignItems="center" gap="20px" sx={footerStyles} >
        <img src={Logo} alt='Logo' width="216px" height="auto"/>
        <Typography variant='h6' component="h6" sx={{color: "#0066ff"}}>Made with ❤️ by @lexcode1227</Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{margin: "20px 0"}} >
            <IconButton size='small' href='https://www.linkedin.com/in/henry-agustin-/' sx={iconsStyles} >
                <LinkedInIcon />
            </IconButton>
            <IconButton size='small' href='https://github.com/lexcode1227' sx={iconsStyles}>
                <GitHubIcon />
            </IconButton>
        </Stack>
    </Grid>
  )
}

export default Footer