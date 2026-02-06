/* ================================
   FIX HEIGHT MOBILE (WAJIB)
================================ */
function setVH() {
    document.documentElement.style.setProperty(
        "--vh",
        window.innerHeight * 0.01 + "px"
    );
}

window.addEventListener("load", setVH);
window.addEventListener("resize", setVH);


/* ================================
   STORY SCRIPT
================================ */
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("nextBtn");
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("bg-music");

    let currentSlide = 0;
    let mediaUnlocked = false;

    slides[0].classList.add("active");
    nextBtn.style.display = "none";

    function unlockMedia() {
        if (mediaUnlocked) return;
        mediaUnlocked = true;

        if (music) {
            music.volume = 0.5;
            music.play().catch(() => {});
        }

        document.querySelectorAll("video").forEach(video => {
            video.muted = true;
            video.play().catch(() => {});
        });
    }

    startBtn.addEventListener("click", () => {
        unlockMedia();

        slides[currentSlide].classList.remove("active");
        currentSlide = 1;
        slides[currentSlide].classList.add("active");

        nextBtn.style.display = "block";
        nextBtn.style.opacity = "0";
        nextBtn.style.transform = "translateY(10px)";

        setTimeout(() => {
            nextBtn.style.opacity = "1";
            nextBtn.style.transform = "translateY(0)";
        }, 100);
    });

    nextBtn.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide++;

        if (currentSlide < slides.length) {
            slides[currentSlide].classList.add("active");

            const video = slides[currentSlide].querySelector("video");
            if (video) {
                video.muted = true;
                video.play().catch(() => {});
            }

            if (currentSlide === slides.length - 1) {
                nextBtn.textContent = "Terima kasih sudah membaca";
            }
        } else {
            nextBtn.style.display = "none";
        }
    });
});
