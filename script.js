// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .card, .feature-item').forEach(el => {
    observer.observe(el);
});

// Set animation delay for staggered effect
document.querySelectorAll('.card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Hero section click navigation
const heroLeftBtn = document.querySelector('.hero-left .btn-hero');
const heroRightBtn = document.querySelector('.hero-right .btn-hero');

if (heroLeftBtn) {
    heroLeftBtn.addEventListener('click', () => {
        window.location.href = 'mines.html';
    });
}

if (heroRightBtn) {
    heroRightBtn.addEventListener('click', () => {
        window.location.href = 'catacombs.html';
    });
}

// Discord button redirect
const discordButtons = document.querySelectorAll('.btn-cta, .btn-discord');
discordButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('btn-cta') || btn.classList.contains('btn-discord')) {
            // Replace with your Discord contact
            window.location.href = 'https://discord.com/users/657635749520343040';
        }
    });
});

// Animate cards on load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in, .card').forEach((el, index) => {
        el.style.setProperty('--delay', `${index * 0.1}s`);
    });
});

// Page transition animation
document.querySelectorAll('a[href*=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Don't trigger animation for anchor links
        if (href.includes('#')) {
            return;
        }

        // Add fade-out animation
        document.body.style.opacity = '0.7';
        document.body.style.transition = 'opacity 0.3s ease';
    });
});

// Reset opacity on load
window.addEventListener('pageshow', () => {
    document.body.style.opacity = '1';
});
