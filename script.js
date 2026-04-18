// Intersection Observer for Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for sticky nav
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Form submission handler (Prevention for demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Reservation Sent!';
        btn.style.background = '#C5A059';
        btn.style.color = '#0A0A0A';
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.color = '';
            contactForm.reset();
        }, 3000);
    });
}

// Add subtle parallax to hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scroll = window.pageYOffset;
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
});

// Order Modal Logic
const modal = document.getElementById('orderModal');
const orderBtn = document.getElementById('orderBtn');
const closeBtn = document.querySelector('.close-btn');
const orderForm = document.getElementById('orderForm');

if (modal && orderBtn && closeBtn && orderForm) {
    // Open Modal
    orderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        orderForm.reset();
    });

    // Close Modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            orderForm.reset();
        }
    });

    // Handle Order Submission
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = orderForm.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Order Placed Successfully!';
        btn.style.background = '#C5A059';
        btn.style.color = '#0A0A0A';
        
        // Simulate a delay for order processing
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            btn.style.color = '';
            modal.style.display = 'none';
            orderForm.reset();
        }, 2000);
    });
}
