import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export default function Footer(){
  return <footer className="footer footer-pro">
    <div className="container footer-top-contact">
      <div>
        <span className="eyebrow light">SMART SOLUTIONS</span>
        <h3>Visionary industrial software, automation and IIoT solutions</h3>
      </div>
      <div className="footer-contact-links">
        <a href="mailto:sandeep.k@smartsolutions.com"><Mail/>sandeep.k@smartsolutions.com</a>
        <a href="tel:+917088312070"><Phone/>+91 70883 12070</a>
        <a href="tel:+919220603849"><Phone/>+91 92206 03849</a>
      </div>
    </div>

    <div className="container footer-grid footer-grid-pro">
      <div className="footer-intro">
        <Link to="/" className="brand smart-brand footer-brand">
          <img src="/images/smart-solutions-logo.png" alt="Smart Solutions" className="brand-logo footer-logo" />
          <span className="brand-text"><strong>Smart Solutions</strong><small>Automate • Connect • Grow</small></span>
        </Link>
        <p>We build connected systems that unify machines, operators, data, quality and management decision-making into one practical digital architecture.</p>
        <Link className="footer-cta-link" to="/vision-mission">Our vision →</Link>
      </div>

      <div>
        <h4>Services</h4>
        <Link to="/services/custom-software">Custom Software</Link>
        <Link to="/services/plc-programming">PLC Programming</Link>
        <Link to="/services/traceability-development">Traceability</Link>
        <Link to="/services/industrial-iot">Industrial IoT</Link>
        <Link to="/services/amc-support">Support & AMC</Link>
      </div>
      <div>
        <h4>Solutions</h4>
        <Link to="/solutions/digital-work-instructions">Digital Work Instructions</Link>
        <Link to="/solutions/production-traceability">Production Traceability</Link>
        <Link to="/solutions/real-time-oee">Real-Time OEE</Link>
        <Link to="/solutions/andon-system">Digital Andon</Link>
        <Link to="/solutions/warehouse-management">Warehouse Management</Link>
      </div>
      <div>
        <h4>Resources</h4>
        <Link to="/resources/architecture">Architecture</Link>
        <Link to="/resources/use-cases">Use Cases</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/resources/faq">FAQ</Link>
      </div>
      <div>
        <h4>Company</h4>
        <Link to="/about">About</Link>
        <Link to="/vision-mission">Vision & Mission</Link>
        <Link to="/team">Team</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

    <div className="container footer-bottom">
      <span>© 2026 Smart Solutions. All rights reserved.</span>
      <span><Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link></span>
    </div>
  </footer>;
}
