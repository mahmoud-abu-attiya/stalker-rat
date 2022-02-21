import styled from "styled-components";

const container = styled.div`

display: flex;
justify-content: space-between;
min-height: 500px;
align-items: center;
@media (max-width:767px){
    flex-direction: column;
    justify-content: space-around;
}
`
export default container

export const Logosvg = styled.img`
width:50%;

@media (max-width:767px){
    width:100%;
}
`

export const FormContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 50%;
overflow: hidden;
@media (max-width:767px){
    width: 100%;
}
`

export const Steps = styled.section`
display: flex;

`

export const Step = styled.div`
display: flex;
flex-direction: column;
width:40vw;
max-width:500px;
justify-content: center;
@media (max-width:767px){
    width: 86vw;
}
`

export const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

export const InputWrapper = styled.div`
margin:20px 0 20px 0;
`

export const InputField = styled.input`
background-color: #000;
border: 1px solid #11c3c1;
border-radius: 15px;

padding: 0 12px;
outline: none;

color: white;
font-size: 16px;
transition:0.3s;

:focus{
    background-color: #000;
    color:#fff;
    box-shadow: 0px 0px 15px 0px cyan;
}




`

export const Eye = styled.i`
position: absolute;
color: #00ffff;
right: 4%;
top: calc(50% - 13px);
font-size: 20px
`



export const Message = styled.span`



font-size:clamp(17px, 1.5vw, 22px)
`
export const NextSVG = styled.img`
margin-left:10px;
height:100%;
`

export const Next = styled.button`
border:none;
background-color: transparent;
font-size: 28px ;
font-weight: bold;
display:flex;
align-items:center;
height:50px;
cursor: pointer;
${props => {
    if (props.back){
        return `transform: rotate(180deg);`
    }else{
        return `
        margin-left:auto;
        `
    }
}}

`
