import"./Navbar.css"
function Navbar(){
    return(
        <div className="navbar">
            <h1 className="title">Pooja Talele</h1>
            <ul className="nav">
                <li className="nav-item"><a href="#home" className="navLink">Home</a></li>
                <li className="nav-item"><a href="#contact" className="navLink">Contact</a></li>
                <li>|</li>
                <li className="nav-item"><a href="#about" className="navLink">About</a></li>
            </ul>
        </div>
    )
}
export default Navbar;