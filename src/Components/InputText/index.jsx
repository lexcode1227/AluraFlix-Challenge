import React from 'react'
import { Grid, TextField } from '@mui/material'
import {v4 as uuid} from "uuid"

const InputText = (props) => {
  const { error, title, placeholder, value, helpertext, setValue } = props
  const handleValue = (e)=> {
    const inputValor = e.target.value
    setValue(inputValor)
  }
  const textFieldStyles = {
    width: "100%",
    // fontFamily: "Montserrat",
    fontSize: "18px",
  }
  const { type = "text" } = props

  return (
    <Grid item  >
      <TextField 
            helperText={helpertext} required 
            id={title}
            label={title} 
            placeholder={placeholder} 
            variant="outlined" 
            value={value} 
            error={error} 
            onChange={handleValue}
            margin='normal' 
            sx={textFieldStyles} 
            type={type}
          />
    </Grid>
  )
}

export default InputText