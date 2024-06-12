import './SkillPage.css'
import htmlLogo from '../../components/images/htmllogo.png';
import cssLogo from '../../components/images/CSS-Logo.png';
import javaLogo from '../../components/images/java-logo.png';
import dockerLogo from '../../components/images/Docker-logo.png';
import pythonLogo from '../../components/images/python-logo.png';
import reactLogo from '../../components/images/react-logo.png';
import cppLogo from '../../components/images/cpplogo.png';
import sqlLogo from '../../components/images/sql-logo.png';
import npmLogo from '../../components/images/npm-logo.png';

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