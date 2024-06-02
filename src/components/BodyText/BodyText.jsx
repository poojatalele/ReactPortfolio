import './BodyText.css';
import { Link } from 'react-router-dom';

function BodyText() {
  return (
    <div className="body-text-container">
      <div className="main-text">
        <h1 className="name">Hello World!</h1>
        <p>I am Pooja Talele</p>
        <p>Co-Founder | Software Engineer | Data Scientist</p>
      </div>
      <div className="btn">
        <button className="btn1">
          <Link to="/about" className="link-button">More About Me</Link>
        </button>
        <button className="btn2">Education</button>
        <button className="btn3">Experience</button>
        <button className="btn4">Tableau Resume</button>
      </div>
    </div>
  );
}

export default BodyText;
