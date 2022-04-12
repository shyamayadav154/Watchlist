import { motion } from 'framer-motion'
import React,{useState} from 'react'

import { Link,NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/globalStat'


const Header = () => {

  const  {watched, watchlist} = useGlobalContext()
  
  const [openNav, setOpenNav] = useState(false)
  
  return (
    <header>
      <div className='navbar'>
        <div className='inner-content'>
          <div onClick={() => window.scroll(0, 0)} className='brand'>
            <Link to='/'>WatchList.com</Link>
            <div onClick={() => setOpenNav(!openNav)} className='toggle-btn'>
              {openNav ? (
                <i className='fa fa-times'></i>
              ) : (
                <i className='fa fa-bars'></i>
              )}
            </div>
          </div>
          <ul className='nav-links' id={`${openNav ? 'open' : null}`}>
            <li>
              <NavLink onClick={() => setOpenNav(false)} to='/movies'>
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpenNav(false)} to='/series'>
                Series
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setOpenNav(false)} to='/anime'>
                Anime
              </NavLink>
            </li>
            <li className='wl'>
              <NavLink onClick={() => setOpenNav(false)} to='/watchlist'>
                Watchlist
              </NavLink>{' '}
              <span
                className='badge'
                style={{ display: watchlist.length < 1 ? 'none' : 'flex' }}
              >
                {watchlist.length}
              </span>
            </li>
            <li className='wl'>
              <NavLink onClick={() => setOpenNav(false)} to='/watched'>
                Watched
              </NavLink>
              <span
                style={{ display: watched.length < 1 ? 'none' : 'flex' }}
                className='badge'
              >
                {watched.length}
              </span>
            </li>
            <li>
              <NavLink
                onClick={() => setOpenNav(false)}
                to='/add'
                className='btn btn-main'
              >
                +Add
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header