// --- 카테고리 구조 ---
export const categories = [
  { id: 'business-career', name: '실무·커리어', icon: '💼', subs: ['엑셀·PPT·문서', '스피치', '생산성·업무자동화', '취업·자격증'] },
  { id: 'marketing', name: '마케팅·콘텐츠', icon: '📢', subs: ['마케팅 A-Z', 'SNS', '콘텐츠 제작', '브랜딩'] },
  { id: 'design', name: '디자인', icon: '🎨', subs: ['UI/UX', '그래픽', '영상편집', '일러스트'] },
  { id: 'biz-mgmt', name: '비즈니스·경영', icon: '📊', subs: ['경영전략', '리더십', '세일즈'] },
  { id: 'ai-dev', name: 'AI·데이터·개발', icon: '🤖', subs: ['AI 도구', '데이터분석', '프로그래밍'] },
  { id: 'language', name: '외국어', icon: '🌍', subs: ['영어', '일본어', '중국어', '기타'] },
  { id: 'finance', name: '재테크·부업', icon: '💰', subs: ['부동산', '주식', '블로그', '스마트스토어'] },
  { id: 'music', name: '음악·공연예술', icon: '🎵', subs: ['보컬·악기', '댄스', '공연'] },
  { id: 'photo-video', name: '사진·영상', icon: '📸', subs: ['사진촬영·보정', '영상제작'] },
  { id: 'beauty', name: '뷰티·패션', icon: '💄', subs: ['메이크업', '스타일링', '스킨케어'] },
  { id: 'sports', name: '운동·건강', icon: '🏋️', subs: ['홈 트레이닝', '요가·필라테스', '다이어트', '러닝'] },
  { id: 'hobby', name: '취미·라이프', icon: '🎯', subs: ['요리', '베이킹', '공예', '사주'] },
];

// --- 티쳐 정보 ---
export const teachers = [
  { id: 1, name: '김현수', title: 'AI 전문가', rating: 4.9, students: 12400, avatar: null, badge: 'TOP' },
  { id: 2, name: '이지연', title: 'UX 디자이너', rating: 4.8, students: 8700, avatar: null, badge: 'HOT' },
  { id: 3, name: '박성민', title: '마케팅 디렉터', rating: 4.9, students: 15200, avatar: null, badge: 'TOP' },
  { id: 4, name: '최예린', title: '영상 크리에이터', rating: 4.7, students: 6300, avatar: null, badge: null },
  { id: 5, name: '정도윤', title: '프론트엔드 개발자', rating: 4.8, students: 9100, avatar: null, badge: 'HOT' },
  { id: 6, name: '한서은', title: '브랜딩 컨설턴트', rating: 4.9, students: 7600, avatar: null, badge: 'TOP' },
  { id: 7, name: '윤재호', title: '재무설계사', rating: 4.6, students: 5400, avatar: null, badge: null },
  { id: 8, name: '송민지', title: '요가 강사', rating: 4.9, students: 11300, avatar: null, badge: 'TOP' },
];

// backward compat
export const tutors = teachers;

