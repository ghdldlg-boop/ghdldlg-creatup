import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RankingPage from './pages/RankingPage';
import ChallengePage from './pages/ChallengePage';
import TeacherPage from './pages/TeacherPage';
import StudioPage from './pages/StudioPage';
import BusinessPage from './pages/BusinessPage';
import FreeClassPage from './pages/FreeClassPage';
import ClassDetailPage from './pages/ClassDetailPage';
import SearchResultPage from './pages/SearchResultPage';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/free" element={<FreeClassPage />} />
        <Route path="/class/:id" element={<ClassDetailPage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
