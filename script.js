// Simple fade-in animation for sections on page load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        // Delay each section's fade-in for a staggered effect
        setTimeout(() => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // Trigger the animation
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200); // 200ms delay between sections
    });
});