// --- 클래스 데이터 ---
export const classes = [
  { id: 1, title: 'ChatGPT로 업무 자동화 마스터 클래스', teacherId: 1, categoryId: 'ai-dev', sub: 'AI 도구', price: 89000, originalPrice: 150000, rating: 4.9, reviewCount: 1247, thumbnail: null, isBest: true, isFree: false, tags: ['인기', 'HOT'] },
  { id: 2, title: 'Python 데이터 분석 실전 부트캠프', teacherId: 5, categoryId: 'ai-dev', sub: '데이터분석', price: 129000, originalPrice: 200000, rating: 4.8, reviewCount: 892, thumbnail: null, isBest: true, isFree: false, tags: ['추천'] },
  { id: 3, title: '비전공자도 할 수 있는 웹 개발 입문', teacherId: 5, categoryId: 'ai-dev', sub: '프로그래밍', price: 69000, originalPrice: 120000, rating: 4.7, reviewCount: 2103, thumbnail: null, isBest: false, isFree: false, tags: ['왕초보'] },
  { id: 4, title: 'AI 이미지 생성 마스터: Midjourney부터 DALL-E까지', teacherId: 1, categoryId: 'ai-dev', sub: 'AI 도구', price: 99000, originalPrice: 160000, rating: 4.8, reviewCount: 567, thumbnail: null, isBest: true, isFree: false, tags: ['NEW'] },
  { id: 5, title: 'Figma로 배우는 UI/UX 디자인 A to Z', teacherId: 2, categoryId: 'design', sub: 'UI/UX', price: 109000, originalPrice: 180000, rating: 4.9, reviewCount: 1834, thumbnail: null, isBest: true, isFree: false, tags: ['BEST', '인기'] },
  { id: 6, title: '포토샵 완전정복: 초보부터 실무까지', teacherId: 2, categoryId: 'design', sub: '그래픽', price: 79000, originalPrice: 140000, rating: 4.7, reviewCount: 3210, thumbnail: null, isBest: false, isFree: false, tags: ['왕초보'] },
  { id: 7, title: '프리미어 프로 영상 편집 마스터', teacherId: 4, categoryId: 'design', sub: '영상편집', price: 99000, originalPrice: 170000, rating: 4.8, reviewCount: 1456, thumbnail: null, isBest: true, isFree: false, tags: ['추천'] },
  { id: 8, title: '아이패드 디지털 드로잉: 프로크리에이트', teacherId: 2, categoryId: 'design', sub: '일러스트', price: 89000, originalPrice: 150000, rating: 4.6, reviewCount: 789, thumbnail: null, isBest: false, isFree: false, tags: [] },
  { id: 9, title: '퍼포먼스 마케팅 실전 가이드 2026', teacherId: 3, categoryId: 'marketing', sub: '마케팅 A-Z', price: 119000, originalPrice: 190000, rating: 4.9, reviewCount: 2341, thumbnail: null, isBest: true, isFree: false, tags: ['BEST'] },
  { id: 10, title: '인스타그램 릴스 마케팅 완전정복', teacherId: 3, categoryId: 'marketing', sub: 'SNS', price: 69000, originalPrice: 120000, rating: 4.7, reviewCount: 1567, thumbnail: null, isBest: true, isFree: false, tags: ['인기'] },
  { id: 11, title: '유튜브 채널 성장 전략 A to Z', teacherId: 4, categoryId: 'marketing', sub: '콘텐츠 제작', price: 89000, originalPrice: 150000, rating: 4.8, reviewCount: 1890, thumbnail: null, isBest: false, isFree: false, tags: ['HOT'] },
  { id: 12, title: '브랜드 전략 수립: 0부터 런칭까지', teacherId: 6, categoryId: 'marketing', sub: '브랜딩', price: 139000, originalPrice: 220000, rating: 4.9, reviewCount: 678, thumbnail: null, isBest: true, isFree: false, tags: ['프리미엄'] },
  { id: 13, title: '엑셀 실무 자동화: VBA 매크로 마스터', teacherId: 1, categoryId: 'business-career', sub: '엑셀·PPT·문서', price: 79000, originalPrice: 130000, rating: 4.8, reviewCount: 4521, thumbnail: null, isBest: true, isFree: false, tags: ['BEST', '인기'] },
  { id: 14, title: '설득의 기술: 비즈니스 프레젠테이션', teacherId: 3, categoryId: 'business-career', sub: '스피치', price: 89000, originalPrice: 150000, rating: 4.7, reviewCount: 987, thumbnail: null, isBest: false, isFree: false, tags: ['추천'] },
  { id: 15, title: 'Notion으로 업무 생산성 200% 올리기', teacherId: 5, categoryId: 'business-career', sub: '생산성·업무자동화', price: 59000, originalPrice: 100000, rating: 4.9, reviewCount: 2345, thumbnail: null, isBest: true, isFree: false, tags: ['인기'] },
  { id: 16, title: '합격하는 이력서 면접 올인원 패키지', teacherId: 6, categoryId: 'business-career', sub: '취업·자격증', price: 99000, originalPrice: 160000, rating: 4.6, reviewCount: 1234, thumbnail: null, isBest: false, isFree: false, tags: [] },
  { id: 17, title: '주식투자 입문: 차트분석부터 실전매매까지', teacherId: 7, categoryId: 'finance', sub: '주식', price: 109000, originalPrice: 180000, rating: 4.7, reviewCount: 3456, thumbnail: null, isBest: true, isFree: false, tags: ['인기'] },
  { id: 18, title: '부동산 경매로 월세 수익 만들기', teacherId: 7, categoryId: 'finance', sub: '부동산', price: 129000, originalPrice: 200000, rating: 4.6, reviewCount: 890, thumbnail: null, isBest: false, isFree: false, tags: ['추천'] },
  { id: 19, title: '블로그 수익화: 월 100만원 로드맵', teacherId: 3, categoryId: 'finance', sub: '블로그', price: 79000, originalPrice: 130000, rating: 4.8, reviewCount: 2100, thumbnail: null, isBest: true, isFree: false, tags: ['HOT'] },
  { id: 20, title: '스마트스토어 창업 완전 가이드', teacherId: 6, categoryId: 'finance', sub: '스마트스토어', price: 89000, originalPrice: 150000, rating: 4.7, reviewCount: 1670, thumbnail: null, isBest: false, isFree: false, tags: ['NEW'] },
  { id: 21, title: '홈트레이닝 30일 바디 프로젝트', teacherId: 8, categoryId: 'sports', sub: '홈 트레이닝', price: 49000, originalPrice: 90000, rating: 4.9, reviewCount: 5678, thumbnail: null, isBest: true, isFree: false, tags: ['BEST', '인기'] },
  { id: 22, title: '하타 요가 입문: 유연성과 마음의 평화', teacherId: 8, categoryId: 'sports', sub: '요가·필라테스', price: 59000, originalPrice: 100000, rating: 4.8, reviewCount: 2345, thumbnail: null, isBest: true, isFree: false, tags: ['추천'] },
  { id: 23, title: '영어 회화 3개월 마스터 플랜', teacherId: 6, categoryId: 'language', sub: '영어', price: 109000, originalPrice: 180000, rating: 4.7, reviewCount: 4567, thumbnail: null, isBest: true, isFree: false, tags: ['BEST'] },
  { id: 24, title: '일본어 JLPT N3 한 번에 합격하기', teacherId: 7, categoryId: 'language', sub: '일본어', price: 89000, originalPrice: 150000, rating: 4.6, reviewCount: 1234, thumbnail: null, isBest: false, isFree: false, tags: [] },
  { id: 25, title: '스마트폰으로 찍는 프로급 사진', teacherId: 4, categoryId: 'photo-video', sub: '사진촬영·보정', price: 69000, originalPrice: 120000, rating: 4.8, reviewCount: 1890, thumbnail: null, isBest: true, isFree: false, tags: ['인기'] },
  { id: 26, title: '브이로그 영상 제작: 촬영부터 편집까지', teacherId: 4, categoryId: 'photo-video', sub: '영상제작', price: 89000, originalPrice: 150000, rating: 4.7, reviewCount: 1456, thumbnail: null, isBest: false, isFree: false, tags: ['HOT'] },
  { id: 27, title: '집에서 즐기는 홈 베이킹 클래스', teacherId: 8, categoryId: 'hobby', sub: '베이킹', price: 59000, originalPrice: 100000, rating: 4.9, reviewCount: 3210, thumbnail: null, isBest: true, isFree: false, tags: ['인기'] },
  { id: 28, title: '나만의 가죽 공예: 지갑부터 가방까지', teacherId: 6, categoryId: 'hobby', sub: '공예', price: 79000, originalPrice: 130000, rating: 4.7, reviewCount: 567, thumbnail: null, isBest: false, isFree: false, tags: ['NEW'] },
  { id: 101, title: '[무료] ChatGPT 입문: AI 시대 필수 역량', teacherId: 1, categoryId: 'ai-dev', sub: 'AI 도구', price: 0, originalPrice: 89000, rating: 4.8, reviewCount: 8901, thumbnail: null, isBest: false, isFree: true, tags: ['무료', 'HOT'] },
  { id: 102, title: '[무료] 엑셀 기초 완전정복 30분', teacherId: 1, categoryId: 'business-career', sub: '엑셀·PPT·문서', price: 0, originalPrice: 49000, rating: 4.7, reviewCount: 12345, thumbnail: null, isBest: false, isFree: true, tags: ['무료', '왕초보'] },
  { id: 103, title: '[무료] 인스타그램 마케팅 기초', teacherId: 3, categoryId: 'marketing', sub: 'SNS', price: 0, originalPrice: 59000, rating: 4.6, reviewCount: 6789, thumbnail: null, isBest: false, isFree: true, tags: ['무료'] },
  { id: 104, title: '[무료] 스마트폰 사진 잘 찍는 법 10가지', teacherId: 4, categoryId: 'photo-video', sub: '사진촬영·보정', price: 0, originalPrice: 39000, rating: 4.8, reviewCount: 9012, thumbnail: null, isBest: false, isFree: true, tags: ['무료', '인기'] },
  { id: 105, title: '[무료] 요가 입문: 하루 10분 스트레칭', teacherId: 8, categoryId: 'sports', sub: '요가·필라테스', price: 0, originalPrice: 49000, rating: 4.9, reviewCount: 7890, thumbnail: null, isBest: false, isFree: true, tags: ['무료', 'BEST'] },
];

