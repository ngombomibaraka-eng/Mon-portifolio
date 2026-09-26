document.addEventListener("DOMContentLoaded", () => {

    // 1. DICTIONNAIRE MULTILINGUE
    const translations = {
        fr: {
            nav_home: "Accueil", nav_projects: "Projets", nav_timeline: "Parcours", nav_skills: "Compétences", nav_contact: "Contact",
            hero_greeting: "Bonjour, je suis", hero_role: "Étudiant en Génie Logiciel & Développeur Web | Spécialiste IA Générative à l'UTC Uvira",
            hero_sub: "Co-fondateur Hub Tech DRC | Membre Passionnated Web Club", btn_discover: "Découvrir mes projets", btn_view_cv: "Voir / Télécharger mon CV",
            title_projects: "Mes Réalisations", badge_soon: "Bientôt disponible", status_in_dev: "En développement", btn_demo: "Voir la démo",
            desc_portfolio: "Site web vitrine multilingue et interactif présentant mes compétences, projets et parcours en Génie Logiciel.",
            tag_active: "Projet Actuel",
            desc_myloc: "Propriétaire et locataire gèrent leurs biens avec sécurité. Système intelligent de suivi des baux et des loyers.",
            desc_uviramarket: "Plateforme e-commerce locale connectant vendeurs, acheteurs et administrateurs de la ville d'Uvira.",
            desc_edugest: "Système SaaS de gestion d'établissements scolaires : suivi académique, registres d'élèves et comptabilité financière.",
            desc_mungafamily: "Application web interactive dédiée au registre familial : arbre généalogique visuel et mémoire patrimoniale.",
            desc_hubtech: "Plateforme officielle du club d'innovation et de transformation numérique basé à l'Université Technologique du Congo (UTC-Uvira).",
            title_timeline: "Mon Parcours", tl_utc: "Études supérieures en Génie Logiciel & Informatique",
            tl_benevolencija: "Certificat : Prévention des discours de haine et consolidation de la paix", tl_python: "Brevet de formation spécialisée en Python",
            title_skills: "Mes Compétences", title_contact: "Me Contacter", contact_subtitle: "Parlons de vos projets",
            contact_desc: "Que ce soit pour une application web, la gestion immobilière ou une collaboration en IA générative, je suis à votre écoute !",
            btn_view_download_cv: "Consulter ou Télécharger mon CV", lbl_name: "Votre Nom", lbl_email: "Votre Email", lbl_subject: "Sujet", lbl_message: "Message",
            btn_send: "Envoyer le message", msg_reply_instant: "L'auteur vous répondra dans un instant !", cv_modal_info: "Le CV est synchronisé avec la langue actuellement sélectionnée sur le site.",
            btn_download: "Télécharger le document PDF", footer_sub: "Développé avec passion en Génie Logiciel & Informatique"
        },
        en: {
            nav_home: "Home", nav_projects: "Projects", nav_timeline: "Timeline", nav_skills: "Skills", nav_contact: "Contact",
            hero_greeting: "Hello, I am", hero_role: "Software Engineering Student & Web Developer | Generative AI Specialist at UTC Uvira",
            hero_sub: "Co-founder Hub Tech DRC | Member Passionnated Web Club", btn_discover: "Discover my projects", btn_view_cv: "View / Download CV",
            title_projects: "My Projects", badge_soon: "Coming soon", status_in_dev: "In development", btn_demo: "Live Demo",
            desc_portfolio: "Multilingual and interactive portfolio web app presenting my skills, software engineering projects, and journey.",
            tag_active: "Active Project",
            desc_myloc: "Property owners and tenants manage their properties securely. Smart rental and lease tracking system.",
            desc_uviramarket: "Local e-commerce platform connecting sellers, buyers, and administrators in Uvira city.",
            desc_edugest: "SaaS school management system: academic tracking, student registries, and financial accounting.",
            desc_mungafamily: "Interactive family registry web application: visual family tree and heritage preservation.",
            desc_hubtech: "Official innovation and digital transformation club platform based at UTC-Uvira.",
            title_timeline: "My Journey", tl_utc: "Higher education in Software Engineering & Computer Science",
            tl_benevolencija: "Certificate: Hate Speech Prevention and Peace Consolidation", tl_python: "Specialized Training Certificate in Python",
            title_skills: "My Skills", title_contact: "Contact Me", contact_subtitle: "Let's talk about your projects",
            contact_desc: "Whether for a web app, real estate management, or generative AI collaboration, I am at your service!",
            btn_view_download_cv: "View or Download my CV", lbl_name: "Your Name", lbl_email: "Your Email", lbl_subject: "Subject", lbl_message: "Message",
            btn_send: "Send Message", msg_reply_instant: "The author will reply to you in a moment!", cv_modal_info: "The CV is synchronized with the currently selected language on the site.",
            btn_download: "Download PDF Document", footer_sub: "Developed with passion in Software Engineering"
        },
        sw: {
            nav_home: "Mwanzo", nav_projects: "Miradi", nav_timeline: "Masomo", nav_skills: "Ujuzi", nav_contact: "Mawasiliano",
            hero_greeting: "Jambo, mimi ni", hero_role: "Mwanafunzi wa Software Engineering & Mtengenezaji wa Web | Mtaalamu wa AI huko UTC Uvira",
            hero_sub: "Mwanzilishi mwenza Hub Tech DRC | Mwanachama Passionnated Web Club", btn_discover: "Tazama miradi yangu", btn_view_cv: "Soma / Pakua CV yangu",
            title_projects: "Kazi Zangu", badge_soon: "Inakuja hivi karibuni", status_in_dev: "Inatengenezwa", btn_demo: "Tazama mfano",
            desc_portfolio: "Tovuti ya kisasa inayoonyesha ujuzi, miradi na masomo yangu ya Software Engineering kwa lugha mbalimbali.",
            tag_active: "Mradi wa Sasa",
            desc_myloc: "Wenye nyumba na wapangaji wanatunza mali zao kwa usalama. Mfumo wa kisasa wa kusimamia kodi.",
            desc_uviramarket: "Jukwaa la e-commerce linalounganisha wauzaji, wanunuzi na wasimamizi katika mji wa Uvira.",
            desc_edugest: "Mfumo wa SaaS wa kusimamia shule: masomo, rekodi za wanafunzi na fedha.",
            desc_mungafamily: "Mfumo wa mtandao wa kumbukumbu za familia: mti wa ukoo na historia ya familia.",
            desc_hubtech: "Jukwaa rasmi la klabu ya ubunifu wa kidijitali katika Chuo Kikuu cha Teknolojia cha Congo (UTC-Uvira).",
            title_timeline: "Hatua Zangu", tl_utc: "Masomo ya juu katika Software Engineering na Sayansi ya Kompyuta",
            tl_benevolencija: "Shahada: Kuzuia hotuba za chuki na kujenga amani", tl_python: "Cheti cha mafunzo maalum ya Python",
            title_skills: "Ujuzi Wangu", title_contact: "Nipigie / Nitumie Ujumbe", contact_subtitle: "Tuzungumzie miradi yako",
            contact_desc: "Iwe ni programu ya web, uongozi wa nyumba au ushirikiano wa AI, niko tayari kukusaidia!",
            btn_view_download_cv: "Soma au Pakua CV yangu", lbl_name: "Jina Yako", lbl_email: "Barua pepe Yako", lbl_subject: "Mada", lbl_message: "Ujumbe",
            btn_send: "Tuma Ujumbe", msg_reply_instant: "Mwandishi atakujibu hivi karibuni!", cv_modal_info: "CV inabadilishwa kulingana na lugha iliyochaguliwa kwenye mtandao.",
            btn_download: "Pakua Waraka wa PDF", footer_sub: "Imeundwa kwa upendo katika Software Engineering"
        }
    };

    // 2. CHANGEMENT DE LANGUE
    const langSelect = document.querySelector("#lang-select");
    let currentLang = "fr";

    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        const cvFrame = document.querySelector("#cv-frame");
        const btnDownloadCv = document.querySelector("#btn-download-cv");
        const pdfFile = `assets/CV_Ngombo_${lang.toUpperCase()}.pdf`;

        if (cvFrame) cvFrame.src = pdfFile;
        if (btnDownloadCv) btnDownloadCv.href = pdfFile;
    }

    if (langSelect) {
        langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
    }

    // 3. SKILLS DATA
    const skillsData = [
        { name: "Python / Flask", level: 50 },
        { name: "Java", level: 20 },
        { name: "C++", level: 30 },
        { name: "HTML5 / CSS3", level: 60 },
        { name: "JavaScript (ES6+)", level: 50 },
        { name: "SQLite / MySQL / Database Schema", level: 55 },
        { name: "IA Générative & Prompts", level: 60 },
        { name: "CustomTkinter, Tkinter, & Kivy", level: 60 },
        { name: "Git / GitHub / Vercel", level: 60 }
    ];

    const skillsContainer = document.querySelector("#skills-container");
    if (skillsContainer) {
        skillsContainer.innerHTML = ""; 
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

    // 4. MODAL CV
    const cvModal = document.querySelector("#cv-modal");
    const btnOpenCvModal = document.querySelector("#btn-open-cv-modal");
    const btnTriggerCv = document.querySelector("#btn-trigger-cv");
    const closeCvModal = document.querySelector("#close-cv-modal");

    function openCvModal() { if (cvModal) cvModal.style.display = "flex"; }
    function closeCvModalFunc() { if (cvModal) cvModal.style.display = "none"; }

    if (btnOpenCvModal) btnOpenCvModal.addEventListener("click", openCvModal);
    if (btnTriggerCv) btnTriggerCv.addEventListener("click", openCvModal);
    if (closeCvModal) closeCvModal.addEventListener("click", closeCvModalFunc);

    window.addEventListener("click", (e) => { if (e.target === cvModal) closeCvModalFunc(); });

    // 5. FORMULAIRE CONTACT
    const contactForm = document.querySelector("#contact-form");
    const formResponseBox = document.querySelector("#form-response");
    const responseText = document.querySelector("#response-text");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name && email && message) {
                if (formResponseBox && responseText) {
                    responseText.textContent = translations[currentLang].msg_reply_instant;
                    formResponseBox.classList.remove("d-none");
                }
                const mailtoLink = `mailto:ngombomibaraka@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
                setTimeout(() => {
                    window.location.href = mailtoLink;
                    contactForm.reset();
                }, 1000);
            }
        });
    }

    // 6. ANIMATIONS
    const menuToggle = document.querySelector("#mobile-menu");
    const navLinks = document.querySelector("#nav-links");
    if (menuToggle) menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const fillBar = entry.target.querySelector('.progress-bar-fill');
                if (fillBar) fillBar.style.width = `${fillBar.getAttribute('data-level')}%`;
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});