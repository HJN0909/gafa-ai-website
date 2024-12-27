// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    const carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
        interval: 3000,  // 3秒切换一次
        wrap: true,      // 循环播放
        touch: true,     // 支持触摸滑动
        pause: 'hover'   // 鼠标悬停时暂停
    });

    // 添加滚动监听器来处理导航栏样式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // 为所有课程卡片添加淡入动画
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // 处理登录和注册按钮点击事件
    const loginBtn = document.querySelector('.btn-outline-primary');
    const registerBtn = document.querySelector('.btn.btn-primary');

    loginBtn?.addEventListener('click', function() {
        alert('登录功能即将上线！');
    });

    registerBtn?.addEventListener('click', function() {
        alert('注册功能即将上线！');
    });

    // 处理课程报名按钮点击事件
    const enrollBtns = document.querySelectorAll('.card .btn-primary');
    enrollBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const courseName = this.closest('.card').querySelector('.card-title').textContent;
            alert(`感谢您报名《${courseName}》课程！我们会尽快与您联系。`);
        });
    });

    // 处理搜索表单提交
    const searchForm = document.querySelector('form.d-flex');
    searchForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input');
        alert(`搜索功能即将上线！您搜索的内容是：${searchInput.value}`);
        searchInput.value = '';
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 