// --- 챌린지 ---
export const challenges = [
  { id: 1, title: '30일 매일 영어 스피킹 챌린지', description: '하루 10분, 30일 동안 영어 스피킹 습관을 만들어보세요!', participants: 2341, daysLeft: 15, category: '외국어', reward: '수료증 + 10% 할인쿠폰', progress: 50 },
  { id: 2, title: '21일 홈트레이닝 바디 챌린지', description: '매일 20분 운동으로 건강한 몸을 만들어요', participants: 4567, daysLeft: 8, category: '운동·건강', reward: '수료증 + 무료 클래스 1개', progress: 62 },
  { id: 3, title: '14일 Python 코딩 챌린지', description: '매일 1문제씩, 14일만에 Python 기초 마스터', participants: 1890, daysLeft: 22, category: 'AI·데이터·개발', reward: '수료증 + 포트폴리오 리뷰', progress: 35 },
  { id: 4, title: '7일 브이로그 제작 챌린지', description: '매일 1분 브이로그를 찍고 편집해보세요', participants: 987, daysLeft: 3, category: '사진·영상', reward: '수료증 + 장비 할인쿠폰', progress: 78 },
];

// --- 카페 ---
export const cafeCategories = ['전체', '자유게시판', '스터디 모집', '수강 후기', '질문&답변', '꿀팁 공유'];
export const cafePosts = [
  { id: 1, category: '수강 후기', title: 'ChatGPT 강의 듣고 업무 시간 반으로 줄었어요!', author: '직장인A', likes: 234, comments: 45, createdAt: '2026-04-14', views: 1890, isHot: true },
  { id: 2, category: '스터디 모집', title: '[서울] Python 데이터 분석 스터디 모집합니다', author: '코딩초보', likes: 67, comments: 23, createdAt: '2026-04-14', views: 890, isHot: false },
  { id: 3, category: '꿀팁 공유', title: 'Figma 단축키 모음 정리해봤습니다', author: '디자이너S', likes: 456, comments: 89, createdAt: '2026-04-13', views: 3450, isHot: true },
  { id: 4, category: '자유게시판', title: '크리트업에서 강의 듣기 시작한지 1년 후기', author: '성장중', likes: 312, comments: 56, createdAt: '2026-04-13', views: 2100, isHot: true },
  { id: 5, category: '질문&답변', title: '마케팅 강의 추천해주세요! 초보인데 뭐부터?', author: '마케팅뉴비', likes: 23, comments: 34, createdAt: '2026-04-12', views: 567, isHot: false },
  { id: 6, category: '수강 후기', title: 'Figma 강의 완강 후기 - 포트폴리오까지 완성!', author: '이직준비', likes: 189, comments: 32, createdAt: '2026-04-12', views: 1450, isHot: false },
  { id: 7, category: '꿀팁 공유', title: '엑셀 VBA로 반복 업무 자동화하는 방법 공유', author: '엑셀왕', likes: 345, comments: 67, createdAt: '2026-04-11', views: 2890, isHot: true },
  { id: 8, category: '스터디 모집', title: '[온라인] 영어 회화 스터디 멤버 모집 (주 3회)', author: '영어마스터', likes: 45, comments: 19, createdAt: '2026-04-11', views: 670, isHot: false },
  { id: 9, category: '자유게시판', title: '재테크 강의 듣고 첫 주식 수익 인증합니다!', author: '주린이탈출', likes: 567, comments: 123, createdAt: '2026-04-10', views: 4560, isHot: true },
  { id: 10, category: '질문&답변', title: 'React vs Vue 어떤 걸 먼저 배우는 게 좋을까요?', author: '개발입문이', likes: 78, comments: 56, createdAt: '2026-04-10', views: 890, isHot: false },
];

