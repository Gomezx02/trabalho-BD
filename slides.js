let current = 0;
const slides = document.querySelectorAll('.slide');

function updateSlide() {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === current);
    });
    document.getElementById('progress').style.width = ((current / (slides.length - 1)) * 100) + '%';
}

function changeSlide(dir) {
    const next = current + dir;
    if (next < 0 || next >= slides.length) return;
    current = next;
    updateSlide();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); }
    if (e.key === 'ArrowLeft') { changeSlide(-1); }
});

updateSlide();
