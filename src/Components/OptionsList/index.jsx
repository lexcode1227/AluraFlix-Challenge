import React from 'react'
import { Grid, MenuItem, TextField } from '@mui/material'
import {v4 as uuid} from "uuid"

const OptionsList = (props) => {
    const { title, error, value, helpertext, setValue, teams } = props
  const handleChange = (e)=> {
    setValue(e.target.value)
  }

  return (
    <Grid item >
        <TextField 
            select required
            id={title}
            label={title} 
            value={value} 
            error={error}
            helperText={helpertext}
            onChange={handleChange} 
            variant="outlined" 
            margin='normal' 
            sx={{
                width: "100%"
            }} 
        >
          { teams.map((team, i) => {
              return <MenuItem key={i} value={team}>
              {team}
              </MenuItem>  
            }) }
        </TextField>
    </Grid>
  )
}

export default OptionsList