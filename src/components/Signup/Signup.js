import React, { Component } from 'react'
import Container, { Logosvg } from './styled'
import Form from './form'
import icon from '../../images/signup-v-2.svg'
import './Signup.css'

export default class SignUp extends Component {
    render() {
        return (
        <Container className='form-container'>
            <Logosvg src={icon} alt='signup' />
            <Form />
        </Container>
        )
    }
}
