import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const progressRef = useRef(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setPercentage(Math.round(scrolled));
      if (progressRef.current) {
        progressRef.current.style.width = `${scrolled}%`;
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <div className="app">
      <div className="scroll-progress-bar" ref={progressRef}></div>
      <div className="content">
        <h1>📜 Scroll Tracker</h1>
        <p>Scroll to see the progress bar in action!</p>
        <p className="percentage">{percentage}% read</p>
        {[...Array(100)].map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in tincidunt felis.
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
