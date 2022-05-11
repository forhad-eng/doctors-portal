import React from 'react'
import { Link } from 'react-router-dom'
import footerBg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{ background: `url(${footerBg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
            class="p-10"
        >
            <div className="footer">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to="/" class="link link-hover">
                        Emergency Checkup
                    </Link>
                    <Link to="/" class="link link-hover">
                        Monthly Checkup
                    </Link>
                    <Link to="/" class="link link-hover">
                        Weekly Checkup
                    </Link>
                    <Link to="/" class="link link-hover">
                        Deep Checkup
                    </Link>
                </div>
                <div>
                    <span class="footer-title">oral health</span>
                    <Link to="/" class="link link-hover">
                        Fluoride Treatment
                    </Link>
                    <Link to="/" class="link link-hover">
                        Cavity Filling
                    </Link>
                    <Link to="/" class="link link-hover">
                        Teeth Whitening
                    </Link>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <Link to="/" class="link link-hover">
                        New York - 101010 Hudson
                    </Link>
                </div>
            </div>
            <p className="text-center mt-20">&copy;Copyright 2022 All Rights Reserved</p>
        </footer>
    )
}

export default Footer
