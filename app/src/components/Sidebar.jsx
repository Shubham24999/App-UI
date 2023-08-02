import { Home} from '@mui/icons-material'
import PagesIcon from '@mui/icons-material/Pages';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = ({mode,setmode}) => {

    const names=[{name:"HomePages",icon:<Home />},
    {name:"Pages",icon:<PagesIcon />},
    {name:"Groups",icon:<Diversity3Icon />},
    {name:"MarketPlace",icon:<StorefrontIcon />},
    {name:"Friends",icon:<MobileFriendlyIcon />},
    {name:"Settings",icon:<SettingsApplicationsIcon />},
    {name:"Profile",icon:<AccountBoxIcon />}
    ]
  return (
    <Box flex={1} 
    sx={{display:{
        xs:'none',
        sm:'block'
    }
    }}
    >
    <Box position="fixed">
    <List >
    {
        names.map((item,id)=>{
            return <>
               <ListItem key={item.name} disablePadding>
              <ListItemButton component="a" href='#Home'> 
              <ListItemIcon>{item.icon}</ListItemIcon>                 
              <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            </>
        })
    }
    <ListItem onChange={e=>setmode(mode==="light"?"dark":"light")} disablePadding>
              <ListItemButton component="a" href='#Home'> 
              <ListItemIcon><Brightness4Icon /></ListItemIcon>                 
              <ListItemText primary={<Switch />} />
              </ListItemButton>
            </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Sidebar