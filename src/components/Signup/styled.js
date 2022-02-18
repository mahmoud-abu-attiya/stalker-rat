import styled from "styled-components";

const container = styled.div`
overflow:hidden;
display: flex;
justify-content: space-between;
@media (max-width:850px){
    flex-wrap: wrap;
    justify-content: center;
}
`
export default container

export const Logosvg = styled.img`
width:100%;
height: fit-content;
align-self: center;
@media (min-width: 850px){
    width: 50vw;
    height: 10vw

}
`

export const FormContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-self:baseline;
width: 100%;
@media (min-width:850px) {
    align-self: stretch;
    padding-top: 80px;
}
`

export const Steps = styled.section`
display: flex;
`

export const Step = styled.div`
display: flex;
flex-wrap: wrap;
width: 85vw;
height: 100%;
row-gap: 20px;
min-height:200px;
@media (min-width: 850px){
    width: 45vw
}
`

export const InputContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
row-gap: 30px;
height: fit-content;
`

export const InputWrapper = styled.div`
position: relative;
width: ${props => props.full ? '90%' : '40%'};
margin-bottom: ${props => props.bottom ? '20px' : '0'};
`

export const InputField = styled.input`
background-color: #000;
border: 1px solid #11c3c1;
border-radius: 15px;
width: 100%;
padding: 0 12px;
outline: none;
height: 45px;
color: white;
font-size: 16px;
transition:0.3s;

:focus{
    background-color: #000;
    color:#fff;
    box-shadow: 0px 0px 15px 0px cyan;
}

::placeholder{
    color: white;
    opacity: 0.7;
    font-size: 16px;

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

font-size: 22px;

align-self: center;
`

export const Next = styled.button`
color: black;
background-color: transparent;
font-size: 22px ;
font-weight: 500;

border: none;
outline: none;
height: fit-content;
display: flex;
align-items: center;
cursor: pointer;
${props => {
    if (props.back){
        return `transform: rotate(180deg);`
    }else{
        return `
        margin-left: auto;
        @media (min-width:850px){
            margin-left: 33vw
        }
        `
    }
}}

`
