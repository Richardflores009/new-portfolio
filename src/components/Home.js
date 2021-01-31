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
    let name = 'Richard Flores'
    // type job description
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = `<span class="wrap">${name} ${this.txt}</span>`;

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    return (
        <div>
            {/* title sequence */}
            <section className="hero">
            <h1>
                <div href="" class="typewrite" data-period="500" data-type='["enjoys backend development.", "loves learning new things", "Loves to Develop." ]'>
                    <span className="wrap"></span>
                </div>
            </h1>  
            </section>
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