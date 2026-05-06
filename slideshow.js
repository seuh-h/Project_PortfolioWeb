(function () {

    // ── 사진 목록 ──────────────────────────────────────
    // 사진을 추가하거나 뺄 때 이 배열만 수정하면 됩니다.
    const images = [
        'images/slide1.jpg',
        'images/slide2.jpg',
        'images/slide3.jpg',
    ];
    // ───────────────────────────────────────────────────

    const container = document.querySelector('.hero-slideshow');
    if (!container) return;

    // Build slide elements from the array
    images.forEach(function (src, i) {
        const div = document.createElement('div');
        div.className = 'slide' + (i === 0 ? ' active' : '');
        div.style.backgroundImage = "url('" + src + "')";
        container.appendChild(div);
    });

    const slides = container.querySelectorAll('.slide');
    if (slides.length <= 1) return; // no cycling needed for a single image

    let current = 0;
    const TRANSITION_MS = 950;

    function next() {
        const outgoing = slides[current];
        current = (current + 1) % slides.length;
        const incoming = slides[current];

        outgoing.classList.add('leaving');
        outgoing.classList.remove('active');
        incoming.classList.add('active');

        setTimeout(function () {
            outgoing.style.transition = 'none';
            outgoing.classList.remove('leaving');
            outgoing.offsetHeight;
            outgoing.style.transition = '';
        }, TRANSITION_MS + 50);
    }

    setInterval(next, 4000);
})();
