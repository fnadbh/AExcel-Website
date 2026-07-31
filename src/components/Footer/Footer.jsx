import "./Footer.css";

import {
  Globe,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">

          <img
            src="/images/logo.jpeg"
            alt="ÆXcel Logo"
            className="footer-logo"
          />

          <div className="footer-social">

            <a
              href="https://www.icats.edu.my"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={20} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={18} />
            </a>

          </div>

        </div>

        {/* CENTER */}
        <div className="footer-center">

            <h3>Contact Us</h3>

          <div className="contact-item">

            <MapPin size={24} />

            <div>

              <p>i-CATS University College</p>

              <p>Jalan Stampin Timur</p>

              <p>93350 Kuching</p>

              <p>Sarawak, Malaysia</p>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="footer-right">

          <div className="contact-item">

            <Mail size={24} />

            <a href="mailto:info@i-cats.edu.my">
              info@i-cats.edu.my
            </a>

          </div>

          <div className="contact-item">

            <Phone size={24} />

            <a href="tel:+6082548857">
              +60 82-548857
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ÆXcel Centre for Academic Excellence. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;