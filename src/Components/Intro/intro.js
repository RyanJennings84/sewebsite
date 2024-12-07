import React, {useState} from 'react';
import './intro.css';
import bg from '../../Assets/SEWeb3.jpg'; 
import btnImg from '../../Assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Welcome to RJ's Small Engine Repair</span>
            <span className="introText">I'm <span className="introName">Ryan Jennings</span> <br />At RJ's Small Engine Repair,</span>
            <p className="introPara">we are dedicated to providing reliable and efficient repair services for all types of small engines.<br/>
                With years of experience and a passion for helping our customers, we strive to exceed expectations <br/>and ensure that your equipment is running smoothly.
                Whether you need routine maintenance, repairs, <br/>or parts replacement, trust RJ's Small Engine Repair to get the job done right the first time.
            
            </p>
            
            <button className="btnImg" onClick={() => {
              document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
              <img src={btnImg} alt="" className='btn' />Hire Me!</button>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

