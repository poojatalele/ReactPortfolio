import"./Navbar.css"
function Navbar(){
    return(
        <div className="navbar">
            <h1 className="title">Pooja Talele</h1>
            <ul className="nav">
                <li><a href="#home" className="navLink">Home</a></li>
                <li><a href="#contact" className="navLink">Contact</a></li>
                <li>|</li>
                <li><a href="#about" className="navLink">About</a></li>
            </ul>
        </div>
    )
}
export default Navbar;