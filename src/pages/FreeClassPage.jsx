import { useState } from 'react';
import ClassCard from '../components/ClassCard';
import { getFreeClasses, categories } from '../data/mockData';
import './FreeClassPage.css';

export default function FreeClassPage() {
  const [filter, setFilter] = useState('all');
  const freeClasses = getFreeClasses();

  const filtered = filter === 'all'
    ? freeClasses
    : freeClasses.filter(c => c.categoryId === filter);

  const relevantCats = [...new Set(freeClasses.map(c => c.categoryId))];

  return (
    <main className="free-page">
      <div className="container">
        <div className="free-page__header animate-in">
          <div className="free-page__hero">
            <div className="free-page__hero-orb" />
            <h1 className="free-page__title">🆓 <span className="gradient-text">무료 강의</span></h1>
            <p className="free-page__desc">부담없이 시작하세요. 고퀄리티 무료 강의를 지금 바로 수강하세요!</p>
          </div>
        </div>

        {/* 필터 */}
        <div className="free-page__filters animate-in animate-in-delay-1">
          <button
            className={`ranking-filter ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            전체
          </button>
          {relevantCats.map(catId => {
            const cat = categories.find(c => c.id === catId);
            return cat ? (
              <button
                key={catId}
                className={`ranking-filter ${filter === catId ? 'active' : ''}`}
                onClick={() => setFilter(catId)}
              >
                {cat.icon} {cat.name}
              </button>
            ) : null;
          })}
        </div>

        <div className="class-grid">
          {filtered.map((cls, i) => (
            <ClassCard key={cls.id} cls={cls} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
