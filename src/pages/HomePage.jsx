import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ClassCard from '../components/ClassCard';
import {
  categories,
  getBestClasses,
  getFreeClasses,
  heroKeywords,
  teachers,
  challenges,
} from '../data/mockData';
import './HomePage.css';

export default function HomePage() {
  const [kwIndex, setKwIndex] = useState(0);
  const bestClasses = getBestClasses().slice(0, 8);
  const freeClasses = getFreeClasses().slice(0, 4);
  const topChallenges = challenges.slice(0, 3);

  useEffect(() => {
    const t = setInterval(() => setKwIndex((i) => (i + 1) % heroKeywords.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
        </div>
        <div className="container hero__content">
          <p className="hero__label animate-in">CREATUP - 배움의 시작</p>
          <h1 className="hero__title animate-in animate-in-delay-1">
            지금 가장 트렌디한<br />
            <span className="gradient-text">온라인 클래스</span>
          </h1>
          <div className="hero__keyword-wrap animate-in animate-in-delay-2">
            <span className="hero__keyword" key={kwIndex}>{heroKeywords[kwIndex]}</span>
          </div>
          <p className="hero__desc animate-in animate-in-delay-2">
            15,000+ 클래스 | 2,500+ 크리트업 티쳐 | 500만+ 수강생
          </p>
          <div className="hero__cta animate-in animate-in-delay-3">
            <Link to="/ranking" className="btn-primary" style={{ padding: '14px 36px', fontSize: 16 }}>
              인기 클래스 보기
            </Link>
            <Link to="/free" className="btn-secondary" style={{ padding: '13px 32px', fontSize: 16 }}>
              무료 강의 둘러보기
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-section" id="categories-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">카테고리</h2>
              <p className="section-subtitle">관심 분야를 선택하세요</p>
            </div>
          </div>
          <div className="category-grid">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                to={'/category/' + cat.id}
                className="category-card glass animate-in"
                style={{ animationDelay: i * 0.04 + 's' }}
              >
                <span className="category-card__icon">{cat.icon}</span>
                <span className="category-card__name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Classes */}
      <section className="home-section" id="best-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">BEST 클래스</h2>
              <p className="section-subtitle">수강생이 가장 많이 선택한 클래스</p>
            </div>
            <Link to="/ranking" className="section-more">전체 보기 &rarr;</Link>
          </div>
          <div className="class-grid">
            {bestClasses.map((cls, i) => (
              <ClassCard key={cls.id} cls={cls} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="home-section" id="teachers-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">인기 티쳐</h2>
              <p className="section-subtitle">검증된 전문가에게 배워보세요</p>
            </div>
          </div>
          <div className="teacher-grid">
            {teachers.map((t, i) => (
              <div
                key={t.id}
                className="teacher-card glass animate-in"
                style={{ animationDelay: i * 0.06 + 's' }}
              >
                <div className="teacher-card__avatar">{t.name[0]}</div>
                {t.badge && <span className="teacher-card__badge">{t.badge}</span>}
                <h3 className="teacher-card__name">{t.name}</h3>
                <p className="teacher-card__title">{t.title}</p>
                <div className="teacher-card__stats">
                  <span>&#9733; {t.rating}</span>
                  <span>수강생 {t.students.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="home-section" id="challenge-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">진행중인 챌린지</h2>
              <p className="section-subtitle">함께 도전하고 성장하세요</p>
            </div>
            <Link to="/challenge" className="section-more">전체 보기 &rarr;</Link>
          </div>
          <div className="challenge-preview-grid">
            {topChallenges.map((ch, i) => (
              <Link
                key={ch.id}
                to="/challenge"
                className="challenge-preview glass animate-in"
                style={{ animationDelay: i * 0.1 + 's' }}
              >
                <div className="challenge-preview__top">
                  <span className="challenge-preview__cat">{ch.category}</span>
                  <span className="challenge-preview__days">D-{ch.daysLeft}</span>
                </div>
                <h3>{ch.title}</h3>
                <div className="challenge-preview__bar">
                  <div className="challenge-preview__fill" style={{ width: ch.progress + '%' }} />
                </div>
                <div className="challenge-preview__meta">
                  <span>{ch.participants.toLocaleString()}명 참여</span>
                  <span>{ch.progress}%</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Free Classes */}
      <section className="home-section" id="free-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">무료 강의</h2>
              <p className="section-subtitle">부담 없이 시작하세요</p>
            </div>
            <Link to="/free" className="section-more">전체 보기 &rarr;</Link>
          </div>
          <div className="class-grid">
            {freeClasses.map((cls, i) => (
              <ClassCard key={cls.id} cls={cls} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta__card">
            <div className="home-cta__orb" />
            <h2 className="home-cta__title">
              지금 크리트업과 함께<br /><span className="gradient-text">성장을 시작하세요</span>
            </h2>
            <p className="home-cta__desc">15,000개 이상의 클래스가 당신을 기다리고 있습니다</p>
            <div className="home-cta__btns">
              <Link to="/ranking" className="btn-primary" style={{ padding: '16px 40px', fontSize: 16 }}>클래스 둘러보기</Link>
              <Link to="/teacher" className="btn-secondary" style={{ padding: '15px 36px', fontSize: 16 }}>티쳐 지원하기</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
