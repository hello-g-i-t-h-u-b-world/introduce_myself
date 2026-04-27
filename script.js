// 프로젝트 데이터 객체
const projects = [
    {
        title: "AI 이미지 분류 웹 서비스",
        desc: "TensorFlow.js를 활용하여 브라우저에서 실시간으로 사물을 식별하는 웹 앱입니다.",
        tech: "HTML, CSS, JS, TF.js",
        emoji: "🖼️"
    },
    {
        title: "금오공대 식단 알리미 앱",
        desc: "교내 식당 정보를 크롤링하여 사용자에게 맞춤형 메뉴를 추천하는 서비스입니다.",
        tech: "Python, Flutter, Firebase",
        emoji: "🍱"
    },
    {
        title: "개인화 뉴스 피드 큐레이션",
        desc: "사용자의 관심사를 분석하여 뉴스 API 데이터를 필터링해 보여주는 대시보드입니다.",
        tech: "Vanilla JS, Node.js, AI API",
        emoji: "📰"
    }
];

// 프로젝트 카드 동적 생성
const projectGrid = document.getElementById('projectGrid');

function renderProjects() {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-img">${project.emoji}</div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="tech-stack" style="font-size: 0.8rem; color: #38bdf8;">
                    ${project.tech}
                </div>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}

// 부드러운 나타나기 효과 (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // 애니메이션 적용
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});