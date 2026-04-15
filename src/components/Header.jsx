import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { categories } from '../data/mockData';
import './Header.css';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const megaRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const subNavItems = [
    { label: '크리트업 티쳐', path: '/teacher' },
    { label: '크리트업 스튜디오', path: '/studio' },
    { label: '기업교육', path: '/business' },
    { label: '무료 강의', path: '/free' },
    { label: '카페', href: 'https://cafe.naver.com/creatup', external: true },
    { label: '대한인공지능윤리협회', href: 'https://www.kaiea.ai.kr', external: true },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner container">
          {/* 로고 */}
          <Link to="/" className="header__logo" aria-label="Creatup 홈">
            <span className="header__logo-text">CREATUP</span>
          </Link>

          {/* 검색바 */}
          <form className="header__search" onSubmit={handleSearch}>
            <svg className="header__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="header__search-input"
              placeholder="배우고 싶은 것을 검색해보세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* 오른쪽 버튼 */}
          <div className="header__actions">
            <Link to="/ranking" className="header__action-btn">랭킹</Link>
            <Link to="/challenge" className="header__action-btn">챌린지</Link>
            <button className="header__login-btn">로그인</button>
            <button className="header__signup-btn">회원가입</button>
          </div>

          {/* 모바일 햄버거 */}
          <button
            className={`header__hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* 서브 네비게이션 */}
        <nav className="sub-nav">
          <div className="sub-nav__inner container">
            {/* 카테고리 메가메뉴 트리거 */}
            <div
              className="sub-nav__mega-trigger"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
              ref={megaRef}
            >
              <button className="sub-nav__cat-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                카테고리
              </button>

              {/* 메가메뉴 */}
              {megaMenuOpen && (
                <div className="mega-menu">
                  <div className="mega-menu__cats">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        className={`mega-menu__cat-item ${activeCat === cat.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCat(cat.id)}
                        onClick={() => {
                          navigate(`/category/${cat.id}`);
                          setMegaMenuOpen(false);
                        }}
                      >
                        <span className="mega-menu__cat-icon">{cat.icon}</span>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>
                  {activeCat && (
                    <div className="mega-menu__subs">
                      <h4 className="mega-menu__subs-title">
                        {categories.find((c) => c.id === activeCat)?.name}
                      </h4>
                      <div className="mega-menu__subs-grid">
                        {categories
                          .find((c) => c.id === activeCat)
                          ?.subs.map((sub) => (
                            <Link
                              key={sub}
                              to={`/category/${activeCat}?sub=${encodeURIComponent(sub)}`}
                              className="mega-menu__sub-item"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              {sub}
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 서브 메뉴 링크 */}
            <div className="sub-nav__links">
              {subNavItems.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sub-nav__link"
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 2, opacity: 0.5 }}>
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`sub-nav__link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__overlay" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-menu__panel">
            <div className="mobile-menu__header">
              <span className="header__logo-text" style={{ fontSize: 18 }}>CREATUP</span>
              <button onClick={() => setMobileMenuOpen(false)} aria-label="닫기">✕</button>
            </div>

            <form className="mobile-menu__search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <nav className="mobile-menu__nav">
              <Link to="/ranking">🏆 랭킹</Link>
              <Link to="/challenge">🎯 챌린지</Link>
              {subNavItems.map((item) =>
                item.external ? (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label} ↗
                  </a>
                ) : (
                  <Link key={item.path} to={item.path}>{item.label}</Link>
                )
              )}
            </nav>

            <div className="mobile-menu__cats">
              <h4>카테고리</h4>
              {categories.map((cat) => (
                <Link key={cat.id} to={`/category/${cat.id}`}>
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>

            <div className="mobile-menu__actions">
              <button className="btn-secondary" style={{ flex: 1 }}>로그인</button>
              <button className="btn-primary" style={{ flex: 1 }}>회원가입</button>
            </div>
          </div>
        </div>
      )}

      {/* 헤더 높이만큼 스페이서 */}
      <div style={{ height: 'calc(var(--header-height) + var(--sub-nav-height))' }} />
    </>
  );
}
