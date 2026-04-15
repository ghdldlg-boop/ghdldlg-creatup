import { useState, useMemo } from 'react';
import ClassCard from '../components/ClassCard';
import { classes, categories } from '../data/mockData';
import './RankingPage.css';

export default function RankingPage() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const filteredClasses = useMemo(() => {
    let result = classes.filter(c => !c.isFree);
    if (selectedCat !== 'all') {
      result = result.filter(c => c.categoryId === selectedCat);
    }
    switch (sortBy) {
      case 'rating': return [...result].sort((a, b) => b.rating - a.rating);
      case 'review': return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
      case 'price-low': return [...result].sort((a, b) => a.price - b.price);
      default: return result;
    }
  }, [selectedCat, sortBy]);

  return (
    <main className="ranking-page">
      <div className="container">
        {/* 헤더 */}
        <div className="ranking-page__header animate-in">
          <h1 className="ranking-page__title">
            🏆 <span className="gradient-text">전체 랭킹</span>
          </h1>
          <p className="ranking-page__desc">크리트업에서 가장 사랑받는 클래스를 만나보세요</p>
        </div>

        {/* 카테고리 필터 */}
        <div className="ranking-page__filters animate-in animate-in-delay-1">
          <button
            className={`ranking-filter ${selectedCat === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCat('all')}
          >
            전체
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`ranking-filter ${selectedCat === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* 정렬 */}
        <div className="ranking-page__sort animate-in animate-in-delay-2">
          <span className="ranking-page__count">총 {filteredClasses.length}개</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="category-main__sort"
          >
            <option value="popular">인기순</option>
            <option value="rating">평점순</option>
            <option value="review">리뷰 많은순</option>
            <option value="price-low">가격 낮은순</option>
          </select>
        </div>

        {/* 클래스 그리드 */}
        <div className="class-grid">
          {filteredClasses.map((cls, i) => (
            <ClassCard key={cls.id} cls={cls} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
