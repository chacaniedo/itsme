document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        // Start hidden
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Reveal each section with a delay
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 300); // delay per section
    });
});
