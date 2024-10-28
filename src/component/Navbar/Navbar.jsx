import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import "./Navbar.css"
export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#f50057] lg:px-20 flex
    justify-between'>
  
    
       <div className='lg:mr-10 cursor-pointer flex items-center
        space-x-4'>
          <li className='logo font-semibold text-gray-300 text-2x1'>
            Food Nation

          </li>

       </div>

    
  <div className='flex items-center space-x-2 la:space-x-10'>
          <div className=''>
            <IconButton>
              <SearchIcon sx={{fontSize:"1.5rem"}}/>

            </IconButton>
          </div>
          
          <div className=''>

            <Avatar sx={{bgcolor:"white",color:pink.A400}}>J</Avatar>

          </div>
          <div className=''> 
           
            <IconButton>
              <Badge color="primary" badgeContent={3}>
              <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
              </Badge>
             
            </IconButton>
         
   </div>
           
           </div>


    </div>
  )
}


