import Link from "next/link";
// import your icons
import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// get our fontawesome imports
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {    
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" href="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/"><FontAwesomeIcon icon={faHome} style={{"width":"25px;", "verticalAlign":"sub"}} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/aboutus">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blog">Blog</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link" href="/contactus">Contact Us</Link>
                            </li>                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit"><FontAwesomeIcon icon={faSearch} style={{"width":"25px;", "verticalAlign":"sub"}} /> </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;