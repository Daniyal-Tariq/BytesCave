import React from 'react';
import { Container, Button, Form, Col } from 'react-bootstrap';
import './Form.css'

function FormSection() {
    return (
        <div className="form-section">
            <Container>
                <h1>To learn how BytesCave can transform your business, schedule a free consultation today!</h1>
                <Form className="contact-form">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Company Name *</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Business Email *</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control placeholder="(XXX) XXX-XXXX" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>What can we help you with? *</Form.Label>
                        <Form.Control required />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Sign a mutual NDA before conversation?" />
                    </Form.Group>

                    <Button  type="submit" className="form-button">
                        Send
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default FormSection;