// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Role Text Animation - ONLY ANIMATED TEXT
    const roles = [
        "Junior Security Analyst",
        "SOC Analyst – Level 1",
        "IT Executive / IT Support"
    ];
    
    const roleElement = document.querySelector('.role-typing');
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeRole() {
        const currentRole = roles[currentRoleIndex];
        
        if (isDeleting) {
            // Delete character
            roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            // Type character
            roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }
        
        // When a role is fully typed
        if (!isDeleting && currentCharIndex === currentRole.length) {
            // Pause at the end
            typingSpeed = 1500;
            isDeleting = true;
        } 
        // When a role is fully deleted
        else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            // Move to next role
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeRole, typingSpeed);
    }
    
    // Start the typing animation after a delay
    setTimeout(typeRole, 1000);
    
    // Scroll-based Animations
    const fadeElements = document.querySelectorAll('.fade-up');
    
    function checkScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--surface-color)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = 'var(--surface-color)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Skills Hover Effect
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Download CV Button Functionality
    const downloadBtn = document.getElementById('download-cv');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        //alert('CV download would start here. Replace with actual CV link.');
        window.open('https://drive.google.com/file/d/12nHEqyMFHjY0YfZ5H9tV4ABuPeR0buNA/view?usp=sharing', '_blank');
    });
    
    // About Section Certificate Buttons
   
    
    // Certification Title Links
    const certTitles = document.querySelectorAll('.cert-title');
    
    certTitles.forEach((title, index) => {
        title.addEventListener('click', function(e) {
            e.preventDefault();
            const certNames = [
                "Google Cybersecurity Professional Certificate",
                "Networking Basics – Cisco Networking Academy",
                "Ethical Hacking / Network Security (Udemy)"
            ];
            
            alert(`This would open certificate: ${certNames[index]}`);
            // window.open('your-certificate-link', '_blank');
        });
    });
    
            // Certificate Links
        const certLinks = document.querySelectorAll('.cert-link');

        // Define certificates array
        const certificates = [
            {
                name: "Google Cybersecurity Professional Certificate",
                url: "https://www.coursera.org/account/accomplishments/professional-cert/ZU8Z7MTYZ05H"
            },
            {
                name: "Networking Basics – Cisco Networking Academy",
                url: "https://drive.google.com/file/d/1pGhQr_22d7gkaqORhuDS5eozrym7vBHU/view?usp=sharing"
            },
            {
                name: "Ethical Hacking / Network Security (Udemy)",
                url: "https://drive.google.com/drive/folders/1UNfnWn9HHc0plih-8qUqGjb75Os8p8fx?usp=sharing"
            }
        ];

        certLinks.forEach((link, index) => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Check if certificate exists for this index
                if (certificates[index]) {
                    window.open(certificates[index].url, '_blank');
                }
            });
    });
    

    // Google Drive Button
    const googleDriveBtn = document.querySelector('.google-drive-btn');
    
    googleDriveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        //alert('This would open Google Drive folder with all certificates.');
         window.open('https://drive.google.com/drive/folders/1UNfnWn9HHc0plih-8qUqGjb75Os8p8fx?usp=sharing', '_blank');
    });
    
    // View All Projects Button
    const viewAllProjectsBtn = document.getElementById('view-all-projects');
    
    if (viewAllProjectsBtn) {
        viewAllProjectsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            //alert('This would open GitHub repository with all projects.');
            window.open('https://github.com/swarup025', '_blank');
        });
    }
    
    // Contact Cards
    const contactCards = document.querySelectorAll('.contact-card');


    contactCards.forEach((card, index) => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Define your actual URLs here
            const urls = [
                "mailto:mcaswarup2001@gmail.com", // Email
                "https://www.linkedin.com/in/swarupananda-das-9552a82b0/", // LinkedIn
                "https://www.instagram.com/swarup_025/", // Instagram
                "https://drive.google.com/file/d/12nHEqyMFHjY0YfZ5H9tV4ABuPeR0buNA/view?usp=sharing" // Resume
            ];
            
            const currentUrl = urls[index];
            
            // Check if it's an email link
            if (currentUrl.startsWith('mailto:')) {
                window.location.href = currentUrl;
            } 
            // Check if it's a download (PDF file)
            else if (currentUrl.endsWith('.pdf')) {
                window.open(currentUrl, '_blank');
            }
            // For all other links
            else {
                window.open(currentUrl, '_blank');
            }
        });
    });
    
    // ADDED: Cursor-following glow effect for cards and buttons
    function initCursorGlowEffects() {
        // Only enable on desktop
        if (window.innerWidth <= 768) return;
        
        // Get all cards and buttons
        const cards = document.querySelectorAll('.about-card, .education-card, .skill-card, .project-card, .cert-card, .contact-card');
        const buttons = document.querySelectorAll('.btn, .social-link, .cert-link');
        
        // Function to handle cursor movement
        function handleCursorMove(e, element) {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Update CSS custom properties
            element.style.setProperty('--cursor-x', `${x}%`);
            element.style.setProperty('--cursor-y', `${y}%`);
            
            // For cards, update the ::after pseudo-element gradient
            if (element.classList.contains('about-card') || 
                element.classList.contains('education-card') || 
                element.classList.contains('skill-card') || 
                element.classList.contains('project-card') || 
                element.classList.contains('cert-card') || 
                element.classList.contains('contact-card')) {
                
                // Create dynamic radial gradient based on cursor position
                const gradient = `radial-gradient(circle at ${x}% ${y}%, 
                    rgba(59, 130, 246, 0.4) 0%, 
                    rgba(173, 216, 230, 0.2) 30%,
                    rgba(255, 255, 255, 0.1) 50%,
                    transparent 70%)`;
                
                // Apply gradient through CSS variable
                element.style.setProperty('--glow-gradient', gradient);
            }
        }
        
        // Function to reset glow position
        function handleCursorLeave(element) {
            element.style.setProperty('--cursor-x', '50%');
            element.style.setProperty('--cursor-y', '50%');
            element.style.setProperty('--glow-gradient', '');
        }
        
        // Add event listeners to cards
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => handleCursorMove(e, card));
            card.addEventListener('mouseleave', () => handleCursorLeave(card));
        });
        
        // Add event listeners to buttons
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => handleCursorMove(e, button));
            button.addEventListener('mouseleave', () => handleCursorLeave(button));
        });
    }
    
    // Initialize cursor glow effects
    setTimeout(initCursorGlowEffects, 100);
    
    // Reinitialize on resize
    window.addEventListener('resize', initCursorGlowEffects);
    
    // Add dynamic CSS for cursor-following glow
    const dynamicGlowStyle = document.createElement('style');
    dynamicGlowStyle.textContent = `
        /* Dynamic glow effect based on cursor position */
        .about-card::after,
        .education-card::after,
        .skill-card::after,
        .project-card::after,
        .cert-card::after,
        .contact-card::after {
            background: var(--glow-gradient, linear-gradient(45deg, 
                transparent 0%, 
                var(--glow-color) 25%,
                var(--glow-color-light) 50%,
                var(--glow-color) 75%,
                transparent 100%));
            background-size: 400% 400%;
            background-position: var(--cursor-x, 50%) var(--cursor-y, 50%);
            transition: background-position 0.1s ease, opacity 0.4s ease;
        }
        
        .btn::after,
        .social-link::after,
        .cert-link::after {
            background: var(--glow-gradient, linear-gradient(45deg, 
                transparent 0%, 
                var(--glow-color) 25%,
                var(--glow-color-light) 50%,
                var(--glow-color) 75%,
                transparent 100%));
            background-size: 400% 400%;
            background-position: var(--cursor-x, 50%) var(--cursor-y, 50%);
            transition: background-position 0.1s ease, opacity 0.4s ease;
        }
        
        /* Enhanced hover effects */
        .about-card:hover,
        .education-card:hover,
        .skill-card:hover,
        .project-card:hover,
        .cert-card:hover,
        .contact-card:hover {
            border-color: rgba(59, 130, 246, 0.6);
            box-shadow: 
                0 0 25px rgba(59, 130, 246, 0.2),
                var(--hover-shadow);
        }
        
        .btn:hover,
        .social-link:hover,
        .cert-link:hover {
            border-color: rgba(59, 130, 246, 0.8);
            box-shadow: 
                0 0 20px rgba(59, 130, 246, 0.4),
                0 10px 20px rgba(37, 99, 235, 0.3);
        }
    `;
    document.head.appendChild(dynamicGlowStyle);
    
    // Initialize all animations on page load
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    

});



