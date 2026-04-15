import { useParams, Link } from 'react-router-dom';
import { getClassById, getTeacher, formatPrice, getDiscount, getClassesByCategory } from '../data/mockData';
import ClassCard from '../components/ClassCard';
import './ClassDetailPage.css';

export default function ClassDetailPage() {
  const { id } = useParams();
  const cls = getClassById(Number(id));

  if (!cls) {
    return (
      <main className="detail-page">
        <div className="container" style={{ textAlign: 'center', padding: '120px 20px' }}>
          <span style={{ fontSize: 64 }}>&#128546;</span>
          <h2 style={{ marginTop: 20, color: 'var(--text-primary)' }}>클래스를 찾을 수 없습니다</h2>
          <Link to="/" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>홈으로 돌아가기</Link>
        </div>
      </main>
    );
  }

  const teacher = getTeacher(cls.teacherId);
  const discount = getDiscount(cls.originalPrice, cls.price);
  const relatedClasses = getClassesByCategory(cls.categoryId).filter(c => c.id !== cls.id).slice(0, 4);

  const curriculum = [
    { section: '섹션 1: 시작하기', lessons: ['강의 소개 및 학습 로드맵', '필요한 도구 설치 및 환경 설정', '기본 개념 이해하기'] },
    { section: '섹션 2: 기초 다지기', lessons: ['핵심 기본기 마스터', '실습 프로젝트 #1', '자주 하는 실수와 해결법'] },
    { section: '섹션 3: 실전 활용', lessons: ['실무 프로젝트 만들기', '고급 테크닉과 팁', '포트폴리오 완성'] },
    { section: '섹션 4: 심화와 마무리', lessons: ['실전 사례 분석', '최신 트렌드 반영하기', '수강 후 다음 단계 안내'] },
  ];

  const reviews = [
    { author: '수강생A', rating: 5, text: '정말 체계적인 커리큘럼으로 매우 만족합니다. 실무에 바로 적용 가능해요!', date: '2026-04-10' },
    { author: '수강생B', rating: 5, text: '티쳐님의 설명이 너무 쉽고 친절합니다. 비전공자도 충분히 따라갈 수 있어요.', date: '2026-04-08' },
    { author: '수강생C', rating: 4, text: '전체적으로 좋은 강의입니다. 실습 예제가 많아서 도움이 됩니다.', date: '2026-04-05' },
  ];

  const gradients = [
    'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
  ];
  const gradient = gradients[(cls.id || 0) % gradients.length];

  return (
    <main className="detail-page">
      <div className="container">
        <div className="detail-layout">
          <div className="detail-main">
            <div className="detail-thumb animate-in" style={{ background: gradient }}>
              <div className="detail-thumb__overlay">
                <span className="detail-thumb__play">&#9654; 미리보기</span>
              </div>
              <div className="detail-thumb__tags">
                {cls.tags?.map(tag => (
                  <span key={tag} className={'tag ' + (tag === 'BEST' ? 'tag-best' : tag === 'HOT' || tag === '인기' ? 'tag-hot' : tag === 'NEW' ? 'tag-new' : tag === '무료' ? 'tag-free' : 'tag-best')}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="detail-info animate-in animate-in-delay-1">
              <p className="detail-info__category">{cls.sub}</p>
              <h1 className="detail-info__title">{cls.title}</h1>
              <div className="detail-info__meta">
                <span className="detail-info__rating">&#9733; {cls.rating}</span>
                <span>리뷰 {cls.reviewCount.toLocaleString()}개</span>
                <span>수강생 {(cls.reviewCount * 3).toLocaleString()}명</span>
              </div>
            </div>

            <section className="detail-section animate-in animate-in-delay-2">
              <h2 className="detail-section__title">강의 소개</h2>
              <div className="detail-section__content">
                <p>이 강의는 <strong>{cls.sub}</strong> 분야에서 실무 역량을 쌓고 싶은 분들을 위해 설계되었습니다.</p>
                <p>기초부터 심화까지 단계별로 학습하며, 실습 프로젝트를 통해 실전 감각을 키울 수 있습니다.</p>
                <ul>
                  <li>체계적인 커리큘럼으로 기초부터 탄탄하게</li>
                  <li>실무 프로젝트를 통한 실전 경험</li>
                  <li>강의자료와 소스코드 제공</li>
                  <li>수강 기간 내 무제한 복습 가능</li>
                </ul>
              </div>
            </section>

            <section className="detail-section animate-in animate-in-delay-3">
              <h2 className="detail-section__title">커리큘럼</h2>
              <div className="detail-curriculum">
                {curriculum.map((sec, i) => (
                  <div key={i} className="detail-curriculum__section">
                    <h3 className="detail-curriculum__heading">{sec.section}</h3>
                    <ul className="detail-curriculum__lessons">
                      {sec.lessons.map((lesson, j) => (
                        <li key={j}><span className="detail-curriculum__icon">&#9655;</span>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2 className="detail-section__title">수강 후기</h2>
              <div className="detail-reviews">
                {reviews.map((r, i) => (
                  <div key={i} className="detail-review glass">
                    <div className="detail-review__header">
                      <div className="detail-review__avatar">{r.author[0]}</div>
                      <div>
                        <strong>{r.author}</strong>
                        <span className="detail-review__date">{r.date}</span>
                      </div>
                      <span className="detail-review__stars">{'&#9733;'.repeat(r.rating)}</span>
                    </div>
                    <p className="detail-review__text">{r.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-sidebar">
            <div className="detail-price-card glass animate-in">
              <div className="detail-price-card__price">
                {discount > 0 && <span className="detail-price-card__discount">{discount}% 할인</span>}
                <div className="detail-price-card__amount">
                  {cls.originalPrice > cls.price && <span className="detail-price-card__original">{formatPrice(cls.originalPrice)}</span>}
                  <span className="detail-price-card__current">{formatPrice(cls.price)}</span>
                </div>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: 16, fontSize: 16 }}>
                {cls.price === 0 ? '무료로 수강하기' : '수강 신청하기'}
              </button>
              <button className="btn-secondary" style={{ width: '100%', padding: 14 }}>위시리스트에 담기</button>
              <div className="detail-price-card__info">
                <div className="detail-price-card__info-item"><span>수강 방식</span><span>온라인</span></div>
                <div className="detail-price-card__info-item"><span>총 강의 시간</span><span>약 24시간</span></div>
                <div className="detail-price-card__info-item"><span>수강 기간</span><span>무제한</span></div>
                <div className="detail-price-card__info-item"><span>자료 제공</span><span>있음</span></div>
              </div>
            </div>

            <div className="detail-teacher-card glass animate-in animate-in-delay-1">
              <div className="detail-teacher-card__avatar">{teacher?.name[0]}</div>
              <h3 className="detail-teacher-card__name">{teacher?.name}</h3>
              <p className="detail-teacher-card__title">{teacher?.title}</p>
              <div className="detail-teacher-card__stats">
                <div><strong>&#9733; {teacher?.rating}</strong><span>평점</span></div>
                <div><strong>{teacher?.students.toLocaleString()}</strong><span>수강생</span></div>
              </div>
            </div>
          </aside>
        </div>

        {relatedClasses.length > 0 && (
          <section className="detail-related">
            <div className="section-header">
              <h2 className="section-title">연관 클래스</h2>
            </div>
            <div className="class-grid">
              {relatedClasses.map((c, i) => (
                <ClassCard key={c.id} cls={c} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
