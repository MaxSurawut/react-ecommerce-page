import React from 'react'
import { ReactComponent as LogoImg } from '../asset/images/logo.svg'
import { ReactComponent as Cart} from '../asset/images/icon-cart.svg'
import avatarImg from '../asset/images/image-avatar.png'
import { ReactComponent as DeleteIcon} from '../asset/images/icon-delete.svg'
import { ReactComponent as MenuIcon} from '../asset/images/icon-menu.svg'
import { ReactComponent as CloseMenu} from '../asset/images/icon-close.svg'
import './navbar.css'

import { datas } from './data'

export default function Navbar() {
  const [isActive, SetActive] = React.useState(false)
  const [isShow, SetShow] = React.useState(false)

  const showList = () => {
   SetActive(!isActive)
  }
  
  const showMenu = () =>{
    SetShow(!isShow)
  }
  
  return (
    <div>
      <nav className='navBar'>
        <MenuIcon className='menu-mobile' onClick={showMenu}/>
        <div className='logo'>
          <LogoImg/>
        </div>
        <ul className={`menu-list ${isShow ? 'showMenu' : ''}`}>
          <CloseMenu className='closeMenuBtn' onClick={()=> SetShow(false)}/>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='profile-section'>
          <Cart onClick={showList} className='mycart' />
          <span className={`cartlist ${isActive ? "show" : ""}`}>
            <h3>Cart</h3>
            <hr/>
            <div className='itemPick'>
              <img src={datas[0].thumbnaillImage} alt='thumbnail'/>
              <div>
                <p className='itemName'>Fall Limited Edition Sneakers</p>
                <p className='itemPrice'>$125.00 x 3 <strong>$375</strong></p>
              </div>
              <DeleteIcon className='deleteBtn'/>
            </div>
            <button className='checkoutBtn'>Checkout</button>
          </span>
          <img className='profileUser' src={avatarImg} alt='Profile'/>
        </div>
      </nav>
      <span className={`overlayMenu ${isShow ? 'showMenu' : ''}`}></span>
    </div>
  )
  
  
}
