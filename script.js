// Presentation Navigation
let currentSlide = 1;
const totalSlides = 14;

// Get all slides
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideCounter = document.getElementById('slide-counter');
const progressFill = document.getElementById('progress');

// Initialize
function init() {
    updateSlide();
    updateCounter();
    updateProgress();
    updateButtons();
}

// Navigate to specific slide
function goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > totalSlides) return;

    // Remove active class from current slide
    slides[currentSlide - 1].classList.remove('active');

    // Add prev class if going forward
    if (slideNumber > currentSlide) {
        slides[currentSlide - 1].classList.add('prev');
    } else {
        slides[slideNumber - 1].classList.remove('prev');
    }

    // Update current slide
    currentSlide = slideNumber;

    // Add active class to new slide
    slides[currentSlide - 1].classList.add('active');

    // Update UI
    updateCounter();
    updateProgress();
    updateButtons();

    // Generate QR codes when reaching relevant slides
    if (currentSlide === 11) {
        generatePresentationQRCode();
    } else if (currentSlide === 12) {
        generateGitHubQRCode();
    }
}

// Update slide display
function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide - 1) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Update counter display
function updateCounter() {
    slideCounter.textContent = `${currentSlide} / ${totalSlides}`;
}

// Update progress bar
function updateProgress() {
    const progress = (currentSlide / totalSlides) * 100;
    progressFill.style.width = `${progress}%`;
}

// Update button states
function updateButtons() {
    prevBtn.disabled = currentSlide === 1;
    nextBtn.disabled = currentSlide === totalSlides;
}

// Navigation handlers
prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
    }
});

// Click on slide to advance (except on buttons)
slides.forEach(slide => {
    slide.addEventListener('click', (e) => {
        // Don't advance if clicking on a button or link
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
            goToSlide(currentSlide + 1);
        }
    });
});

// Generate QR Code for presentation
function generatePresentationQRCode() {
    const qrContainer = document.getElementById('qr-code-presentation');
    if (!qrContainer || qrContainer.innerHTML) return; // Already generated

    const presentationURL = 'https://jakestoeffler.github.io/dream-bigger';

    // Generate QR code using qrcodejs library
    if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: presentationURL,
            width: 200,
            height: 200,
            colorDark: "#1f2937",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        // Fallback if library doesn't load
        qrContainer.innerHTML = `
            <div style="width: 200px; height: 200px; background: white; display: flex; align-items: center; justify-content: center; border: 2px solid #3b82f6; border-radius: 8px; margin: 0 auto;">
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 36px; margin-bottom: 10px;">📊</div>
                    <div style="font-size: 12px; font-weight: 600; color: #1f2937;">Scan to view!</div>
                </div>
            </div>
        `;
    }
}

// Generate QR Code for GitHub repository
function generateGitHubQRCode() {
    const qrContainer = document.getElementById('qr-code-github');
    if (!qrContainer || qrContainer.innerHTML) return; // Already generated

    const githubURL = 'https://github.com/JakeStoeffler/dream-bigger';

    // Generate QR code using qrcodejs library
    if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
            text: githubURL,
            width: 200,
            height: 200,
            colorDark: "#1f2937",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        // Fallback if library doesn't load
        qrContainer.innerHTML = `
            <div style="width: 200px; height: 200px; background: white; display: flex; align-items: center; justify-content: center; border: 2px solid #3b82f6; border-radius: 8px; margin: 0 auto;">
                <div style="text-align: center; padding: 20px;">
                    <div style="font-size: 36px; margin-bottom: 10px;">💻</div>
                    <div style="font-size: 12px; font-weight: 600; color: #1f2937;">Scan to view code!</div>
                </div>
            </div>
        `;
    }
}

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left - next slide
            goToSlide(currentSlide + 1);
        } else {
            // Swiped right - previous slide
            goToSlide(currentSlide - 1);
        }
    }
}

// Initialize presentation
init();

// Add animations on slide transitions
slides.forEach((slide, index) => {
    slide.style.setProperty('--slide-index', index);
});

// Fullscreen toggle (press F for fullscreen)
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
});

// Log helper for debugging
console.log('Presentation initialized with', totalSlides, 'slides');
console.log('Controls: Arrow keys, Space, Click, Swipe, or use buttons');
console.log('Press F for fullscreen mode');
