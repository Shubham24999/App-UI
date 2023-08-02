import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const SingleCard = ({subheader,image}) => {
  return (
    <Card sx={{margin:"5px",marginBottom:"15px"}}>
      <CardHeader
        avatar={
          <Avatar
           sx={{ bgcolor: "red" }}
           aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shubham Kumar Gupta"
        subheader={subheader}
      />
      <CardMedia
        component="img"
        
        image={image}
        alt="Image"
        sx={{height:"20%"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color='error'/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      
    </Card>
  )
}

export default SingleCard