import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./css/Main.css"
import {Form,Button, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import resume from './files/resume.pdf'
import portrait from './files/resumephoto.jpg'
import {projects} from './ProjectInfo/projectInfo'
import githubLogo from './ProjectInfo/img/github.png'
const laptopPath = './ProjectInfo/img/laptop.png'

function Home() {
    useEffect(() => {
        Aos.init({});
    }, []);
    
    console.log(projects)
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

        this.el.innerHTML = `<p className="wrap">${name} ${this.txt}</p>`;

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
                <div></div>
                <div>
                <h1 className="typer">
                <div href="" className="typewrite" data-period="500" data-type='["enjoys backend development.", "loves learning new things", "Loves to Develop." ]'>
                    <p className="wrap"></p>
                </div>
                </h1>                                         
                </div> 
                <div className="download">
                <a className="resume" href={resume} download>Download Resume</a>     
                </div>                 
            </section>
            {/* about me section */}
            <section className="about">
                <div className="photoContainer box">
                    <img data-aos="fade-in" data-aos-easing="ease" className="photo" src={portrait} alt="self portrait"></img>
                </div>
                <div className="box">
                    <h6 data-aos="fade-in" className="name">Richard Flores</h6>
                    <h1 data-aos="fade-in" className="jobTitle">Full Stack Developer</h1>
                    <p data-aos="fade-in" className="aboutMeText">
                        Software Developer, with experience building applications for Front End and Back End projects.
                        His background in managing large scale event production, band management, and many software development proficiencies help him leverage a collabrotive and fast paced approach. 
                        Richard is fueled by her passion for understanding the nuances of how software works. He considers himself a forever student, eager to both build on his academic foundations in Back End and Front End development and stay in tune with the latest digital technologies  through continued coursework.
                        </p>
                </div>
            </section>
            {/* project section */}
            <div className="grids">
             <h1 data-aos="fade-in" className="projectTitle">Projects</h1>
             {projects.map(project => 
             <div key={project.id} data-aos="fade-up" data-aos-easing="ease-in-out" className="boxes">
                 <h5 className="box a">Website</h5>
                 <h1 className="box b colorFade">{project.name}</h1>
                 <p className="box c">{project.description}</p>
                 <Button  className="box d projectButton" href={project.deployed}>Launch Site</Button>
                 <a href={project.github}><img className="box e mx-auto"  src={githubLogo} alt="Github Link"height="40" width="40"/></a>
                 <img className="box f"height="360" width="600" src={project.image} alt="Project on a laptop"></img>
             </div>)}
            </div>
            {/* contact me */}

                <div className="mainContainer">
                <div className="container">
  <form action="action_page.php">

    <label className="contactLabels" htmlFor="fname">First Name</label>
    <input className="contactLabels" type="text" id="fname" name="firstname" placeholder="Full name"/>

    <label className="contactLabels" htmlFor="lname">Last Name</label>
    <input className="contactLabels" type="text" id="lname" name="lastname" placeholder="youremail@email.com"/>

    <label className="contactLabels" htmlFor="subject">Subject</label>
    <textarea className="contactLabels" id="subject" name="subject" placeholder="Hello, I've got a project that I'd like to discuss further..." style={{height:"200px"}}></textarea>

    <input className="contactLabels" type="submit" value="Submit"/>

  </form>
</div>
                </div>
           
        </div>
    )
}

export default Home;