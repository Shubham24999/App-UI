
import React from 'react'
import SingleCard from './SingleCard'
import { Box } from '@mui/material'

const CardDetails=[
  {
    subheader:"July 14, 2023",
    image:"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",   
  },
  {
    subheader:"March 26, 2022",
    image:"https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",   
  },
  {
    subheader:"Januray 1, 2020",
    image:"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",   
  }
]

const Feed = () => {

  return (
    <Box p={2} flex={4}>
        {
          CardDetails.map((cardDetail) =>{
            return <SingleCard key={cardDetail.image} subheader={cardDetail.subheader} image={cardDetail.image}/>
          })
        }
        
    </Box>
  )
}



export default Feed