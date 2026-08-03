document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------------------------------
    // 1. MENU MOBILE BURGER
    // -----------------------------------------------------------------
    const menuToggle = document.querySelector("#mobile-menu");
    const navLinks = document.querySelector("#nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("is-active");
        });
    }

    // Fermeture automatique du menu au clic sur un lien
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            if (menuToggle) menuToggle.classList.remove("is-active");
        });
    });

    // -----------------------------------------------------------------
    // 2. GESTION AUTOMATIQUE & DYNAMIQUE DES COMPÉTENCES
    // -----------------------------------------------------------------
    // Vous pouvez simplement ajouter ou modifier un objet ici pour ajouter une compétence
    const skillsData = [
        { name: "HTML5 / CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 65 },
        { name: "Python", level: 60 },
        { name: "SQL", level: 70 },
        { name: "MySQL", level: 40 },
        { name: "Flask", level: 50 },
        { name: "PHP", level: 40 },
        { name: "IA Générative", level: 50 }
    ];

    const skillsContainer = document.querySelector("#skills-container");

    if (skillsContainer) {
        skillsContainer.innerHTML = ""; // Vider le conteneur

        skillsData.forEach(skill => {
            const skillCard = document.createElement("div");
            skillCard.classList.add("skill-card");

            skillCard.innerHTML = `
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span class="skill-percent">${skill.level}%</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" data-level="${skill.level}"></div>
                </div>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }

    // -----------------------------------------------------------------
    // 3. ANIMATIONS AU SCROLL & REMPLISSAGE DES BARRES
    // -----------------------------------------------------------------
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Si c'est une carte de compétence, animer la barre
                const fillBar = entry.target.querySelector('.progress-bar-fill');
                if (fillBar) {
                    const level = fillBar.getAttribute('data-level');
                    fillBar.style.width = `${level}%`;
                }
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));

    // -----------------------------------------------------------------
    // 4. FORMULAIRE DE CONTACT AVEC GESTION JS
    // -----------------------------------------------------------------
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                formStatus.style.color = "#ef4444";
                formStatus.textContent = "Veuillez remplir tous les champs requis.";
                return;
            }

            formStatus.style.color = "#3b82f6";
            formStatus.textContent = "Ouverture de votre messagerie...";

            // Redirection mailto dynamique
            const mailtoLink = `mailto:ngombomibaraka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

            setTimeout(() => {
                window.location.href = mailtoLink;
                formStatus.style.color = "#22c55e";
                formStatus.textContent = "Message préparé avec succès !";
                contactForm.reset();
            }, 800);
        });
    }
});