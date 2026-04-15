import { useState } from 'react';
import './BusinessPage.css';

export default function BusinessPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: '🎯',
      title: '맞춤형 교육 제작',
      desc: '우리 회사 문제를 정확히 해결하는 완전 맞춤 교육을 설계해드려요',
      link: '#custom',
    },
    {
      icon: '📺',
      title: 'VOD 교육',
      desc: '매월 새로 추가되는 트렌디한 강의를 언제 어디서든 자유롭게 들어요',
      link: '#vod',
    },
    {
      icon: '🎤',
      title: '전문 출강 강사',
      desc: '검증된 현업 전문가가 우리 회사로 직접 찾아와 생생하게 강의해요',
      link: '#offline',
    },
  ];

  const vodCategories = [
    'AI/AX', '엑셀', '보고서&PPT', '데이터분석', '스피치',
    '조직문화', '비즈니스/영업', '마케팅', 'IT/개발', '사진/영상/디자인',
  ];

  const instructors = [
    { name: '김현수', specialty: 'AI/AX', desc: '3시간 업무를 단 3초만에 끝내는 업무 자동화 필살기', career: 'AI 기업 CEO', years: '강의경력 8년' },
    { name: '이지연', specialty: '디자인/브랜딩', desc: '디자이너처럼 일하는 실무 노하우와 콘텐츠 제작법', career: '브랜딩 스튜디오 대표', years: '강의경력 6년' },
    { name: '박성민', specialty: '마케팅', desc: '고객 행동을 유도하는 상위 0.001%의 마케팅 노하우', career: '퍼포먼스 마케팅 디렉터', years: '강의경력 10년' },
    { name: '정도윤', specialty: '개발/데이터', desc: 'AI시대 일잘러 필수 스킬 - 생성형 AI 완벽 가이드', career: '프론트엔드 테크리드', years: '강의경력 5년' },
    { name: '한서은', specialty: '보고서&PPT', desc: '상급자가 인정하는 보고서 작성의 기술', career: '前 대기업 전략기획팀', years: '강의경력 7년' },
    { name: '윤재호', specialty: '비즈니스/영업', desc: '설득하는 스피치와 협상의 기술', career: '재무설계 컨설턴트', years: '강의경력 12년' },
  ];

  const reviews = [
    {
      quote: '"팀 전체가 하나 되는 계기가 된 교육"',
      text: '팀원들 각자의 발표 스타일이 제각각이라 고민이었는데, 전문 강사님이 오셔서 우리 업무 특성에 맞는 스피치 스킬을 체계적으로 알려주시니 팀 전체 역량이 향상됐고, 무엇보다 함께 배우면서 팀워크도 더 좋아졌어요.',
      author: 'SaaS 스타트업 세일즈팀 담당자 정OO',
      course: '설득하는 스피치 교육 (25.03)',
    },
    {
      quote: '"우리 회사만을 위한 완벽한 교육이었어요"',
      text: '영업파트와 지원부서의 소통 문제를 딱 맞게 해결해주셨어요. 우리 회사 상황을 정확히 파악하고 맞춤형으로 설계해주셔서 교육 진행 과정에서도 직원들의 반응이 정말 좋았습니다.',
      author: '제조업 S사 조직문화팀 담당자 김OO',
      course: '조직문화/갈등관리 교육 (25.05)',
    },
    {
      quote: '"출근 때 공부하고, 자리에 앉아서 바로 적용"',
      text: '출퇴근 시간을 활용해서 수강하고 배운 내용을 바로 업무에 적용할 수 있어서 정말 효율적이었어요. 실무에 바로 쓸 수 있는 내용들이라 업무 효율이 확실히 올랐어요.',
      author: 'N커머스 기업 마케팅 담당자 정OO',
      course: '[VOD] 실무 엑셀 (25.03)',
    },
    {
      quote: '"AI 도입 후 생산성이 큰 폭으로 향상"',
      text: 'AI 도입을 고민하던 차에 전문가 출강을 의뢰했는데, 현재 저희의 수준을 진단하고 도입 목적을 조사한 후 맞춤형 커리큘럼을 짠 덕분에 실무 적용이 어렵지 않았습니다.',
      author: '유통사 L사 기획팀 담당자 김OO',
      course: 'AI/AX 역량 강화 교육 (25.04)',
    },
  ];

  const faqs = [
    {
      q: '교육 비용은 어떻게 되나요?',
      a: '교육 유형(맞춤형/VOD/출강), 참여 인원, 진행 시간에 따라 달라집니다. 무료 상담 시 정확한 견적을 제공해드리며, 예산에 맞는 최적의 교육 방안을 제안해드려요.',
    },
    {
      q: '교육 효과를 어떻게 측정하나요?',
      a: '교육 전후 설문조사, 수강률 분석, 만족도 조사 등을 통해 상세한 교육 성과 리포트를 제공해드립니다. 상급자 보고용 데이터와 개선 제안사항도 함께 정리해드려요.',
    },
    {
      q: '문의 후 얼마나 빨리 진행되나요?',
      a: '문의 후 평일 기준 2시간 이내 1차 답변을 드리고, 상세 교육 제안서는 1-2일 내 제공해드립니다. 급한 경우 당일 진행도 가능해요.',
    },
    {
      q: '우리 회사에 맞는 커리큘럼 제작이 가능한가요?',
      a: '네, 가능합니다. 사전 미팅을 통해 회사 현황, 교육 목적, 참여자 특성을 파악한 후 100% 맞춤형 커리큘럼을 설계해드려요. 기존 템플릿이 아닌 완전 새로운 교육을 제작합니다.',
    },
    {
      q: '강사의 전문성은 어떻게 보장되나요?',
      a: '크리트업은 까다로운 3단계 검증 과정(경력/실력/인성)을 거친 강사만 엄선합니다. 각 강사의 현업 경력, 교육 후기, 전문 분야를 투명하게 공개합니다.',
    },
    {
      q: '교육을 위해 사전에 준비해야 할 것이 있나요?',
      a: '최소한의 준비만 하시면 됩니다. 교육 대상자 명단, 교육 목적, 일정만 알려주시면 나머지는 저희가 처리해드려요.',
    },
  ];

  const partners = ['삼성전자', 'LG전자', '카카오', '네이버', '현대자동차', 'SK', 'CJ', '롯데', '포스코', 'KT'];

  return (
    <main className="biz-page">
      {/* ═══════════ 히어로 ═══════════ */}
      <section className="biz-hero">
        <div className="biz-hero__bg" />
        <div className="container biz-hero__content">
          <p className="biz-hero__label animate-in">CREATUP FOR BUSINESS</p>
          <h1 className="biz-hero__title animate-in animate-in-delay-1">
            트렌디한 교육,<br />
            <span className="accent-text">눈에 보이는 성과</span>
          </h1>
          <p className="biz-hero__desc animate-in animate-in-delay-2">
            조직이 바뀌려면, 사람이 먼저 바뀌어야 합니다.<br />
            크리트업 기업교육은 단순한 강의 공급을 넘어<br />
            조직 맞춤형 교육을 설계하는 <strong>Motivation Lab</strong>입니다.
          </p>
          <div className="biz-hero__cta animate-in animate-in-delay-3">
            <button className="btn-primary" style={{ padding: '16px 40px', fontSize: 16 }}>
              우리 회사 맞춤 교육 찾기
            </button>
            <button className="btn-secondary" style={{ padding: '15px 32px', fontSize: 16 }}>
              서비스 소개서 다운로드
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ 파트너 로고 ═══════════ */}
      <section className="biz-partners">
        <div className="container">
          <p className="biz-partners__label">신뢰할 수 있는 기업들이 함께합니다</p>
          <div className="biz-partners__logos">
            {partners.map((name, i) => (
              <span key={i} className="biz-partners__logo">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3가지 서비스 ═══════════ */}
      <section className="biz-services">
        <div className="container">
          <h2 className="biz-section-title animate-in">
            우리 회사에 딱 맞는 맞춤형 교육으로<br />
            <span className="accent-text">확실한 변화</span>를 경험하세요
          </h2>
          <div className="biz-services__grid">
            {services.map((s, i) => (
              <div key={i} className="biz-service glass animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="biz-service__icon">{s.icon}</span>
                <h3 className="biz-service__title">{s.title}</h3>
                <p className="biz-service__desc">{s.desc}</p>
                <span className="biz-service__link">자세히 보기 →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 전문 출강 강사 ═══════════ */}
      <section className="biz-instructors">
        <div className="container">
          <h2 className="biz-section-title animate-in">
            <span className="accent-text">검증된 현업 전문가</span>가<br />
            우리 회사로 직접 찾아옵니다
          </h2>
          <div className="biz-instructors__grid">
            {instructors.map((inst, i) => (
              <div key={i} className="biz-instructor glass animate-in" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="biz-instructor__avatar">{inst.name[0]}</div>
                <div className="biz-instructor__info">
                  <div className="biz-instructor__top">
                    <strong>{inst.name}</strong>
                    <span className="biz-instructor__tag">{inst.specialty}</span>
                  </div>
                  <p className="biz-instructor__desc">{inst.desc}</p>
                  <div className="biz-instructor__meta">
                    <span>{inst.career}</span>
                    <span>{inst.years}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 인기 VOD ═══════════ */}
      <section className="biz-vod">
        <div className="container">
          <h2 className="biz-section-title animate-in">
            지금 가장 인기있는 <span className="accent-text">VOD 교육</span>을<br />
            필요할 때 바로 시작하세요
          </h2>
          <div className="biz-vod__tags">
            {vodCategories.map((cat, i) => (
              <span key={i} className="biz-vod__tag">{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 기업 후기 ═══════════ */}
      <section className="biz-reviews">
        <div className="container">
          <h2 className="biz-section-title animate-in">
            실제로 어떤 성과가 있었는지 궁금하다면<br />
            <span className="accent-text">먼저 경험한 기업들의 이야기</span>를 들어보세요
          </h2>
          <div className="biz-reviews__grid">
            {reviews.map((r, i) => (
              <div key={i} className="biz-review glass animate-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="biz-review__quote">{r.quote}</p>
                <p className="biz-review__text">{r.text}</p>
                <div className="biz-review__footer">
                  <span className="biz-review__author">- {r.author} -</span>
                  <span className="biz-review__course">{r.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 중간 CTA ═══════════ */}
      <section className="biz-mid-cta">
        <div className="container">
          <div className="biz-mid-cta__grid">
            {[
              { icon: '📋', title: '서비스 소개서', desc: '상세한 서비스 안내 자료' },
              { icon: '💬', title: '도입 문의', desc: '맞춤 상담을 받아보세요' },
              { icon: '❓', title: 'FAQ', desc: '자주 묻는 질문 모아보기' },
              { icon: '📝', title: '블로그', desc: '교육 트렌드 & 인사이트' },
            ].map((item, i) => (
              <div key={i} className="biz-mid-cta__item glass">
                <span className="biz-mid-cta__icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="biz-faq">
        <div className="container">
          <h2 className="biz-section-title animate-in">자주 묻는 질문</h2>
          <div className="biz-faq__list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`biz-faq__item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="biz-faq__question">
                  <span>{faq.q}</span>
                  <span className="biz-faq__toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className="biz-faq__answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 하단 CTA ═══════════ */}
      <section className="biz-bottom-cta">
        <div className="container">
          <div className="biz-bottom-cta__card">
            <div className="biz-bottom-cta__orb" />
            <h2>지금, 크리트업 기업교육과<br /><span className="accent-text">배움을 다시 설계하세요</span></h2>
            <div className="biz-bottom-cta__btns">
              <button className="btn-primary" style={{ padding: '16px 40px', fontSize: 16 }}>
                교육 상담 신청
              </button>
              <button className="btn-secondary" style={{ padding: '15px 32px', fontSize: 16 }}>
                소개서 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
