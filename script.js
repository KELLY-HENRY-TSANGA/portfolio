document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi réel du formulaire

        // Vérifie que tous les champs sont remplis
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Affiche le message de confirmation
        confirmationMessage.style.display = 'block';

        // Efface les champs du formulaire
        contactForm.reset();

        // Cache le message de confirmation après 5 secondes
        setTimeout(function () {
            confirmationMessage.style.display = 'none';
        }, 5000);
    });
});
