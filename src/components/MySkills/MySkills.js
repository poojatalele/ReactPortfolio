import './MySkills.css'
import htmlLogo from '../images/htmllogo.png';
import cssLogo from '../images/CSS-Logo.png';
import javaLogo from '../images/java-logo.png';
import dockerLogo from '../images/Docker-logo.png';
import pythonLogo from '../images/python-logo.png';
import reactLogo from '../images/react-logo.png';
import cppLogo from '../images/cpplogo.png';
import sqlLogo from '../images/sql-logo.png';
import npmLogo from '../images/npm-logo.png';

function MySkills(){
    return(
        <div className="mySkills">
            <h2>My Skills</h2>
            <div className="image-container">
            <img src={htmlLogo} alt="html logo" />
            <img src={cssLogo} alt="css logo" />
            <img src={javaLogo} alt="java logo" />
            <img src={cppLogo} alt="c++ logo" />
            <img src={pythonLogo} alt="python logo" />
            <img src={reactLogo} alt="react logo" />
            <img src={sqlLogo} alt="sql logo" />
            <img src={npmLogo} alt="npm logo" />
            <img src={dockerLogo} alt="docker logo" />
            </div>
        </div>
    )
}
export default MySkills;