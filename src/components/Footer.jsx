import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* 상단 섹션 */}
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-text">CREATUP</span>
            </Link>
            <p className="footer__desc">
              배움의 시작, 성장의 플랫폼.<br />
              누구나 쉽고 재미있게 배울 수 있는 온라인 클래스.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="footer__social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__col">
              <h4 className="footer__col-title">서비스</h4>
              <Link to="/ranking">전체 랭킹</Link>
              <Link to="/challenge">챌린지</Link>
              <Link to="/free">무료 강의</Link>
              <a href="https://cafe.naver.com/creatup" target="_blank" rel="noopener noreferrer">카페 ↗</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">파트너</h4>
              <Link to="/teacher">크리트업 티쳐</Link>
              <Link to="/studio">크리트업 스튜디오</Link>
              <Link to="/business">기업교육</Link>
              <a href="https://www.kaiea.ai.kr" target="_blank" rel="noopener noreferrer">대한인공지능윤리협회 ↗</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">고객지원</h4>
              <a href="#">자주 묻는 질문</a>
              <a href="#">1:1 문의</a>
              <a href="#">공지사항</a>
              <a href="#">이용약관</a>
            </div>
          </div>
        </div>

        {/* 하단 섹션 */}
        <div className="footer__bottom">
          <div className="footer__info">
            <p>
              (주)크리트업 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
            </p>
            <p>
              서울특별시 강남구 테헤란로 123, 4층 | 고객센터: 02-1234-5678
            </p>
          </div>
          <p className="footer__copyright">
            © 2026 Creatup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
