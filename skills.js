(function () {
    const fills   = document.querySelectorAll('.skill-fill');
    const section = document.getElementById('skills');

    if (!section || fills.length === 0) return;

    // Trigger each bar one after another for a stagger effect
    function animateBars() {
        fills.forEach(function (fill, i) {
            setTimeout(function () {
                fill.classList.add('animate');
            }, i * 80);
        });
    }

    // Watch the skills section — fire once when it enters the viewport
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            animateBars();
            observer.disconnect();
        }
    }, { threshold: 0.15 });

    observer.observe(section);
})();
