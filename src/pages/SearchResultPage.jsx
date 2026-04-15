import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import ClassCard from '../components/ClassCard';
import { searchClasses } from '../data/mockData';
import './SearchResultPage.css';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => searchClasses(query), [query]);

  return (
    <main className="search-page">
      <div className="container">
        <div className="search-page__header animate-in">
          <h1 className="search-page__title">
            &quot;<span className="gradient-text">{query}</span>&quot; 검색 결과
          </h1>
          <p className="search-page__count">
            총 <strong>{results.length}</strong>개의 클래스를 찾았습니다
          </p>
        </div>

        {results.length > 0 ? (
          <div className="class-grid">
            {results.map((cls, i) => (
              <ClassCard key={cls.id} cls={cls} index={i} />
            ))}
          </div>
        ) : (
          <div className="search-page__empty">
            <span style={{ fontSize: 64 }}>🔍</span>
            <h3>검색 결과가 없습니다</h3>
            <p>다른 키워드로 검색해보세요</p>
          </div>
        )}
      </div>
    </main>
  );
}
