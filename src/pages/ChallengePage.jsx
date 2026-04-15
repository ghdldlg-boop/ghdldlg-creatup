import { Link } from 'react-router-dom';
import { challenges } from '../data/mockData';
import './ChallengePage.css';

export default function ChallengePage() {
  return (
    <main className="challenge-page">
      <div className="container">
        {/* 헤더 */}
        <div className="challenge-page__header animate-in">
          <div className="challenge-page__hero">
            <div className="challenge-page__hero-orb" />
            <h1 className="challenge-page__title">
              🎯 <span className="gradient-text">챌린지</span>
            </h1>
            <p className="challenge-page__desc">
              함께 도전하고, 함께 성장하세요!<br />
              챌린지를 완료하면 특별한 보상이 기다리고 있어요.
            </p>
          </div>
        </div>

        {/* 챌린지 리스트 */}
        <div className="challenge-list">
          {challenges.map((ch, i) => (
            <div
              key={ch.id}
              className="challenge-item glass animate-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="challenge-item__content">
                <div className="challenge-item__top">
                  <span className="challenge-item__category">{ch.category}</span>
                  <span className="challenge-item__days">
                    {ch.daysLeft <= 7 ? '🔥' : '⏰'} D-{ch.daysLeft}
                  </span>
                </div>
                <h2 className="challenge-item__title">{ch.title}</h2>
                <p className="challenge-item__desc">{ch.description}</p>

                <div className="challenge-item__progress">
                  <div className="challenge-item__progress-info">
                    <span>진행률</span>
                    <span>{ch.progress}%</span>
                  </div>
                  <div className="challenge-item__progress-bar">
                    <div
                      className="challenge-item__progress-fill"
                      style={{ width: `${ch.progress}%` }}
                    />
                  </div>
                </div>

                <div className="challenge-item__meta">
                  <div className="challenge-item__meta-item">
                    <span>👥 참여자</span>
                    <strong>{ch.participants.toLocaleString()}명</strong>
                  </div>
                  <div className="challenge-item__meta-item">
                    <span>🎁 보상</span>
                    <strong>{ch.reward}</strong>
                  </div>
                </div>

                <button className="btn-primary" style={{ marginTop: 20, width: '100%' }}>
                  챌린지 참여하기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
