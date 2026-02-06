document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextBtn");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bg-music");

    let currentSlide = 0;
    let musicStarted = false;

    slides[0].classList.add("active");
    nextBtn.style.display = "none";

    function startMusic() {
        if (!musicStarted) {
            music.volume = 0.5;
            music.play().then(() => {
                musicStarted = true;
            });
        }
    }

    startBtn.addEventListener("click", () => {
        startMusic();
        slides[currentSlide].classList.remove("active");
        currentSlide = 1;
        slides[currentSlide].classList.add("active");
        nextBtn.style.display = "block";
    });

    nextBtn.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide++;

        if (currentSlide < slides.length) {
            slides[currentSlide].classList.add("active");

            if (currentSlide === slides.length - 1) {
                nextBtn.textContent = "Terima kasih sudah membaca";
            }
        } else {
            nextBtn.style.display = "none";
        }
    });
});
