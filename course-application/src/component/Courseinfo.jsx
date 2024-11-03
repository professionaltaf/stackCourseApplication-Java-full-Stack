import React, { useEffect } from 'react';
import { Container } from 'reactstrap';

function Courseinfo() {

    useEffect(() => {
        document.title = "Course Info || Learn Code with Altaf";
    }, []);

    return (
        <div>
            <Container className='text-center' style={{ padding: "2rem", backgroundColor: "#f8f9fa", borderRadius: "0.3rem" }}>
                <h1>Course Project Information</h1>
                <p>This project is developed as part of a comprehensive course aimed at teaching full-stack development. It includes hands-on examples and practical exercises to help learners build a real-world application.</p>
                <p>The backend is powered by Spring Boot, providing RESTful APIs, while the frontend leverages React.js for an interactive user experience. The project covers key topics such as authentication, CRUD operations, and responsive design.</p>
                <p>Through this project, students will gain experience in essential areas like database integration, API handling, and UI/UX design, preparing them for full-stack roles in the industry.</p>
            </Container>
        </div>
    );
}

export default Courseinfo;
