import React, { useEffect } from 'react';
import { Container, Button } from 'reactstrap';

function Contact() {

    useEffect(() => {
        document.title = "Contact || Learn Code with Altaf";
    }, []);

    return (
        <div>
            <Container className='text-center' style={{ padding: "2rem", backgroundColor: "#f8f9fa", borderRadius: "0.3rem" }}>
                <h1>Contact Altaf Raza Siddique</h1>
                <p>If you have any questions or want to connect, feel free to reach out. Whether you're a student, a developer, or just curious, Altaf is here to help!</p>
                <p>Email: altafraza898@gmail.com</p>
                <p>Phone: +123 456 7890</p>
                <Button color='primary' outline>Send a Message</Button>
            </Container>
        </div>
    );
}

export default Contact;
