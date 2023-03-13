import styled, { createGlobalStyle } from "styled-components";


//create global style 
const GlobaleStyle=createGlobalStyle`
background-color:red;
*{

 margin:0;
 padding:0;
 box-sizing:border-box;
 font-family:sans-serif;
}

`


export default GlobaleStyle;


//create global Container




export const Container =styled.div`

background-color:whitesmoke;
z-index:1;
width:100%;
max-width:1400px;
margin-left:auto;
margin-right:auto;




`
