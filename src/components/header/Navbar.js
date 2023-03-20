import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <div class="left">
                    <div class='navlogo'>
                    <NavLink to="/"><img src='./winkel_logo.png'alt=''/></NavLink>
                    </div>
                    <div class='nav_searchbaar'>
                        <input type="text" placeholder="search"name='' id=''/>
                        <div class="search_icon">
                            <SearchIcon id='search'/>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div className='nav_btn'>
                        <NavLink to="/login">Sign in</NavLink>
                        </div>
                        <div className='cart_btn'>
                        <Badge badgeContent={1} color="success">
                        <NavLink to="/buynow"><ShoppingBasketRoundedIcon id="icon"/></NavLink>
                        </Badge>
                    </div>
                    <NavLink to="/notime"><Avatar className='avtar'/></NavLink>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar