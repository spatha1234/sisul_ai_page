// 로고 클릭 시 메인으로 이동 또는 상단 스크롤
const logoLink = document.querySelector('.logo a[href="index.html"]');
if (logoLink) {
    logoLink.addEventListener('click', function (e) {
        const isMainPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
        if (isMainPage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// 헤더 스크롤 효과
const header = document.querySelector('header');
if (header) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        header.style.boxShadow = currentScroll > 100
            ? '0 2px 20px rgba(0, 0, 0, 0.15)'
            : '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
}
