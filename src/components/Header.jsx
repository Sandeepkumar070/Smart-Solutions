import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { navGroups } from '../data/siteData';

export default function Header(){
  const [mobile,setMobile] = useState(false);
  const [open,setOpen] = useState(null);
  const close = ()=>{ setMobile(false); setOpen(null); };

  return <>
    <div className="top-strip">
      <div className="container top-strip-inner professional-strip">
        <div className="strip-contact">
          <a href="mailto:sandeep.k@smartsolutions.com"><Mail size={13}/>sandeep.k@smartsolutions.com</a>
          <a href="tel:+917088312070"><Phone size={13}/>+91 70883 12070</a>
          <a href="tel:+919220603849"><Phone size={13}/>+91 92206 03849</a>
        </div>
        <span>Software • Automation • Traceability • IIoT</span>
      </div>
    </div>

    <header className="site-header professional-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand smart-brand" onClick={close}>
          <img src="/images/smart-solutions-logo.png" alt="Smart Solutions" className="brand-logo" />
          <span className="brand-text"><strong>Smart Solutions</strong><small>Industrial Digital Engineering</small></span>
        </Link>

        <button className="menu-btn" onClick={()=>setMobile(!mobile)} aria-label="Toggle navigation">
          {mobile?<X/>:<Menu/>}
        </button>

        <nav className={mobile?'main-nav open':'main-nav'}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          {navGroups.map((group,idx)=><div className="nav-group" key={group.label} onMouseEnter={()=>setOpen(idx)} onMouseLeave={()=>setOpen(null)}>
            <button type="button" onClick={()=>setOpen(open===idx?null:idx)}>{group.label}<ChevronDown size={14}/></button>
            <div className={open===idx?'mega-menu show':'mega-menu'}>
              <div className="mega-title"><small>SMART SOLUTIONS</small><strong>{group.label}</strong></div>
              <div className="mega-links">{group.items.map(([label,href])=><Link to={href} key={href} onClick={close}><span>{label}</span><ArrowUpRight size={15}/></Link>)}</div>
            </div>
          </div>)}
          <NavLink to="/support" onClick={close}>Support</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <Link className="nav-cta" to="/request-quote" onClick={close}>Talk to an Engineer <ArrowUpRight size={16}/></Link>
        </nav>
      </div>
    </header>
  </>;
}
