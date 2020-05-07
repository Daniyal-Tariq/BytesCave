import React, { Component } from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import './Form.css'

class FormSection extends Component {
    state = {
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            companyName: this.state.companyName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            message: this.state.message,
        }

        axios.post('https://mailer-bytescave.herokuapp.com/api/v1', data)
            .then(res => {
                this.setState({ sent: true },
                    this.resetForm()
                )
                console.log('data', data)
            })
            .catch(() => {
                console.log('Message not sent')
            })
    }

    //   resetForm = () => {
    //     this.setState({
    //         name: '',
    //         message: '',
    //         email: '',
    //         buttonText: 'Message Sent'
    //     })
    // }

    render() {
        // console.log(this.state)
        return (

            <div className="form-section">
                <Container>
                    <h1>To learn how BytesCave can transform your business, schedule a free consultation today!</h1>
                    <Form className="contact-form">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>First Name *</Form.Label>
                                <Form.Control onChange={e => this.setState({ firstName: e.target.value })} name="firstName" value={this.state.firstName} type="text" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name *</Form.Label>
                                <Form.Control onChange={e => this.setState({ lastName: e.target.value })} name="lastName" value={this.state.lastName} type="text" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Company Name *</Form.Label>
                                <Form.Control onChange={e => this.setState({ companyName: e.target.value })} name="companyName" value={this.state.companyName} type="text" required />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Business Email *</Form.Label>
                                <Form.Control onChange={e => this.setState({ email: e.target.value })} name="email" value={this.state.email} type="email" required />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Phone Number *</Form.Label>
                            <Form.Control onChange={e => this.setState({ phoneNumber: e.target.value })} name="phoneNumber" value={this.state.phoneNumber} placeholder="(XXX) XXX-XXXX" type="number" />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>What can we help you with? *</Form.Label>
                            <Form.Control onChange={e => this.setState({ message: e.target.value })} name="message" value={this.state.message} required />
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Sign a mutual NDA before conversation?" />
                        </Form.Group>

                        <Button type="submit" onClick={this.formSubmit} className="form-button">
                            {this.state.buttonText}
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default FormSection;