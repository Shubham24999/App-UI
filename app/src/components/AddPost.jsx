import { Add } from '@mui/icons-material'
import { Avatar,Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal=styled(Modal)({
  display:'flex',justifyContent:'center',alignItems:'center'
})

const UserBox=styled(Box)({
  display:'flex',
  gap:"10px",marginBottom:"20px"
})


const AddPost = () => {
  const [open,setOpen]=useState(false)
  return (
    <>
    <Tooltip  onClick={()=>setOpen(true)}
     title="Delete" sx={{position:"fixed",bottom:20, left:{
      xs:"calc(50% - 25px)",md:30
    }}} >
    <Fab color="primary" aria-label="add">
       <Add />
   </Fab>
    </Tooltip>
   <StyledModal
     open={open}
     onClose={()=>setOpen(false)}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
  >
  <Box width={400} height={290} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
      <Typography variant='h6' color="grey" textAlign="center">
        Create Post
      </Typography>
      <UserBox>
      <Avatar height={30} src='https://avatars.githubusercontent.com/u/103827393?v=4' alt='Image'/>
        <Typography variant='h6' >Shubham Gupta</Typography>
      </UserBox>
      <TextField
        sx={{width:"100%"}}
          multiline
          rows={2}
          placeholder="What's on your Mind ?..."
          variant="standard"
        />
      <Stack direction="row" gap={1} mb={3} mt={2}>
        <EmojiEmotionsIcon color='primary'/>
        <ImageIcon color='secondary'/>
        <VideoCameraBackIcon color='sucess'/>
        <PersonAddAlt1Icon color='error'/>
      </Stack>
      <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
        <Button>Post</Button>
        <Button sx={{width:"100px"}}><DateRangeIcon /></Button>
  
</ButtonGroup>
  </Box>
  
</StyledModal>
    </>
  )
}

export default AddPost