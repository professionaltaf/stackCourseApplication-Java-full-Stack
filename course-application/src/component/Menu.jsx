import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


function Menu() {
    return (

        <div>
            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            </ListGroup>

            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            </ListGroup>

            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Course</Link>
            </ListGroup>

            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/course-info" action>About</Link>
            </ListGroup>

            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>
            </ListGroup>
        </div>

        
    )
}

export default Menu
