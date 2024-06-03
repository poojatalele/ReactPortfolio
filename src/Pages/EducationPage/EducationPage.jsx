import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Tile/Card";
import scalerlogo from '../../components/images/scaler-logo.png';

function EducationPage() {
    return (
        <div className="education-page">
            <Navbar />
            <div className="education-page-container">
                <h1>Degree</h1>
                <div className="education-container">
                <Card
                    img={scalerlogo}
                    header={"Scaler School of Technology, Bangalore"}
                    subheader={"BSc and MSc in Computer Science (2023-2027)"}
                    text={"I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.Apart from this, I have done courses on Deep Learning, Data Science, Docker/Kubernetes and Front End Web development.I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I am also the Google DSC leader & sports coordinator."}
                />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default EducationPage;