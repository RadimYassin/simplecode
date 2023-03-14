import styled ,{createGlobalStyle} from "styled-components";


const GlobleStyle=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:sans-serif;
}
`

export const Container=styled.div`
z-index:1;
width:100%;
margin: 0 auto;
padding: 0 50px;

@media screen and (max-width:991px) {
   padding : 0 auto;
}
`
export default GlobleStyle

