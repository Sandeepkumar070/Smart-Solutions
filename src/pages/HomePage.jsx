import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, BarChart3, CheckCircle2, Cpu, Database, Factory,
  Gauge, Mail, MessageCircle, MonitorCog, Network, ScanLine, Server,
  ShieldCheck, Smartphone, UsersRound, Workflow, Wrench, PlayCircle,
  Boxes, ScanSearch, Bell, ClipboardList
} from 'lucide-react';
import { products, services, showcase } from '../data/siteData';

const serviceIcons = { Code2: MonitorCog, Cpu, ScanLine, Gauge, Network, PanelsTopLeft: Boxes };
const Arrow = () => <ArrowUpRight size={18}/>;

const outcomeCards = [
  ['Digital Work Instructions','Model-based SOPs, station-wise guidance and visual process control for operators.','/solutions/digital-work-instructions',ClipboardList],
  ['Production Traceability','Scan, validate and build genealogy from shop floor to management dashboard.','/solutions/production-traceability',ScanSearch],
  ['Real-Time OEE','Live availability, performance, quality and production visibility across lines.','/solutions/real-time-oee',Gauge],
  ['Digital Andon','Raise line calls, track response and reduce reaction time with visibility.','/solutions/andon-system',Bell],
  ['Industrial IoT / IIoT','Connect PLCs, edge devices, databases, APIs and alerts in one data flow.','/services/industrial-iot',Network],
  ['Custom Software','Build production, quality, warehouse and approval workflows around your exact process.','/services/custom-software',UsersRound]
];

const industries = [
  ['Automotive','Traceability, testing, assembly and OEE','/industries/automotive'],
  ['General Manufacturing','Machine monitoring and digital production','/industries/manufacturing'],
  ['Pharmaceutical','Controlled workflows and accountable data','/industries/pharmaceutical'],
  ['Food & Beverage','Batch visibility and line monitoring','/industries/food-beverage'],
  ['Warehouse & Logistics','FIFO, barcode movement and stock visibility','/industries/warehouse-logistics'],
  ['Electronics','Serialized production and test-result capture','/industries/electronics']
];

const dashboardMedia = [
  ['Digital Work Instructions','/images/digital-work-instructions-dashboard.png','/solutions/digital-work-instructions'],
  ['Production Traceability','/images/production-traceability-dashboard.png','/solutions/production-traceability'],
  ['Real-Time OEE Dashboard','/images/oee-dashboard.png','/solutions/real-time-oee'],
  ['Andon System','/images/andon-dashboard.png','/solutions/andon-system']
];

