// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Menu Toggle yang diperbarui
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Mencegah scroll ketika menu terbuka
    if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Menutup menu ketika link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        body.style.overflow = 'auto';
    });
});

// Menutup menu ketika klik di luar menu
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        body.style.overflow = 'auto';
    }
});

// Color Selector yang diperbarui
const colorOptions = document.querySelectorAll('.color-option');
const productImage = document.getElementById('product-image');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        
        // Animasi fade out
        productImage.style.opacity = '0';
        productImage.style.transform = 'scale(0.95)';
    
        setTimeout(() => {
            // Gunakan nama file yang sesuai dengan yang ada di folder gambar/
            if (color === 'Hitam') {
                productImage.src = 'gambar/Dompet Hitam.jpeg';
            } else if (color === 'Coklat') {
                productImage.src = 'gambar/Dompet Coklat.jpeg';
            }
            
            // Animasi fade in
            productImage.style.opacity = '1';
            productImage.style.transform = 'scale(1)';
        }, 300);
        
        // Update active state dengan animasi
        colorOptions.forEach(opt => {
            opt.style.transform = 'scale(1)';
            opt.classList.remove('active');
        });
        
        option.classList.add('active');
        option.style.transform = 'scale(1.15)';
    });
});

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Simulasi loading
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        document.body.style.overflow = 'visible';
    }, 2000);
});

// Enhanced Animations
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Enhanced Product Preview
const productPreview = document.querySelector('.product-preview');
if (productPreview) {
    productPreview.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = productPreview.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * 10;
        
        productPreview.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    productPreview.addEventListener('mouseleave', () => {
        productPreview.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
} 