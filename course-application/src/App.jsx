
//import './App.css'
import Header from "./component/Header"
import Home from "./component/Home"
import Course from "./component/Course"
import Allcourse from "./component/Allcourse"
import { ToastContainer, toast } from "react-toastify";
import Addcourse from "./component/Addcourse"
import Menu from "./component/Menu"
import { Container,Row,Col } from "reactstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courseinfo from "./component/Courseinfo";
import Contact from "./component/Contact";


function App() {
  

  return (
    <div>
    <Router>
    <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<Addcourse />} exact />
                <Route path="/view-courses" element={<Allcourse />} exact />
                <Route path="/course-info" element={<Courseinfo />} exact />
                <Route path="/contact" element={<Contact/>} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App