import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    Container
  } from 'reactstrap';

  import axios from 'axios';
import base_url from '../api/Bootapi';
import { toast } from 'react-toastify';

function Course({course, update}) {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted")
                update(id)

            },
            (error)=>{
                toast.error("course not deleted !! Server problem")

            }
        )

    }



    return (
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle style={{ fontWeight: 'bold' }}>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id);
                    }} >Delete</Button>
                    <Button color="warning"style={{marginLeft:5}} >Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course


