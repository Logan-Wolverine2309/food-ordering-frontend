import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
        <CardMedia 
            sx={{height:345}} 
        image='https://cdn.prod.website-files.com/63d06722a6f6c82db2e3292f/65812cd143c0fc6cd1e73488_AdobeStock_625253900.jpeg'/>
        <CardContent>
            <Typography variant='h5'>
                Indian Fast Food
            </Typography>
            <Typography variant='body2'>
                50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Kolkata"}</p>
                <p className="text-sm text-blue-500">
                    February 14, 2024 12:00 Am 
                    February 15, 2024 12:00 Am 
                </p>
            </div>
        </CardContent>
       {false && <CardActions>
            <IconButton>
            <DeleteIcon/>
            </IconButton>
        </CardActions>}
      </Card>
      
    </div>
  )
}

export default EventCard
