import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight, Check, CheckCircle2, ChevronRight, Clock3, Cpu, Database,
  Factory, Mail, MapPin, MessageCircle, MonitorCog, Network, Phone, PlayCircle,
  Server, ShieldCheck, Smartphone, Workflow
} from 'lucide-react';

const contactDetails = {
  email: 'sandeep.k@smartsolutions.com',
  phone1: '+91 70883 12070',
  phone2: '+91 92206 03849'
};

const processCopy = [
  'Study the current process, users, machines, pain points and expected outcome.',
  'Define modules, system architecture, data flow, interfaces and acceptance criteria.',
  'Build software, PLC logic, database and required system integrations.',
  'Validate normal flow, errors, production scenarios and user acceptance points.',
  'Deploy in the production environment, commission the system and complete handover.',
  'Track issues, improvements, AMC items and future scale requirements.'
];

function getCategory(path){
  if(path.includes('/services/plc') || path.includes('hmi-scada')) return 'automation';
  if(path.includes('traceability') || path.includes('barcode') || path.includes('quality') || path.includes('digital-work-instructions')) return 'traceability';
  if(path.includes('iot') || path.includes('machine-data') || path.includes('energy')) return 'iiot';
  if(path.includes('oee') || path.includes('breakdown') || path.includes('dashboard') || path.includes('andon')) return 'analytics';
  if(path.includes('visitor') || path.includes('vehicle') || path.includes('saas') || path.includes('custom-software') || path.includes('web-app')) return 'software';
  if(path.includes('warehouse')) return 'warehouse';
  return 'general';
}

const categoryContent = {
  automation: {
    heading:'Reliable machine control with clean integration points.',
    text:'We structure PLC logic, HMI screens, interlocks and data handshakes so the machine remains safe and maintainable while production data is available to software systems.',
    image:'/images/hero-factory.png',
    outcomes:['Stable sequence & interlocks','Clear HMI diagnostics','Mapped PLC data points','Software / database handshake']
  },
  traceability: {
    heading:'Every part, station and result becomes searchable evidence.',
    text:'Barcode or QR identity is connected to machine state, station validation and process results. Digital Work Instructions can sit in the same flow to guide the operator and control the sequence.',
    image:'/images/traceability-cover.jpg',
    outcomes:['Unique serial genealogy','Station sequence control','Process value capture','Rework / rejection history']
  },
  iiot: {
    heading:'Move machine data securely from the edge to action.',
    text:'We collect production and sensor data through PLCs or gateways, store it locally or in cloud infrastructure, and expose it through dashboards, APIs and notification workflows.',
    image:'/images/iiot-cover.jpg',
    outcomes:['Edge / PLC connectivity','Historical database','API & cloud integration','Email / WhatsApp / SMS alerts']
  },
  analytics: {
    heading:'Make production losses visible in real time.',
    text:'Machine states, counts, quality and downtime events are transformed into practical dashboards that help production, maintenance and management teams focus on the right losses.',
    image:'/images/oee-cover.jpg',
    outcomes:['Live KPI visibility','Target vs actual','Downtime analysis','Role-based reporting']
  },
  software: {
    heading:'Modern software built around the workflow — not a generic template.',
    text:'We design responsive applications with roles, approvals, dashboards, audit history, notifications and integrations so the system fits the way your team actually works.',
    image:'/images/software-suite-cover.jpg',
    outcomes:['Responsive web UI','Role-based workflows','Reports & exports','API-ready architecture']
  },
  warehouse: {
    heading:'Scan-driven material flow with clear stock visibility.',
    text:'Inward, allocation, FIFO, movement, inspection and outward activity can be controlled with barcode workflows and complete stock movement history.',
    image:'/images/warehouse-cover.jpg',
    outcomes:['Inward / outward flow','Rack & lane allocation','FIFO control','Movement history']
  },
  general: {
    heading:'A practical architecture designed for clear ownership and future scale.',
    text:'We keep interfaces simple for users while structuring the software, automation and data layers so future modules and integrations can be added without rebuilding everything.',
    image:'/images/team-cover.jpg',
    outcomes:['Clear solution scope','Modular architecture','Documented delivery','Supportable system']
  }
};

const defaultGalleries = {
  traceability:['/images/traceability-cover.jpg','/images/gallery/trace-scan.jpg','/images/gallery/trace-journey.jpg','/images/gallery/dwi-canvas.jpg'],
  analytics:['/images/oee-cover.jpg','/images/gallery/oee-hourly-chart.jpg','/images/gallery/andon-layout.jpg','/images/gallery/andon-response.jpg'],
  iiot:['/images/iiot-cover.jpg','/images/gallery/iiot-detail.jpg','/images/hero-video-poster.jpg'],
  software:['/images/software-suite-cover.jpg','/images/gallery/saas-apps.jpg','/images/gallery/team-culture.jpg'],
  automation:['/images/hero-video-poster.jpg','/images/hero-factory.png','/images/gallery/hero-mobile.jpg'],
  warehouse:['/images/warehouse-cover.jpg','/images/gallery/warehouse-detail.jpg','/images/gallery/trace-line-detail.jpg'],
  general:['/images/team-cover.jpg','/images/gallery/team-culture.jpg','/images/gallery/hero-mobile.jpg']
};

