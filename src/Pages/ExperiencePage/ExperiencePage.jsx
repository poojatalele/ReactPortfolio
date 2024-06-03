import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Tile/Card";
import googlelogo from '../../components/images/google.png';


function ExperiencePage() {
    return (
        <div className="experience-page">
            <Navbar />
            <div className="education-page-container">
                <h1>My Work Experience</h1>
                <div className="education-container">
                    <Card
                        img={googlelogo}
                        header={"Google"}
                        subheader={"Google Office, Bangalore"}
                        text={"I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.Apart from this, I have done courses on Deep Learning, Data Science, Docker/Kubernetes and Front End Web development.I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I am also the Google DSC leader & sports coordinator."}
                    />
                </div>
            </div>
        </div>
    )
}
export default ExperiencePage;