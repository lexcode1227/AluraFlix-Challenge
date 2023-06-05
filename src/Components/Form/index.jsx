import React, { useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import InputText from '../InputText'
import OptionsList from '../OptionsList'
import {v4 as uuid} from "uuid"

const Form = ({addChallenge, closeModal, teams}) => {
  const [ title, setTitle] = useState("")
  const [ linkImgChallenge, setLinkImgChallenge] = useState("")
  const [ linkChallenge, setLinkChallenge] = useState("")
  const [ description, setDescription] = useState("")
  const [ category, setCategory] = useState("")
  const [ errors, setErrors] = useState({
    TITLE: {
      error: false,
      message: "It should be at least 3 characters",
    },
    LINKIMGCHALLENGE: {
      error: false,
      message: "Enter a valid url",
    },
    LINKCHALLENGE: {
      error: false,
      message: "Enter a valid url",
    },
    DESCRIPTION: {
      error: false,
      message: "Must be maximum 30 characters",
    },
    CATEGORY: {
      error: false,
      message: "A category must be chosen",
    },
  })
  // function titleValidation(title) {
  //   if (title.length <= 3) {
  //     return errors.TITLE
  //   }
  // }
  const Gridstyles = {
    marginBottom: "20px",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const buttonStyles = {
    marginTop: "25px",
    // fontFamily: "Montserrat",
    fontSize: "20px",
    letterSpacing: "0",
    fontWeight: "400",
    textTransform: "capitalize",
}
  const deleteInputs = ()=>{
  setTitle(""), setLinkImgChallenge(""), setLinkChallenge(""), setCategory(""), setDescription("")
}
  return (
    <Grid sx={Gridstyles}>
      <Typography component="h2" variant='h4' >New Challenge</Typography>
      <Grid>
        <form onSubmit={(e)=>{
          e.preventDefault()
          addChallenge({
            id: uuid(),
            title: title, 
            link: linkChallenge,
            picture: linkImgChallenge,
            team: category, 
            text: description
          })
          deleteInputs  
        }} >
          <Typography component="h2" variant='h6'>
            Complete the following information to create a new challenge.
          </Typography>
          <InputText 
            title="Title" 
            placeholder="Add the challenge title" 
            value={title} 
            error={errors.TITLE.error}
				    helpertext={
					    errors.TITLE.error ? errors.TITLE.message : ""
				    } 
            setValue={setTitle} />
          <InputText 
            title="Challenge link" 
            placeholder="Add the challenge link" 
            value={linkChallenge} 
            error={errors.LINKCHALLENGE.error}
				    helpertext={
					    errors.LINKCHALLENGE.error ? errors.LINKCHALLENGE.message : ""
				    } 
            setValue={setLinkChallenge}  />
          <InputText 
            title="Challenge image link" 
            placeholder="Add the challenge image link" 
            value={linkImgChallenge} 
            error={errors.LINKIMGCHALLENGE.error}
				    helpertext={
					    errors.LINKIMGCHALLENGE.error ? errors.LINKIMGCHALLENGE.message : ""
				    } 
            setValue={setLinkImgChallenge}  />
          <OptionsList
            title="Category" 
            placeholder="Select the category" 
            value={category}
            teams={teams}
            error={errors.CATEGORY.error}
				    helpertext={
					    errors.CATEGORY.error ? errors.CATEGORY.message : ""
				    }
            setValue={setCategory} />
          <InputText 
            title="Description" 
            placeholder="Add the challenge description" 
            value={description} 
            error={errors.DESCRIPTION.error}
				    helpertext={
					    errors.DESCRIPTION.error ? errors.DESCRIPTION.message : ""
				    } 
            setValue={setDescription}  />
          <Button variant="contained" type="submit" sx={buttonStyles} >
            Save
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default Form