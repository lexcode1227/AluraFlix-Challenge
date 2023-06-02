import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const ChallengeCard = (props) => {
  const { id, link, picture, title, text, fav } = props.data
  const { addFav, deleteChallenge } = props
  const eliminarIcon = {
      position: "absolute",
      top: "7px",
      right: "12px",
      cursor: "pointer",
  }
  const favIcon = {
    color: "#EA3131",
    position: "absolute",
    top: "7px",
    left: "12px",
    cursor: "pointer"
  }
  const favBorderIcon = {
    position: "absolute",
    top: "7px",
    left: "12px",  
    cursor: "pointer"  
  }
  return (
    <Card sx={{ maxWidth: 345 , height: 380, borderRadius: "10px", marginBottom: "40px", position: "relative"}} >
      <ClearIcon onClick={()=> deleteChallenge(id)} style={eliminarIcon}  ></ClearIcon>
      { fav ?<FavoriteIcon sx={favIcon} onClick={()=>addFav(id)}/> : <FavoriteBorderIcon sx={favBorderIcon} onClick={()=>addFav(id)}/> }
      <CardMedia
        sx={{ height: 200 }}
        image={picture}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
        {title}
        </Typography>
        <Typography variant="body2" component="p" color="text.secondary" sx={{height: "60px"}}>
        {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} >Information</Button>
      </CardActions>
    </Card>
  )
}

export default ChallengeCard