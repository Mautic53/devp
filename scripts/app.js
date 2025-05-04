// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document prêt !');
    
    // Gestionnaire d'événement pour le bouton CTA
    const ctaBtn = document.getElementById('cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            alert('Merci pour votre intérêt !');
        });
    }

    // Animation simple
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#e74c3c';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
});