function ContactSection(){
  const [status,setStatus] = useState('');
  const [form,setForm] = useState({
    name:'', company:'', email:'', phone:'', projectType:'', location:'', budget:'', message:'', preferred:'Email'
  });

  const change=(e)=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async(e)=>{
    e.preventDefault();
    setStatus('sending');
    const endpoint=import.meta.env.VITE_CONTACT_API_URL;
    try{
      if(endpoint){
        const res=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
        if(!res.ok) throw new Error('API error');
      } else {
        const entries=JSON.parse(localStorage.getItem('smartSolutionsEnquiries')||'[]');
        entries.push({...form,createdAt:new Date().toISOString(),mode:'demo-local'});
        localStorage.setItem('smartSolutionsEnquiries',JSON.stringify(entries));
      }
      setStatus('success');
      setForm({name:'', company:'', email:'', phone:'', projectType:'', location:'', budget:'', message:'', preferred:'Email'});
    } catch(err){ setStatus('error'); }
  };

  return <section className="section contact-pro-section">
    <div className="container">
      <div className="contact-pro-head">
        <div>
          <span className="eyebrow">CONTACT SMART SOLUTIONS</span>
          <h2>Tell us the process. We will help structure the solution.</h2>
          <p>Use this form in demo mode now. When your API is ready, set <code>VITE_CONTACT_API_URL</code> and the same frontend will post the enquiry as JSON.</p>
        </div>
        <div className="contact-pro-cards">
          <a href={`mailto:${contactDetails.email}`}><Mail/><small>Email</small><strong>{contactDetails.email}</strong></a>
          <a href="tel:+917088312070"><Phone/><small>Primary</small><strong>{contactDetails.phone1}</strong></a>
          <a href="tel:+919220603849"><Smartphone/><small>Alternate</small><strong>{contactDetails.phone2}</strong></a>
        </div>
      </div>

      <div className="contact-form-layout">
        <form className="professional-form" onSubmit={submit}>
          <div className="form-title"><span>PROJECT BRIEF</span><strong>Share your requirement</strong></div>
          <div className="form-two">
            <label>Name<input name="name" value={form.name} onChange={change} required/></label>
            <label>Company<input name="company" value={form.company} onChange={change} required/></label>
            <label>Email<input type="email" name="email" value={form.email} onChange={change} required/></label>
            <label>Phone<input name="phone" value={form.phone} onChange={change} required/></label>
            <label>Project Type<select name="projectType" value={form.projectType} onChange={change}><option value="">Select</option><option>Digital Work Instructions</option><option>Production Traceability</option><option>OEE Dashboard</option><option>Andon System</option><option>Industrial IoT / IIoT</option><option>Custom Software</option></select></label>
            <label>Location<input name="location" value={form.location} onChange={change}/></label>
            <label>Budget Range<select name="budget" value={form.budget} onChange={change}><option value="">Select</option><option>Below ₹2 Lakh</option><option>₹2–5 Lakh</option><option>₹5–10 Lakh</option><option>₹10 Lakh+</option></select></label>
            <label>Preferred Contact<select name="preferred" value={form.preferred} onChange={change}><option>Email</option><option>Phone</option><option>WhatsApp</option></select></label>
          </div>
          <label>Requirement Details<textarea rows="6" name="message" value={form.message} onChange={change} placeholder="Describe the process, machines, number of stations, reports or integrations needed." required/></label>
          <button className="btn primary submit-pro" type="submit">Send Enquiry <ArrowUpRight size={16}/></button>
          {status==='sending'?<div className="form-state">Sending enquiry...</div>:null}
          {status==='success'?<div className="form-state success">Enquiry saved successfully.</div>:null}
          {status==='error'?<div className="form-state error">Something went wrong. Please try again.</div>:null}
        </form>

        <aside className="contact-side-panel">
          <span className="eyebrow light">WHAT TO SHARE</span>
          <h3>Help us understand the project faster.</h3>
          {['Current process / problem','Machine & PLC make / model','Number of stations or users','Required reports or KPI views','Database / server preference','Email / WhatsApp / SMS requirement'].map((x,i)=><div className="brief-item" key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
          <div className="contact-note"><Clock3/><div><small>Engagement</small><strong>Remote discussion • Site study • Requirement workshop</strong></div></div>
          <div className="contact-note"><MapPin/><div><small>Delivery</small><strong>India • On-site and remote project support</strong></div></div>
        </aside>
      </div>
    </div>
  </section>;
}

export default function ContentPage({page,path}){
  const category=getCategory(path);
  const story=categoryContent[category];
  const isContact=path==='/contact' || path==='/request-quote';
  const isIndustrial=['automation','traceability','iiot','analytics','warehouse'].includes(category);
  const gallery = page.gallery || defaultGalleries[category] || defaultGalleries.general;

  return <>
    <section className="inner-hero inner-hero-pro">
      <div className="container inner-hero-grid">
        <div className="inner-copy">
          <span className="eyebrow light">{page.kicker}</span>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/request-quote">Discuss Requirement <ArrowUpRight size={18}/></Link>
            <Link className="btn hero-outline" to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="inner-media inner-media-pro">
          <img src={page.image} alt={page.title}/>
          <div className="inner-media-label"><small>SMART SOLUTIONS</small><strong>{page.title}</strong><span>Clear scope • Open integration • Production-ready delivery</span></div>
        </div>
      </div>
    </section>

    <section className="solution-summary-band"><div className="container solution-summary-grid">
      {page.highlights.slice(0,4).map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}
    </div></section>

    <section className="section container overview-grid overview-pro">
      <div>
        <span className="eyebrow">THE SOLUTION</span>
        <h2>{story.heading}</h2>
        <p>{story.text}</p>
        <div className="pill-list">{page.highlights.map(x=><span key={x}><Check size={15}/>{x}</span>)}</div>
      </div>
      <div className="capability-card capability-pro"><small>WHAT YOU GET</small>{story.outcomes.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong><ChevronRight size={16}/></div>)}</div>
    </section>

    <section className="section solution-story-section">
      <div className="container image-story image-story-pro">
        <div className="image-story-media"><img src={story.image} alt={`${page.title} solution visual`}/></div>
        <div className="image-story-copy">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>Technology stays in the background. The workflow stays clear for the user.</h2>
          <p>{page.summary} We organize the project around events, roles, validation points, data ownership and reporting so every layer has a clear responsibility.</p>
          <div className="benefit-rows"><span><MonitorCog/>Usable interface</span><span><Server/>Reliable data layer</span><span><Network/>Open integrations</span><span><ShieldCheck/>Controlled workflow</span></div>
        </div>
      </div>
    </section>

    <section className="section media-gallery-section">
      <div className="container">
        <div className="section-heading refined-heading"><div><span className="eyebrow">VISUALS</span><h2>{page.title} media gallery</h2><p>Key screens and visual references used to communicate the solution clearly on the website.</p></div></div>
        <div className="content-gallery-grid">
          {gallery.map((img,idx)=><div className="content-gallery-card" key={img + idx}><img src={img} alt={`${page.title} visual ${idx+1}`}/></div>)}
        </div>
      </div>
    </section>

    {page.video?<section className="section video-inline-section">
      <div className="container video-inline-grid">
        <div>
          <span className="eyebrow">PRODUCT VIDEO</span>
          <h2>Motion content for better product storytelling</h2>
          <p>Short product motion helps explain the solution quickly and gives the website more visual depth.</p>
          <div className="pill-list"><span><PlayCircle size={15}/>Looping product showcase</span><span><CheckCircle2 size={15}/>Website-ready visual asset</span></div>
        </div>
        <div className="video-card simple-video-card"><video autoPlay muted loop playsInline poster={gallery[0]}><source src={page.video} type="video/mp4"/></video></div>
      </div>
    </section>:null}

    {isIndustrial?<section className="section container architecture-detail">
      <div className="architecture-detail-copy"><span className="eyebrow">CONNECTED ARCHITECTURE</span><h2>Machine → PLC / Edge → Database → Software → People</h2><p>Depending on the project, data can remain fully on-premise or connect to cloud services. APIs can integrate ERP/MES systems, while critical conditions can trigger alert workflows.</p><div className="architecture-chip-grid"><span><Factory/>Machines & Sensors</span><span><Cpu/>PLC / Edge</span><span><Database/>SQL / Data Store</span><span><MonitorCog/>React Dashboard</span><span><MessageCircle/>WhatsApp / Email / SMS</span><span><Workflow/>ERP / MES / APIs</span></div><Link className="text-link" to="/resources/architecture">See complete architecture <ArrowUpRight size={16}/></Link></div>
      <div className="architecture-detail-media"><img src="/images/iiot-cover.jpg" alt="Industrial connected architecture"/></div>
    </section>:null}

    <section className="section delivery-pro-section"><div className="container"><div className="section-heading refined-heading"><div><span className="eyebrow">DELIVERY PROCESS</span><h2>From requirement study to production handover.</h2><p>No black box. Every stage produces a clear output that moves the project forward.</p></div><Link to="/resources/delivery-model">Full delivery model <ArrowUpRight size={16}/></Link></div><div className="delivery-grid delivery-grid-pro">{page.process.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><h3>{x}</h3><p>{processCopy[i]}</p></div>)}</div></div></section>

    {isContact?<ContactSection/>:null}

    <section className="cta-section cta-pro"><div className="container cta-inner"><div><span className="eyebrow light">NEXT STEP</span><h2>Turn the requirement into a clear technical scope.</h2><p>Share the process, machine or software context and expected output. Smart Solutions can structure the modules, data flow, interfaces and delivery stages.</p><div className="cta-contact-line"><a href={`mailto:${contactDetails.email}`}><Mail/>{contactDetails.email}</a><a href="tel:+917088312070"><Phone/>{contactDetails.phone1}</a></div></div><Link to="/request-quote" className="btn white">Request a Quote <ArrowUpRight size={18}/></Link></div></section>
  </>;
}
