/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "./Nav";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "../images/illustration-working.svg";
import Recognition from "../images/icon-brand-recognition.svg";
import Records from "../images/icon-detailed-records.svg";
import Customizable from "../images/icon-fully-customizable.svg";
import Logo from "../images/logo.svg";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Circles } from 'react-loading-icons';

const Home = () => {
    const [loading, setLoading] = useState('false');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    // const [error, setError] = useState();

    useEffect(() => {
        Aos.init({
            duration: 400,
            easing: "ease",
            Once: false,
        });
    });
    const fetchData = async () => {
        try{
            setLoading('true')
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`)
            setLoading('false')
            setResult(res.data.result.full_short_link)
        }catch(error){
            // setError(error)
            alert(error)
        }
    }
    const handleClick = () => {
        fetchData();
        setInput('');
    }

  return (
    <div>
      <header>
        <Nav />
        <main>
          <div className="text">
            <h1 data-aos="fade-right">More than just shorter links</h1>
            <p data-aos="fade-left">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn" data-aos="fade-up">
              Get Started
            </button>
          </div>
          <div className="img">
            <img
              src={Hero}
              alt="hero-img"
              className="hero"
              data-aos="fade-up-right"
            />
          </div>
        </main>
      </header>

      <section>
        <div className="sect-1-cont">
          <div className="shorten" data-aos="zoom-in-up">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Shorten a link here..." />
            <button className="btn" onClick={handleClick}>{loading === 'true' ? <Circles  className="load"/> : <p>Shorten It!</p>}</button>
            
            <p>{result}</p>
            {/* <p>{error}</p> */}
          </div>
          <div className="sect-1">
            <div className="head" data-aos="zoom-out-up" data-aos-delay="350">
              <h1>Advanced Statistics</h1>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="box-cont">
              <div
                className="box"
                data-aos="zoom-out-left"
                data-aos-delay="1000"
              >
                <img src={Recognition} alt="icon" className="brand" />
                <h2>Brand Recognition</h2>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
              <div className="box" data-aos="zoom-in-up" data-aos-delay="900">
                <img src={Records} alt="icon" className="brand" />
                <h2>Detailed Records</h2>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div
                className="box"
                data-aos="zoom-out-right"
                data-aos-delay="800"
              >
                <img src={Customizable} alt="icon" className="brand" />
                <h2>Fully Customizable</h2>
                <p>
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sect-2" data-aos="zoom-out-up">
          <h1 data-aos="fade-left" data-aos-delay="900">
            Boost your links today
          </h1>
          <button className="btn" data-aos="fade-right" data-aos-delay="800">
            Get Started
          </button>
        </div>
      </section>
      <footer>
        <div className="foot" data-aos='fade-down-left'>
        <img src={Logo} alt="" className="logo" />
        <div className="foot-links">
          <h2>Features</h2>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>
        <div className="foot-links">
          <h2>Resources</h2>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>
        <div className="foot-links">
          <h2>Company</h2>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className="aside">
        <div className="icons">
        <RiFacebookBoxFill className="icon" />
        <FaTwitter className="icon" />
        <IoLogoPinterest className="icon" />
        <FaInstagram className="icon" />
        </div>
        <div class="attribution">
          Coded by <a href="https://my-portfolio-swart-xi.vercel.app/">Zcodes</a>..
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
