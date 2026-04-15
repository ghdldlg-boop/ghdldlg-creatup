import { useState } from 'react';
import './StudioPage.css';

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: '총 강의', value: '12', unit: '개', icon: '📚', change: '+2' },
    { label: '총 수강생', value: '3,842', unit: '명', icon: '👥', change: '+128' },
    { label: '이번 달 수익', value: '2,450,000', unit: '원', icon: '💰', change: '+15%' },
    { label: '평균 평점', value: '4.8', unit: '/5.0', icon: '⭐', change: '+0.1' },
  ];

  const myClasses = [
    { id: 1, title: 'ChatGPT로 업무 자동화 마스터클래스', students: 1247, rating: 4.9, revenue: 890000, status: 'published', progress: 100 },
    { id: 2, title: 'AI 이미지 생성 완벽 가이드', students: 567, rating: 4.8, revenue: 450000, status: 'published', progress: 100 },
    { id: 3, title: 'Notion 생산성 200% 올리기', students: 234, rating: 4.7, revenue: 180000, status: 'published', progress: 100 },
    { id: 4, title: '[신규] AI 에이전트 실전 활용법', students: 0, rating: 0, revenue: 0, status: 'draft', progress: 65 },
  ];

  const recentReviews = [
    { student: '직장인A', course: 'ChatGPT 마스터클래스', rating: 5, text: '정말 실무에서 바로 쓸 수 있어요! 강력 추천합니다.', date: '1시간 전' },
    { student: '대학생B', course: 'AI 이미지 생성', rating: 5, text: '미드저니 사용법을 이렇게 쉽게 설명해주시다니 감사합니다.', date: '3시간 전' },
    { student: '프리랜서C', course: 'Notion 생산성', rating: 4, text: '노션 활용법을 체계적으로 배울 수 있었습니다.', date: '1일 전' },
  ];

  const notices = [
    { title: '2026년 5월 정산 안내', date: '2026-04-14', type: '공지' },
    { title: '크리트업 스튜디오 촬영 예약 오픈', date: '2026-04-12', type: '이벤트' },
    { title: '강의 품질 가이드라인 업데이트', date: '2026-04-10', type: '가이드' },
  ];

  const sideMenuItems = [
    { id: 'dashboard', label: '대시보드', icon: '📊' },
    { id: 'classes', label: '내 강의 관리', icon: '📚' },
    { id: 'revenue', label: '수익/정산', icon: '💰' },
    { id: 'students', label: '수강생 관리', icon: '👥' },
    { id: 'reviews', label: '수강 후기', icon: '⭐' },
    { id: 'studio', label: '스튜디오 예약', icon: '🎥' },
    { id: 'analytics', label: '데이터 분석', icon: '📈' },
    { id: 'settings', label: '설정', icon: '⚙️' },
  ];

  return (
    <main className="studio-page">
      <div className="studio-layout">
        {/* Sidebar */}
        <aside className="studio-sidebar">
          <div className="studio-sidebar__profile">
            <div className="studio-sidebar__avatar">C</div>
            <div>
              <p className="studio-sidebar__name">크리트업 티쳐</p>
              <p className="studio-sidebar__role">CREATUP STUDIO</p>
            </div>
          </div>
          <nav className="studio-sidebar__nav">
            {sideMenuItems.map(item => (
              <button
                key={item.id}
                className={'studio-sidebar__item' + (activeTab === item.id ? ' active' : '')}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="studio-sidebar__icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="studio-sidebar__cta">
            <button className="btn-primary" style={{ width: '100%', padding: '12px', fontSize: 13 }}>
              + 새 강의 만들기
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="studio-main">
          {/* Header */}
          <div className="studio-header">
            <div>
              <h1 className="studio-header__title">대시보드</h1>
              <p className="studio-header__desc">안녕하세요, 크리트업 티쳐님! 오늘의 현황을 확인하세요.</p>
            </div>
            <div className="studio-header__actions">
              <button className="btn-secondary" style={{ padding: '8px 16px', fontSize: 13 }}>가이드</button>
              <button className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>+ 새 강의</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="studio-stats">
            {stats.map((s, i) => (
              <div key={i} className="studio-stat glass animate-in" style={{ animationDelay: i * 0.08 + 's' }}>
                <div className="studio-stat__header">
                  <span className="studio-stat__icon">{s.icon}</span>
                  <span className="studio-stat__change">
                    {s.change}
                  </span>
                </div>
                <div className="studio-stat__value">{s.value}<span className="studio-stat__unit">{s.unit}</span></div>
                <div className="studio-stat__label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* My Classes Table */}
          <div className="studio-section">
            <div className="studio-section__header">
              <h2>내 강의 현황</h2>
              <button className="section-more">전체 보기 &rarr;</button>
            </div>
            <div className="studio-table glass">
              <div className="studio-table__head">
                <span>강의명</span>
                <span>수강생</span>
                <span>평점</span>
                <span>수익</span>
                <span>상태</span>
              </div>
              {myClasses.map(c => (
                <div key={c.id} className="studio-table__row">
                  <span className="studio-table__title">{c.title}</span>
                  <span>{c.students.toLocaleString()}명</span>
                  <span>{c.rating > 0 ? '&#9733; ' + c.rating : '-'}</span>
                  <span>{c.revenue > 0 ? c.revenue.toLocaleString() + '원' : '-'}</span>
                  <span>
                    <span className={'studio-status studio-status--' + c.status}>
                      {c.status === 'published' ? '공개중' : '작성중 ' + c.progress + '%'}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: Reviews + Notices */}
          <div className="studio-bottom-grid">
            {/* Recent Reviews */}
            <div className="studio-section">
              <div className="studio-section__header">
                <h2>최근 수강 후기</h2>
              </div>
              <div className="studio-reviews-list">
                {recentReviews.map((r, i) => (
                  <div key={i} className="studio-review-item glass">
                    <div className="studio-review-item__top">
                      <div className="studio-review-item__avatar">{r.student[0]}</div>
                      <div>
                        <strong>{r.student}</strong>
                        <span className="studio-review-item__course">{r.course}</span>
                      </div>
                      <span className="studio-review-item__date">{r.date}</span>
                    </div>
                    <p className="studio-review-item__text">{r.text}</p>
                    <div className="studio-review-item__rating">
                      {'&#9733;'.repeat(r.rating)}{'&#9734;'.repeat(5 - r.rating)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notices */}
            <div className="studio-section">
              <div className="studio-section__header">
                <h2>공지사항</h2>
              </div>
              <div className="studio-notices glass">
                {notices.map((n, i) => (
                  <div key={i} className="studio-notice">
                    <span className={'studio-notice__type studio-notice__type--' + n.type}>{n.type}</span>
                    <span className="studio-notice__title">{n.title}</span>
                    <span className="studio-notice__date">{n.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
