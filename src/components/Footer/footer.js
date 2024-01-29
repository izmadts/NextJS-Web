import Link from "next/link";
// import your icons
import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// get our fontawesome imports
import { faEnvelope, faGear, faLocationPin, faMobile, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <> 
        {/* master */}
            {/* Footer */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                {/* Section: Social media */}
                <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}
                    <div>
                        <Link href="#" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebook}  className="footerSocial"/>
                        </Link>
                        <Link href="#" className="me-4 text-reset">
                           <FontAwesomeIcon icon={faInstagram}  className="footerSocial"/>
                        </Link>
                        <Link href="#" className="me-4 text-reset">
                         <FontAwesomeIcon icon={faTwitter}  className="footerSocial"/>
                        </Link>
                        <Link href="#" className="me-4 text-reset">
                         <FontAwesomeIcon icon={faGoogle}  className="footerSocial"/>
                        </Link>
                        <Link href="#" className="me-4 text-reset">
                          <FontAwesomeIcon icon={faLinkedin}  className="footerSocial"/>
                        </Link>
                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="container">
                    <div className="text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <FontAwesomeIcon icon={faGear}  className="footerIcon"/>WeFixar
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p><Link href="#" className="text-reset">Angular</Link></p>
                                <p><Link href="#" className="text-reset">React</Link></p>
                                <p><Link href="#" className="text-reset">Vue</Link></p>
                                <p><Link href="#" className="text-reset">Laravel</Link></p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p><Link href="#" className="text-reset">Pricing</Link></p>
                                <p><Link href="#" className="text-reset">Settings</Link></p>
                                <p><Link href="#" className="text-reset">Orders</Link></p>
                                <p><Link href="#" className="text-reset">Help</Link></p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><FontAwesomeIcon icon={faLocationPin}  className="footerIcon"/> New York, NY 10012, US</p>
                                <p><FontAwesomeIcon icon={faEnvelope}  className="footerIcon"/> info@example.com</p>
                                <p><FontAwesomeIcon icon={faPhone}  className="footerIcon"/> + 01 234 567 88</p>
                                <p><FontAwesomeIcon icon={faMobile}  className="footerIcon"/> + 01 234 567 89</p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright:                  
                    <Link className="text-reset fw-bold" href="#">WeFixar.com</Link>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}

        </>
    );
};

export default Footer;