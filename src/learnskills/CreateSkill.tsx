import React from 'react'
import {Box, Typography, Container, Grid,TextField, Select, MenuItem,InputLabel,FormControl,FormGroup,FormControlLabel,Checkbox, Button, Divider} from "@mui/material";


function CreateSkill() {
  return (
    <Box>
        <Box component="div" className="home-banner innerbanner">
    <Container maxWidth="xl" className='course-info'>    
        <Grid container>
            <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h4" >Python for Everybody Specialization</Typography>
            <Typography component="p">Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>            
            <Typography component="p">Your offering this course for</Typography>
            <Typography variant="h6" >FREE/$350</Typography>
           
            </Grid>
        </Grid>  
        </Container>  
    </Box>
    <Container maxWidth="xl">   
        <Grid container sx={{py:3}}>
            <Grid item xs={12} sm={8} md={9} className="create-course">
                <Typography component="p" className="success">This page is auto saved as draft.</Typography>
                <Typography component="h3">Add content to </Typography>
                <Box className="skillsection">
                    <Typography component="h4">WHAT YOU WILL LEARN</Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">Course Content</Typography>
                    <Box className="add-block">
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                            <Typography component="p">1. Basic setup      </Typography>
                        </Grid>
                        <Divider className='w-100'/>
                        <Grid item xs={12} sm={6} md={6}>
                        <TextField id="" label="Section title" variant="outlined"  fullWidth  size="small"/>
                        </Grid>                        
                        <Grid item xs={12} sm={6} md={6} className="upload-control">
                        <TextField id="" label="sample video" variant="outlined"  fullWidth  size="small"/>
                        <Button variant="outlined" component="label" size='small'>
                            Upload video
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={{display:"flex",justifyContent:"flex-end"}}>
                        <Button size="medium" variant="contained">Add</Button>
                        </Grid> 
                    </Grid>
                  
                    </Box>
                    
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">Requirements </Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
                <Box className="skillsection">
                    <Typography component="h4">Description</Typography>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField  multiline rows={4} size="small" placeholder='please enter your description Here...'/>       
                    </FormControl>
                </Box>
            </Grid> 
            <Grid item xs={12} sm={4} md={3}> 
            </Grid>
        </Grid> 
    </Container>
    </Box>
  )
}

export default CreateSkill