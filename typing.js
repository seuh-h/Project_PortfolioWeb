(function () {
    const el      = document.getElementById('typed-text');
    const phrases = [
        'Hello World!',
        '저를 보러와주셔서 감사합니다',
        'SoftWare Developer',
        'Front-End Developer',
    ];

    let phraseIndex = 0;
    let charIndex   = 0;
    let isDeleting  = false;

    function tick() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        el.textContent = current.slice(0, charIndex);

        let delay = isDeleting ? 55 : 110;

        if (!isDeleting && charIndex === current.length) {
            // Finished typing — pause before deleting
            delay = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting — move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400;
        }

        setTimeout(tick, delay);
    }

    // Start after a short delay so the name appears first
    setTimeout(tick, 600);
})();
