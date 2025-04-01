import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './LandingPage.css';

function LandingPage() {
  const [hovered, setHovered] = React.useState(false);

  const mainStyle = useSpring({
    transform: hovered ? 'translateX(100px)' : 'translateX(0px)',
    config: { tension: 200, friction: 15 },
  });

  const aboutStyle = useSpring({
    transform: hovered ? 'translateX(200px)' : 'translateX(0px)',
    config: { tension: 200, friction: 15 },
  });

  const contactStyle = useSpring({
    transform: hovered ? 'translateX(300px)' : 'translateX(0px)',
    config: { tension: 200, friction: 15 },
  });

  return (
    <div className="landing-page">
      <img src="/celestial_field.png" alt="Background" className="background" />
      <img src="/full_logo.svg" alt="Logo" className="logo" />
      <div
        className="button-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <animated.div className="circle-button" style={{mainStyle, backgroundColor: '#33ccff' }}>
          <a href="/main">Main</a>
        </animated.div>
        <animated.div className="circle-button" style={{aboutStyle, backgroundColor: '#ffcc99' }}>
          <a href="/about">About</a>
        </animated.div>
        <animated.div className="circle-button" style={{contactStyle, backgroundColor: '#00ff99' }}>
          <a href="/contact">Contact</a>
        </animated.div>
        <div className="circle-button" style={{ backgroundColor: '#9900ff' }} />
      </div>
    </div>
  );
}

export default LandingPage;