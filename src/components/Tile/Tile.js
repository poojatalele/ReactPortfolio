function Tile(img,header,text,link,linkText){
    return(
        <div className="tile">
            <div className="img-parent">
                <img src={img} alt="tile" className="tile-img" />
            </div>
        </div>
    )
}