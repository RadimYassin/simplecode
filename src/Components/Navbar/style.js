import styled from 'styled-components'
import { Container } from '../../GlobalStyle'
import { Link } from 'react-router-dom'
 
 export const Nav=styled.nav`
    background-color:white;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    height:60px;
    display:flex;
    justify-content: center;
    align-items:center; 
    font-size: 1rem; 
    position: sticky;
    top:0;
    z-index:999;
   
`
export const NavContainer=styled(Container)`

 display:flex;
 justify-content:space-between;
 align-items:center;
 height:60px;
 ${Container}
`


export const NavLogo = styled(Link)`
        color:black;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration:none;
    font-size:2rem;
    display:flex;
    align-items:center;
    @media screen and (max-width:700px) {
        font-size:1.8rem;
    }

`

 
export const MobileIcon = styled.div`
    display:none;
   
    @media screen and (max-width:960px){
        color:red;
        display:flex;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        font-size:1.8rem;
        cursor: pointer;
    }
`


export const NavMenu=styled.ul`

display:flex;
align-items:center;
list-style:none;
text-align:center;
color:black;
@media screen and (max-width:960px){
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      display:flex;
      flex-direction:column;
      width:30%;
      height:90vh;
      position:absolute;
      top:60px;
      left:${({click})=>(click ? 0:'-100%')};
      opacity:1;
      transition:all 0.5s ease;
      background-color:white;
    }

    
`;


export const NavItem=styled.li`
    height:60px;
    border-bottom:2px solid transparent;
   
    @media screen and (max-width:960px){
        width:100%;
        &:hover{
        border:none;
    }
    }
`

export const Navlinks=styled(Link)`
    color:#000000;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0.5rem 1rem;
    height:100%;
    @media screen and (max-width:960px){
      text-align:center;
      padding:2rem;
      width:100%;
      display:table;
      &:hover{
        color:#2c99a9;
        transition:all 0.3s ease;
      }
    }
`