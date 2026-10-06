import { Link } from 'react-router-dom';
export default function NotFound(){ return <section className="not-found"><span>404</span><h1>Page not found</h1><p>The page does not exist in this frontend.</p><Link className="btn primary" to="/">Back to Home</Link></section>; }
