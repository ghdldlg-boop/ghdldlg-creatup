import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import ClassCard from '../components/ClassCard';
import { categories, getClassesByCategory, classes } from '../data/mockData';
import './CategoryPage.css';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const subFilter = searchParams.get('sub');
  const [sortBy, setSortBy] = useState('popular');

  const category = categories.find((c) => c.id === categoryId);
  const categoryClasses = useMemo(() => {
    let result = categoryId ? getClassesByCategory(categoryId) : classes.filter(c => !c.isFree);
    if (subFilter) {
      result = result.filter((c) => c.sub === subFilter);
    }
    switch (sortBy) {
      case 'rating': return [...result].sort((a, b) => b.rating - a.rating);
      case 'price-low': return [...result].sort((a, b) => a.price - b.price);
      case 'price-high': return [...result].sort((a, b) => b.price - a.price);
      case 'review': return [...result].sort((a, b) => b.reviewCount - a.reviewCount);
      default: return result;
    }
  }, [categoryId, subFilter, sortBy]);

  return (
    <main className="category-page">
      <div className="container">
        <div className="category-page__layout">
          {/* 사이드바 */}
          <aside className="category-sidebar">
            <h3 className="category-sidebar__title">카테고리</h3>
            <nav className="category-sidebar__nav">
              {categories.map((cat) => (
                <div key={cat.id} className="category-sidebar__group">
                  <Link
                    to={`/category/${cat.id}`}
                    className={`category-sidebar__item ${cat.id === categoryId ? 'active' : ''}`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                  {cat.id === categoryId && (
                    <div className="category-sidebar__subs">
                      <Link
                        to={`/category/${cat.id}`}
                        className={`category-sidebar__sub ${!subFilter ? 'active' : ''}`}
                      >
                        전체
                      </Link>
                      {cat.subs.map((sub) => (
                        <Link
                          key={sub}
                          to={`/category/${cat.id}?sub=${encodeURIComponent(sub)}`}
                          className={`category-sidebar__sub ${subFilter === sub ? 'active' : ''}`}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* 메인 컨텐츠 */}
          <section className="category-main">
            <div className="category-main__header">
              <div>
                <h1 className="category-main__title">
                  {category?.icon} {category?.name || '전체 클래스'}
                  {subFilter && <span className="category-main__sub"> / {subFilter}</span>}
                </h1>
                <p className="category-main__count">
                  총 <strong>{categoryClasses.length}</strong>개의 클래스
                </p>
              </div>
              <select
                className="category-main__sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">인기순</option>
                <option value="rating">평점순</option>
                <option value="review">리뷰 많은순</option>
                <option value="price-low">가격 낮은순</option>
                <option value="price-high">가격 높은순</option>
              </select>
            </div>

            {categoryClasses.length > 0 ? (
              <div className="class-grid class-grid--3">
                {categoryClasses.map((cls, i) => (
                  <ClassCard key={cls.id} cls={cls} index={i} />
                ))}
              </div>
            ) : (
              <div className="category-main__empty">
                <span style={{ fontSize: 48 }}>📚</span>
                <h3>아직 등록된 클래스가 없어요</h3>
                <p>곧 새로운 클래스가 추가될 예정입니다!</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
