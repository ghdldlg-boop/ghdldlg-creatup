import { Link } from 'react-router-dom';
import './TeacherPage.css';

export default function TeacherPage() {
  const steps = [
    { num: '01', title: '지원하기', desc: '간단한 정보와 강의 주제를 입력하세요' },
    { num: '02', title: '심사 & 준비', desc: '담당 매니저가 1:1 컨설팅을 도와드립니다' },
    { num: '03', title: '촬영 & 제작', desc: '전문 스튜디오에서 고품질 강의를 촬영합니다' },
    { num: '04', title: '런칭 & 수익', desc: '강의 오픈 후 안정적인 수익을 얻으세요' },
  ];

  const benefits = [
    { icon: '🎥', title: '무료 촬영 지원', desc: '전문 장비와 스튜디오를 무료로 제공합니다' },
    { icon: '📢', title: '마케팅 지원', desc: '크리트업 마케팅팀이 직접 홍보해드립니다' },
    { icon: '💰', title: '높은 수익 배분', desc: '업계 최고 수준의 수익 배분율을 보장합니다' },
    { icon: '📊', title: '데이터 분석', desc: '수강생 분석 대시보드를 제공합니다' },
    { icon: '🤝', title: '1:1 매니저', desc: '전담 매니저가 운영 전반을 서포트합니다' },
    { icon: '🎓', title: '교육 지원', desc: '강의 제작 교육 프로그램을 제공합니다' },
  ];

  const reviews = [
    { name: '김현수', role: 'AI 전문가', text: '"크리트업 덕분에 직장 다니며 월 500만원 추가 수익을 올리고 있어요. 최고의 파트너입니다."', revenue: '월 500만원+' },
    { name: '이지연', role: 'UX 디자이너', text: '"제작 지원이 정말 탄탄해요. 촬영부터 편집까지 전문 팀이 함께해서 퀄리티 있는 강의를 만들 수 있었습니다."', revenue: '월 350만원+' },
    { name: '박성민', role: '마케팅 디렉터', text: '"다른 플랫폼 대비 수익 배분율이 높고, 마케팅 지원이 정말 좋아요. 수강생이 매달 늘고 있어요."', revenue: '월 800만원+' },
  ];

  return (
    <main className="teacher-page">
      {/* 히어로 */}
      <section className="teacher-hero">
        <div className="teacher-hero__bg">
          <div className="teacher-hero__orb teacher-hero__orb--1" />
          <div className="teacher-hero__orb teacher-hero__orb--2" />
        </div>
        <div className="container teacher-hero__content">
          <div className="teacher-hero__badge animate-in">✨ 크리트업 티쳐 모집중</div>
          <h1 className="teacher-hero__title animate-in animate-in-delay-1">
            클래스로<br/>
            <span className="gradient-text">커리어 성장</span>부터<br/>
            <span className="gradient-text">수익화</span>까지
          </h1>
          <p className="teacher-hero__desc animate-in animate-in-delay-2">
            당신의 전문 지식이 누군가의 성장이 됩니다.<br/>
            크리트업과 함께 지식을 나누고 수익을 창출하세요.
          </p>
          <button className="btn-primary animate-in animate-in-delay-3" style={{ padding: '16px 48px', fontSize: 17 }}>
            티쳐 지원하기
          </button>
        </div>
      </section>

      {/* 통계 */}
      <section className="teacher-stats">
        <div className="container">
          <div className="teacher-stats__grid">
            {[
              { num: '2,500+', label: '활동 튜터' },
              { num: '500만+', label: '누적 수강생' },
              { num: '월 최대 2,000만원', label: '튜터 수익' },
              { num: '95%', label: '만족도' },
            ].map((s, i) => (
              <div key={i} className="teacher-stats__item animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="teacher-stats__num">{s.num}</span>
                <span className="teacher-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 혜택 */}
      <section className="teacher-benefits">
        <div className="container">
          <h2 className="teacher-section-title animate-in">
            튜터에게 제공되는 <span className="gradient-text">특별한 혜택</span>
          </h2>
          <div className="teacher-benefits__grid">
            {benefits.map((b, i) => (
              <div key={i} className="teacher-benefit glass animate-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="teacher-benefit__icon">{b.icon}</span>
                <h3 className="teacher-benefit__title">{b.title}</h3>
                <p className="teacher-benefit__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 절차 */}
      <section className="teacher-steps">
        <div className="container">
          <h2 className="teacher-section-title animate-in">
            <span className="gradient-text">간단한 4단계</span>로 시작하세요
          </h2>
          <div className="teacher-steps__grid">
            {steps.map((step, i) => (
              <div key={i} className="teacher-step animate-in" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="teacher-step__num">{step.num}</div>
                <h3 className="teacher-step__title">{step.title}</h3>
                <p className="teacher-step__desc">{step.desc}</p>
                {i < steps.length - 1 && <div className="teacher-step__arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 후기 */}
      <section className="teacher-reviews">
        <div className="container">
          <h2 className="teacher-section-title animate-in">
            크리트업 <span className="gradient-text">튜터 후기</span>
          </h2>
          <div className="teacher-reviews__grid">
            {reviews.map((r, i) => (
              <div key={i} className="teacher-review glass animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="teacher-review__avatar">{r.name[0]}</div>
                <p className="teacher-review__text">{r.text}</p>
                <div className="teacher-review__footer">
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                  <span className="teacher-review__revenue">{r.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="teacher-cta">
        <div className="container">
          <div className="teacher-cta__card">
            <div className="teacher-cta__orb" />
            <h2 className="teacher-cta__title">
              지금 바로 <span className="gradient-text">크리트업 티쳐</span>에<br/>도전해보세요
            </h2>
            <p className="teacher-cta__desc">지원은 무료이며, 심사 후 빠르게 안내드립니다.</p>
            <button className="btn-primary" style={{ padding: '16px 48px', fontSize: 17 }}>
              무료로 지원하기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
