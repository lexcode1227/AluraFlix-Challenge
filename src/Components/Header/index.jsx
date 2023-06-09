import React, {useState} from 'react'
import { Grid, TextField, IconButton, Button, Avatar, Menu, MenuItem, Fade } from '@mui/material'
import Logo from '/src/assets/Logo--white-png.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { useMediaQuery } from '@mui/material'

const Header = ({nombre}) => {

    const [searchVisible, setSearchVisible] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const hideOn500px = useMediaQuery('(max-width:500px)')

    const toggleSearch = () => {
        setSearchVisible(!searchVisible)
      }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

  return (
    <Grid component="section" width="100%" sx={{backgroundColor: "#0066ff"}} >
        <Grid sx={{maxWidth: "1333px", margin: "0 auto"}}>
            <Grid 
                container width="100%"
                flexDirection="row" 
                component="header" 
                alignItems="center" 
                flexWrap="wrap"
                sx={{backgroundColor: "#0066ff", padding: "0 25px", justifyContent: hideOn500px  ? "center" : "space-between"}} 
            >
                <img src={Logo} width="216px" height="auto" />
                <Grid 
                    container component="nav" 
                    justifyContent="space-evenly"
                    alignItems="center"
                    width="auto"
                    maxWidth="420px"
                    height="56px"
                >
                    <div style={{display: "flex", alignItems: "center"}}>
                        {searchVisible && (
                            <TextField
                                sx={{ ml: 2 }}
                                value={searchValue}
                                onChange={(e) => {
                                    setSearchValue(e.target.value) 
                                    console.log(e.target.value)}
                                }
                                placeholder="Search challenge"
                            />
                        )}
                        <IconButton 
                            size='small' 
                            sx={{color: "white",}} 
                            onClick={toggleSearch} 
                        >
                            <SearchOutlinedIcon />
                        </IconButton>
                    </div>
                    <IconButton 
                        size='small' 
                        sx={{color: "white",}} 
                    >
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <div>
                        <Button 
                            id="fade-button" 
                            aria-controls={open ? 'fade-menu' : undefined} 
                            aria-haspopup="true" 
                            aria-expanded={open ? 'true' : undefined} 
                            onClick={handleClick} 
                            size="small" 
                            sx={{color: "white",fontFamily: 'Poppins', textTransform: "capitalize", fontSize: "16px", fontWeight:"500" }} 
                            startIcon={<Avatar alt={nombre} src="/src/assets/Avatar-alexa.jpg" />}
                        >
                            {nombre}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                            'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Header