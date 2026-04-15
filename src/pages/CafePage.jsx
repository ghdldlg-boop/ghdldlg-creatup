import { useState } from 'react';
import { cafePosts, cafeCategories } from '../data/mockData';
import './CafePage.css';

export default function CafePage() {
  const [activeTab, setActiveTab] = useState('전체');
  const [sortBy, setSortBy] = useState('latest');

  const filtered = activeTab === '전체'
    ? cafePosts
    : cafePosts.filter(p => p.category === activeTab);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'popular') return b.likes - a.likes;
    if (sortBy === 'views') return b.views - a.views;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <main className="cafe-page">
      <div className="container">
        {/* 헤더 */}
        <div className="cafe-page__header animate-in">
          <div className="cafe-page__hero">
            <div className="cafe-page__hero-orb" />
            <h1 className="cafe-page__title">☕ <span className="gradient-text">카페</span></h1>
            <p className="cafe-page__desc">크리트업 학습자들의 커뮤니티 공간</p>
          </div>
        </div>

        {/* 탭 */}
        <div className="cafe-tabs animate-in animate-in-delay-1">
          {cafeCategories.map(cat => (
            <button
              key={cat}
              className={`cafe-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 정렬 */}
        <div className="cafe-sort animate-in animate-in-delay-2">
          <span>{sorted.length}개의 게시글</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="category-main__sort">
            <option value="latest">최신순</option>
            <option value="popular">인기순</option>
            <option value="views">조회순</option>
          </select>
        </div>

        {/* 게시글 리스트 */}
        <div className="cafe-posts">
          {sorted.map((post, i) => (
            <article
              key={post.id}
              className="cafe-post glass animate-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="cafe-post__left">
                <span className="cafe-post__category">{post.category}</span>
                <h3 className="cafe-post__title">
                  {post.isHot && <span className="cafe-post__hot">🔥</span>}
                  {post.title}
                </h3>
                <div className="cafe-post__meta">
                  <span className="cafe-post__author">{post.author}</span>
                  <span className="cafe-post__date">{post.createdAt}</span>
                </div>
              </div>
              <div className="cafe-post__stats">
                <div className="cafe-post__stat">
                  <span className="cafe-post__stat-icon">❤️</span>
                  <span>{post.likes}</span>
                </div>
                <div className="cafe-post__stat">
                  <span className="cafe-post__stat-icon">💬</span>
                  <span>{post.comments}</span>
                </div>
                <div className="cafe-post__stat">
                  <span className="cafe-post__stat-icon">👁️</span>
                  <span>{post.views.toLocaleString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
