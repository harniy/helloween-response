import React from "react";

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }


    return(
        <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <img src={require("../assets/img/logo.png").default} alt="" className="footer__logo-img" />
                            Halloween
                        </a>

                        <p className="footer__description">Enjoy the scariest night <br /> of your life.</p>
                        
                        <div className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <box-icon name='facebook' type='logo' ></box-icon>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <box-icon name='instagram' type='logo' ></box-icon>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social-link">
                            <box-icon name='twitter' type='logo' ></box-icon>
                            </a>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">About</h3>
                        
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Features</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">News</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Services</h3>
                        
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Discounts</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Shipping mode</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Company</h3>
                        
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">About us</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Our mision</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <span className="footer__copy">&#169; Bedlam. All rigths reserved</span>

                <div className="scroll__up" title="scroll up" onClick={() => scrollToTop()}>
                <box-icon name='up-arrow-alt' color="#dad8d7" ></box-icon>
                </div>

                <img src={require("../assets/img/footer1-img.png").default} alt="" className="footer__img-one" />
                <img src={require("../assets/img/footer2-img.png").default} alt="" className="footer__img-two" />
            </footer>
    )
}