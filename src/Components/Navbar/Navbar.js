import React from 'react';
import { TbMenu } from 'react-icons/tb';
import  {IoMdClose} from "react-icons/io";
import { IconContext } from 'react-icons/lib';
import { 
  Nav, NavContainer, NavLogo, MobileIcon,NavItem,Navlinks,NavMenu

} from './style';
function Navbar({click,setClick}) {
  const handelClick=()=>setClick(!click);
  return (
    <IconContext.Provider value={{color:'blue'}}>
      <Nav>
        <NavContainer>
          <NavLogo to='/'>
            BBC
          </NavLogo>
          <MobileIcon onClick={handelClick}>{click ?  <IoMdClose/>:<TbMenu />}</MobileIcon>
           <NavMenu click={click} >
            <NavItem>
              <Navlinks to='/'>link</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>link</Navlinks>
            </NavItem>
            <NavItem>
              <Navlinks to='/'>link</Navlinks>
            </NavItem>
           </NavMenu>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
