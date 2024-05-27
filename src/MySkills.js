import './MySkills.css'
import htmlLogo from './components/htmllogo.png';
import cssLogo from './components/CSS-Logo.png';
import javaLogo from './components/java-logo.png';
import dockerLogo from './components/Docker-logo.png';
import pythonLogo from './components/python-logo.png';
import reactLogo from './components/react-logo.png';
import cppLogo from './components/c++ logo.png';
import sqlLogo from './components/sql-logo.png';
import npmLogo from './components/npm-logo.png';
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