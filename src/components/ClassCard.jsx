import { Link } from 'react-router-dom';
import { getTeacher, formatPrice, getDiscount } from '../data/mockData';
import './ClassCard.css';

export default function ClassCard({ cls, index = 0 }) {
  const teacher = getTeacher(cls.teacherId);
  const discount = getDiscount(cls.originalPrice, cls.price);

  // 썸네일 대신 그라디언트 + 카테고리 아이콘
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
    'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  ];

  const gradient = gradients[(cls.id ?? index) % gradients.length];

  return (
    <Link
      to={`/class/${cls.id}`}
      className="class-card animate-in"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* 썸네일 */}
      <div className="class-card__thumb" style={{ background: gradient }}>
        <div className="class-card__thumb-overlay">
          <span className="class-card__thumb-icon">▶</span>
        </div>
        {/* 태그 */}
        <div className="class-card__tags">
          {cls.tags?.map((tag) => (
            <span
              key={tag}
              className={`tag ${
                tag === 'BEST' || tag === '⭐ TOP'
                  ? 'tag-best'
                  : tag === 'HOT' || tag === '인기'
                  ? 'tag-hot'
                  : tag === 'NEW'
                  ? 'tag-new'
                  : tag === '무료'
                  ? 'tag-free'
                  : 'tag-best'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* 할인율 */}
        {discount > 0 && (
          <div className="class-card__discount">-{discount}%</div>
        )}
      </div>

      {/* 정보 */}
      <div className="class-card__body">
        <p className="class-card__category">{cls.sub}</p>
        <h3 className="class-card__title">{cls.title}</h3>
        <p className="class-card__tutor">{teacher?.name}</p>

        <div className="class-card__meta">
          <div className="class-card__rating">
            <span className="class-card__star">★</span>
            <span>{cls.rating}</span>
            <span className="class-card__review-count">({cls.reviewCount.toLocaleString()})</span>
          </div>
        </div>

        <div className="class-card__price">
          {cls.originalPrice > cls.price && (
            <span className="class-card__original-price">
              {formatPrice(cls.originalPrice)}
            </span>
          )}
          <span className="class-card__current-price">
            {formatPrice(cls.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
