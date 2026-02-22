console.log("🌸 Supriya's Portfolio Website");

// Animate progress bars when they come into view
const animateSkills = () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate skills when skills section is visible
            if (entry.target.classList.contains('skills') || 
                entry.target.classList.contains('skill-category')) {
                animateSkills();
            }
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .skill-category').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// Typing effect for hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Add floating particles
function createParticle() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#667eea', '#764ba2'];
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * 100}vw;
        top: -10px;
        opacity: ${Math.random() * 0.5 + 0.3};
        animation: fall ${Math.random() * 3 + 2}s linear forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Create particles periodically
setInterval(createParticle, 300);

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            window.location.href = href;
        }
    });
});

// Add hover effect for education cards
document.querySelectorAll('.edu-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Display current year in footer (if you add a footer)
const year = new Date().getFullYear();
console.log(`© ${year} Supriya. All rights reserved.`);

// Easter egg: Double click on profile
const profileCircle = document.querySelector('.profile-circle');
if (profileCircle) {
    profileCircle.addEventListener('dblclick', () => {
        alert('✨ Thanks for visiting my portfolio! ✨');
        
        // Create confetti effect
        for (let i = 0; i < 20; i++) {
            setTimeout(createParticle, i * 100);
        }
    });
}

// Language hover effect
document.querySelectorAll('.language-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
