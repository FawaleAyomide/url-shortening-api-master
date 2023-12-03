/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from "react";
import Nav from "./Nav";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({
      duration: 400,
      easing: "ease",
      Once: false,
    });
  });

  return <div>
    <header>
    <Nav/>
    More than just shorter links

    Build your brand’s recognition and get detailed insights 
    on how your links are performing.

    Get Started
    </header>
  
  Shorten a link here...

  Shorten It!

  Advanced Statistics

  Track how your links are performing across the web with our 
  advanced statistics dashboard.

  Brand Recognition

  Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.

  Detailed Records

  Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.

  Fully Customizable

  Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.

  Boost your links today

  Get Started

  Features

  Link Shortening
  Branded Links
  Analytics

  Resources

  Blog
  Developers
  Support

  Company

  About
  Our Team
  Careers
  Contact
  
  <div class="attribution"> 
    Coded by <a href="https://my-portfolio-swart-xi.vercel.app/">Zcodes</a>..
  </div>
  </div>;
};

export default Home;
