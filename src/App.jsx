import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import NotFound from './pages/NotFound';
import { pages } from './data/siteData';

function RoutedPage() {
  const { pathname } = useLocation();
  const page = pages[pathname];
  if (!page) return <NotFound />;
  return <ContentPage page={page} path={pathname} />;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<RoutedPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
