(function () {
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');

    const FONT_SIZE = 14;
    const COLOR_HEAD  = '#88ddcc'; // tip of each column (softened)
    const COLOR_TRAIL = '#00a080'; // body color (darker, less intense)
    const CHARS = '01アイウエオカキクケコサシスセソタチツテトABCDEF{}[]()<>/\\;:=+*#@!?';

    let columns, drops;

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / FONT_SIZE);
        // Each column starts at a random negative position so they stagger on load
        drops = Array.from({ length: columns }, () => Math.random() * -80);
    }

    function draw() {
        // Semi-transparent black layer creates the fading trail effect
        ctx.fillStyle = 'rgba(13, 13, 13, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = FONT_SIZE + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = CHARS[Math.floor(Math.random() * CHARS.length)];
            const y = drops[i] * FONT_SIZE;

            // Head of the column is drawn brighter
            ctx.fillStyle = drops[i] > 0 ? COLOR_HEAD : COLOR_TRAIL;
            ctx.fillText(char, i * FONT_SIZE, y);

            // Reset column to top after it passes the bottom (random chance)
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    resize();
    window.addEventListener('resize', resize);
    setInterval(draw, 40);
})();
