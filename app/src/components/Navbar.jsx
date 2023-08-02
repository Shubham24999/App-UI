
import { AppBar, Toolbar, Typography,Box ,styled, InputBase, Badge, Avatar, MenuItem, Menu} from '@mui/material'
import React, { useState } from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import {Mail, Notifications} from '@mui/icons-material';
const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",

})

const Searchbar=styled("div")(({theme})=>({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    padding:"0px 10px",
    width:"40%",
    
}));

const IconContainer=styled(Box)(({theme})=>({
    // backgroundColor: "white"
    display:"none",
    gap:"10px",
    justifyItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const Userbox=styled(Box)(({theme})=>({
    // backgroundColor: "white",
    display:"none",
    gap:"10px",
    justifyItems:"center",
    [theme.breakpoints.down("sm")]:{
        display:"flex"
    },
}));


const Navbar = ({mode}) => {
    console.log(mode)
    const [open,setopen]=useState(false)

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography sx={{display:{xs:"none",sm:"block"}}}>
            Shubham Gupta
        </Typography>
        <Brightness1Icon sx={{display:{xs:"block",sm:"none"}}}/>
        <Searchbar><InputBase placeholder='Search...' sx={{width:"100%"}}/></Searchbar>
        <IconContainer>
        <Badge badgeContent={6} color="error">
        <Mail sx={{height:40}}/>
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications sx={{height:40}} />
        </Badge>
        <Avatar src='https://avatars.githubusercontent.com/u/103827393?v=4' alt='Image' onClick={()=>setopen(true)}/>
        </IconContainer>
        <Userbox onClick={()=>setopen(true)}>
        <Avatar  src='https://avatars.githubusercontent.com/u/103827393?v=4' alt='Image'/>
        <Typography variant='h6'>Shubham</Typography>
        </Userbox>
        </StyledToolbar>
        <Menu 
        open={open}
        onClose={()=>setopen(false)}
        anchorOrigin={{
            vertical:"top",
            horizontal:"right"
        }}
        transformOrigin={{
            vertical:"top",
            horizontal:"right"
        }}>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        
    </AppBar>
  )
}

export default Navbar