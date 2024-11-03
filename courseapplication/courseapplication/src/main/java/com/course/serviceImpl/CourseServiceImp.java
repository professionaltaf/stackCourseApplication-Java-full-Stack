package com.course.serviceImpl;

import com.course.dao.CourseDao;
import com.course.entities.Course;
import com.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImp implements CourseService {

    @Autowired
    private CourseDao courseDao;

    // Get All Course
    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }


    // Get Single Course
    @Override
    public Optional<Course> getCourse(long courseId) {
        return courseDao.findById(courseId);
    }

    // Add course
    @Override
    public Course addCourse(Course course) {
        courseDao.save(course);
        return course;
    }

    // Update Course
    @Override
    public Course updateCourse(Course course) {
        courseDao.save(course);
        return course;
    }

    // Delete Course
    @Override
    public void deleteCourse(long courseId) {
        Course course = courseDao.getOne(courseId);
        courseDao.delete(course);


    }
}
