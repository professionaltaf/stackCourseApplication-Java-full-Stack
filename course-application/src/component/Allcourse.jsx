import React, { useState, useEffect, useRef } from 'react';
import Course from './Course';
import base_url from '../api/Bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Allcourses() {
    const [courses, setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c)=> c.id != id))
    }


    const toastId = useRef(null); // useRef to store the toast ID

    useEffect(() => {
        document.title = "All Courses";
    }, []);

    // Function to call the server 
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                // success
                console.log(response.data);
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success("Courses have been loaded");
                }
                setCourses(response.data);
            },
            (error) => {
                // for error
                console.log(error);
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error("Something went wrong");
                }
            }
        );
    };

    // Calling loading course function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows:</p>
            {courses.length > 0
                ? courses.map((item) => <Course key={item.title} course={item} update={updateCourses} />)
                : "No courses"}
        </div>
    );
}

export default Allcourses;
