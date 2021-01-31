import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./css/Main.css"
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <div>
            {/* about me section */}
            {/* project section */}
            <div className="grids">
             <h1>Projects</h1>
                <div className="boxes">1</div>
                <div className="boxes">2</div>
                <div data-aos="fade-up" className="boxes">3</div>
                <div data-aos="fade-up-right" className="boxes">4</div>
                <div data-aos="fade-right" className="boxes">5</div>
                <div data-aos="fade-left" className="boxes">6</div>
                <div data-aos="fade-down" className="boxes">7</div>
            </div>
            {/* contact me */}
            <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
 
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>       
        </div>
        </div>
    )
}

export default Home;