export default function HomePage(){
  const [heroFontScale, setHeroFontScale] = useState(1);
  const resizeHero = (amount) => setHeroFontScale(current => Math.min(1.2, Math.max(0.8, Number((current + amount).toFixed(1)))));
  return <>
    <section className="vision-hero compact-hero" style={{ "--hero-responsive-size": `${(3.7 * heroFontScale).toFixed(2)}vw`, "--hero-responsive-size-mobile": `${(8.3 * heroFontScale).toFixed(2)}vw`, "--hero-description-size": `${(16 * heroFontScale).toFixed(1)}px` }}>
      <video className="vision-video" autoPlay muted loop playsInline poster="/images/hero-video-poster.jpg">
        <source src="/video/smart-solutions-factory-flow.mp4" type="video/mp4"/>
      </video>
      <div className="vision-overlay"></div>
      <div className="vision-grid"></div>
      <div className="container vision-content compact-hero-content">
        <div className="vision-copy compact-copy">
          <span className="eyebrow light">SMART SOLUTIONS • INDUSTRIAL DIGITAL ENGINEERING</span>
          <h1>Connecting factories.<br/><em>Empowering decisions.</em></h1>
          <p>Smart Solutions brings PLC automation, traceability, real-time OEE, Digital Work Instructions and IIoT software together — from the machine floor to your management dashboard.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/solutions">Explore Solutions <Arrow/></Link>
            <Link className="btn hero-outline" to="/request-quote">Talk to an Engineer</Link>
          </div>
          <div className="hero-type-controls" aria-label="Homepage text size controls">
            <span>Text size</span>
            <button type="button" aria-label="Decrease homepage text size" title="Smaller text" onClick={() => resizeHero(-0.1)} disabled={heroFontScale <= 0.8}>A−</button>
            <button type="button" className="text-size-reset" onClick={() => setHeroFontScale(1)} title="Reset to normal text size" aria-label="Reset homepage text size">Normal</button>
            <button type="button" aria-label="Increase homepage text size" title="Larger text" onClick={() => resizeHero(0.1)} disabled={heroFontScale >= 1.2}>A+</button>
          </div>
          <div className="hero-mini-points">
            <span><CheckCircle2/>Digital Work Instructions</span>
            <span><CheckCircle2/>Traceability & Genealogy</span>
            <span><CheckCircle2/>OEE & Downtime</span>
            <span><CheckCircle2/>Industrial IoT / IIoT</span>
          </div>
        </div>

        <div className="hero-side-stack">
          <div className="vision-flow-card compact-flow-card">
            <small>LIVE MACHINE-TO-SOFTWARE FLOW</small>
            <div className="flow-mini-row"><span><Factory/>Machine</span><ArrowRight/><span><Cpu/>PLC</span><ArrowRight/><span><Database/>Data</span><ArrowRight/><span><MonitorCog/>Software</span></div>
            <b>Capture signals • Store data • Display intelligence</b>
          </div>
        </div>
      </div>
    </section>

    <section className="quick-access-band">
      <div className="container quick-access-grid">
        <Link to="/solutions/digital-work-instructions"><ClipboardList/><div><small>PRODUCT</small><strong>Digital Work Instructions</strong></div><Arrow/></Link>
        <Link to="/solutions/production-traceability"><ScanLine/><div><small>TRACEABILITY</small><strong>Track every part & process</strong></div><Arrow/></Link>
        <Link to="/solutions/real-time-oee"><Gauge/><div><small>OEE & DOWNTIME</small><strong>See losses in real time</strong></div><Arrow/></Link>
        <Link to="/services/industrial-iot"><Network/><div><small>IIOT</small><strong>Connect machines to software</strong></div><Arrow/></Link>
      </div>
    </section>

    <section className="section container leadership-intro compact-intro">
      <div>
        <span className="eyebrow">OUR DIRECTION</span>
        <h2>Smart Solutions bridges machine data, operator workflows and management visibility.</h2>
      </div>
      <div className="leadership-copy">
        <p>From PLC integration and edge connectivity to dashboards, traceability, Digital Work Instructions and business software, we design connected systems that are clean to use and practical to maintain.</p>
        <div className="principle-row"><span><ShieldCheck/>Practical engineering</span><span><Workflow/>Open integration</span><span><Server/>Cloud or on-prem</span></div>
        <Link className="text-link" to="/vision-mission">Read our vision & mission <Arrow/></Link>
      </div>
    </section>

    <section className="section light-panel-section">
      <div className="container">
        <div className="section-heading refined-heading"><div><span className="eyebrow">ENGINEERING LAYERS</span><h2>Four layers. One connected solution architecture.</h2><p>Every project can start from a problem on the shop floor, then grow into a stable software, automation and data system.</p></div><Link to="/services">All Services <Arrow/></Link></div>
        <div className="pillar-grid">
          {services.map(([title,text,href,code],i)=>{
            const Icon = serviceIcons[code] || MonitorCog;
            return <Link className="pillar-card" to={href} key={title}><div className="pillar-top"><span>{String(i+1).padStart(2,'0')}</span><Icon/></div><h3>{title}</h3><p>{text}</p><b>Explore capability <Arrow/></b></Link>;
          })}
        </div>
      </div>
    </section>

    <section className="section container outcomes-section">
      <div className="section-heading refined-heading"><div><span className="eyebrow">SOLUTIONS BY OUTCOME</span><h2>Start with the business problem, then choose the right system.</h2><p>Below are some of the main products and solution patterns used across manufacturing and operations.</p></div><Link to="/solutions">View all solutions <Arrow/></Link></div>
      <div className="outcome-grid">
        {outcomeCards.map(([title,text,href,I])=><Link to={href} className="outcome-card" key={title}><I/><h3>{title}</h3><p>{text}</p><span>View solution <Arrow/></span></Link>)}
      </div>
    </section>

    <section className="section dashboard-media-section">
      <div className="container">
        <div className="section-heading refined-heading"><div><span className="eyebrow">PRODUCT SCREENS</span><h2>Product screens redesigned in the Smart Solutions theme.</h2><p>We added product-focused visuals for Digital Work Instructions, Traceability, OEE and Andon systems.</p></div><Link to="/solutions/digital-work-instructions">View flagship product <Arrow/></Link></div>
        <div className="dashboard-media-grid">
          {dashboardMedia.map(([title,image,href])=><Link to={href} key={title} className="dashboard-media-card"><img src={image} alt={title}/><div><small>SMART SOLUTIONS</small><strong>{title}</strong></div></Link>)}
        </div>
      </div>
    </section>

    <section className="section container portfolio-section">
      <div className="section-heading refined-heading"><div><span className="eyebrow">SOFTWARE PORTFOLIO</span><h2>Industrial products and operational software platforms</h2><p>Use configurable products where they fit, and custom engineering where the workflow needs more depth.</p></div><Link to="/solutions/saas-products">Software portfolio <Arrow/></Link></div>
      <div className="portfolio-grid expanded-portfolio-grid">
        {products.map(([title,text,href,code],i)=><Link className={i===0?'portfolio-card portfolio-featured':'portfolio-card'} to={href} key={title}><div className="portfolio-code">{code}</div><div><h3>{title}</h3><p>{text}</p><b>Open solution <Arrow/></b></div></Link>)}
      </div>
    </section>

    <section className="section media-wall-section">
      <div className="container">
        <div className="section-heading refined-heading"><div><span className="eyebrow">VISUAL LIBRARY</span><h2>Showcase visuals, dashboards and solution imagery</h2><p>The website now uses a much larger visual library with product screens, covers, gallery images and factory visuals.</p></div><Link to="/resources/use-cases">Browse use cases <Arrow/></Link></div>
        <div className="media-wall-grid">
          {showcase.map((item)=><Link to={item.href} key={item.title} className="media-wall-card"><img src={item.image} alt={item.title}/><div><small>{item.tag}</small><strong>{item.title}</strong><p>{item.text}</p></div></Link>)}
        </div>
      </div>
    </section>

    <section className="section video-showcase-section">
      <div className="container">
        <div className="section-heading refined-heading"><div><span className="eyebrow">VIDEOS</span><h2>Product videos and hero motion content</h2><p>Short motion assets add life to the website and improve product storytelling.</p></div><Link to="/contact">Need a full demo? <Arrow/></Link></div>
        <div className="video-showcase-grid">
          <div className="video-card"><video autoPlay muted loop playsInline poster="/images/hero-video-poster.jpg"><source src="/video/smart-solutions-factory-flow.mp4" type="video/mp4"/></video><div><PlayCircle/><strong>Factory Flow Overview</strong><p>Software, automation, traceability and IIoT in one connected story.</p></div></div>
          <div className="video-card"><video autoPlay muted loop playsInline poster="/images/dwi-cover.jpg"><source src="/video/product-showcase.mp4" type="video/mp4"/></video><div><PlayCircle/><strong>Product Showcase</strong><p>Digital Work Instructions, Traceability, OEE and Andon product visuals.</p></div></div>
        </div>
      </div>
    </section>

    <section className="section architecture-feature">
      <div className="container architecture-feature-grid">
        <div className="architecture-media"><img src="/images/iiot-cover.jpg" alt="Smart Solutions industrial IoT architecture"/></div>
        <div className="architecture-copy">
          <span className="eyebrow light">OT + IT ARCHITECTURE</span>
          <h2>Connect the physical factory with the digital enterprise.</h2>
          <p>Machine and sensor values can pass through PLC or edge logic into SQL databases, cloud platforms, APIs and dashboards. The same event can trigger email, WhatsApp or SMS notifications.</p>
          <div className="architecture-list">
            <span><Cpu/>Mitsubishi / Siemens / industrial PLCs</span>
            <span><Database/>SQL Server / PostgreSQL / MongoDB</span>
            <span><Network/>OPC UA / Modbus TCP / MQTT / REST APIs</span>
            <span><MessageCircle/>Email / WhatsApp / SMS escalation</span>
          </div>
          <Link className="btn white" to="/resources/architecture">Explore architecture <Arrow/></Link>
        </div>
      </div>
    </section>

    <section className="section visual-story-section">
      <div className="container visual-story-grid">
        <div className="visual-story-copy">
          <span className="eyebrow light">FROM SHOP FLOOR TO SCREEN</span>
          <h2>Traceability and digital instructions built around the real production process.</h2>
          <p>A part is scanned, the system validates the station, work instructions guide the operator, the machine runs, results are captured, and software creates a searchable genealogy for quality and management teams.</p>
          <div className="dark-checks"><span><CheckCircle2/>Barcode / QR validation</span><span><CheckCircle2/>Station sequence control</span><span><CheckCircle2/>Digital SOP execution</span><span><CheckCircle2/>Searchable production history</span></div>
          <Link className="text-link light-link" to="/solutions/production-traceability">Explore traceability story <Arrow/></Link>
        </div>
        <div className="visual-story-image"><img src="/images/traceability-cover.jpg" alt="Traceability software"/></div>
      </div>
    </section>

    <section className="section container">
      <div className="section-heading refined-heading"><div><span className="eyebrow">INDUSTRIES</span><h2>Built for industrial and operational environments</h2><p>The same engineering approach can adapt across many manufacturing and business workflows.</p></div><Link to="/industries">All industries <Arrow/></Link></div>
      <div className="industry-pro-grid">
        {industries.map(([title,text,href])=><Link to={href} key={title}><BarChart3/><div><small>INDUSTRY</small><strong>{title}</strong><p>{text}</p></div><ArrowUpRight size={17}/></Link>)}
      </div>
    </section>

    <section className="section contact-preview">
      <div className="container contact-preview-grid">
        <div>
          <span className="eyebrow light">CONTACT SMART SOLUTIONS</span>
          <h2>Tell us the process, machine or workflow. We will help structure the solution.</h2>
          <p>Share the product type, machine details, number of stations, required modules, reports or integrations. We can propose the software, PLC, database and dashboard layers clearly.</p>
          <div className="contact-direct-row"><a href="mailto:sandeep.k@smartsolutions.com"><Mail/>sandeep.k@smartsolutions.com</a><a href="tel:+917088312070"><Smartphone/>+91 70883 12070</a><a href="tel:+919220603849"><Smartphone/>+91 92206 03849</a></div>
        </div>
        <div className="contact-preview-actions"><Link className="btn white" to="/request-quote">Request a Quote <Arrow/></Link><Link className="btn hero-outline" to="/contact">Contact Us</Link></div>
      </div>
    </section>
  </>;
}