// --- 히어로 키워드 ---
export const heroKeywords = [
  '#ChatGPT', '#엑셀자동화', '#Figma', '#영상편집',
  '#퍼포먼스마케팅', '#Python', '#홈트레이닝', '#부동산투자',
  '#영어회화', '#브이로그', '#인스타그램', '#재테크',
  '#브랜딩', '#웹개발', '#요가', '#프레젠테이션',
];

// --- 헬퍼 함수 ---
export function getTeacher(teacherId) {
  return teachers.find((t) => t.id === teacherId);
}
export const getTutor = getTeacher;

export function getClassesByCategory(categoryId) {
  return classes.filter((c) => c.categoryId === categoryId && !c.isFree);
}
export function getBestClasses() {
  return classes.filter((c) => c.isBest && !c.isFree);
}
export function getFreeClasses() {
  return classes.filter((c) => c.isFree);
}
export function getClassById(id) {
  return classes.find((c) => c.id === id);
}
export function searchClasses(query) {
  const q = query.toLowerCase();
  return classes.filter(
    (c) => c.title.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q) || getTeacher(c.teacherId)?.name.toLowerCase().includes(q)
  );
}
export function formatPrice(price) {
  if (price === 0) return '무료';
  return price.toLocaleString('ko-KR') + '원';
}
export function getDiscount(originalPrice, price) {
  if (price === 0) return 100;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
