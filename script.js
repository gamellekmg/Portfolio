function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const translations = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.subtitle1": "Full-Stack Software Engineer",
    "hero.subtitle2": "Student",
    "hero.cta.contact": "Let's Connect",
    "hero.cta.download": "Download CV",
    "about.tag": "Introduction",
    "about.title": "About Me",
    "about.p1": "I am a problem solver who works with both logic and heart. I love creating things that not only work well but also help people in real life. As a bilingual student (English and French) in software engineering, I have learned to stay calm and organized even when life gets busy. During my last term, I managed a part-time internship, my university classes, and tutoring high school students at the same time. It taught me how to plan, focus, and support others all while keeping a positive attitude. I also started a small personal project to help local small businesses build their websites and grow online. For me, it was more than a coding project it was a way to make technology useful for people who really need it. It also gave me a great chance to practice and improve my development skills while helping others.",
    "about.p2": "I believe that technology should be human, and that empathy, kindness, and good communication make a real difference in any team. I am someone who likes to laugh, share ideas, and always bring good energy to my work. If you are looking for someone who can code carefully and care deeply, I would love to work with you.",
    "about.stats.years": "Years Experience",
    "about.stats.tech": "Technologies",
    "about.stats.coops": "Co-op Terms & Internships",
    "skills.tag": "Expertise",
    "skills.title": "Technical Skills",
    "concepts.title": "Engineering Concepts & Technical Knowledge",
    "concepts.p1": "Beyond tools and programming languages, I have developed a strong understanding of core software engineering concepts through my academic training and personal projects. I enjoy learning how systems behave, how problems can be analyzed from different angles, and how thoughtful design decisions improve reliability and maintainability.",
    "concepts.design.title": "Software Design & Analysis",
    "concepts.design.text": "Requirement analysis, understanding epics and user stories, translating functional needs into technical solutions, and reasoning about system behavior before implementation.",
    "concepts.testing.title": "Testing & Validation",
    "concepts.testing.text": "Understanding of test cases, test scenarios, edge cases, and validation strategies to ensure software behaves as expected and meets specifications.",
    "concepts.debugging.title": "Problem Solving & Debugging",
    "concepts.debugging.text": "Logical reasoning, step by step debugging, identifying root causes, and proposing alternative solutions when initial approaches do not work.",
    "concepts.automation.title": "Automation & Scripting",
    "concepts.automation.text": "Writing scripts to automate repetitive tasks, simplify workflows, and support testing or data processing activities.",
    "concepts.distributed.title": "Distributed Systems Concepts",
    "concepts.distributed.text": "Basic understanding of client server communication, APIs, RPC based communication such as gRPC, and how services interact in modern systems.",
    "concepts.networking.title": "Networking Fundamentals",
    "concepts.networking.text": "Foundational knowledge of networking concepts such as TCP IP communication and basic routing ideas studied during coursework.",
    "concepts.ml.title": "Machine Learning Awareness",
    "concepts.ml.text": "Conceptual understanding of machine learning principles including data driven models, training, evaluation, and practical limitations, with interest in applying them through hands on learning.",
    "concepts.communication.title": "Collaboration & Communication",
    "concepts.communication.text": "Ability to ask questions, explain ideas clearly, document problems and solutions, and contribute actively within a small development team.",
    "experience.tag": "Career Path",
    "experience.title": "Experience",
    "experience.item1.title": "Software Developer CO-OP",
    "experience.item1.org": "University of Ottawa",
    "experience.item1.desc": "Built bilingual scholarship database with advanced CMS, implementing sophisticated search algorithms and automated validation systems.",
    "experience.item2.title": "Software Developer & Team Lead (Internship)",
    "experience.item2.org": "Wouessi",
    "experience.item2.desc": "Led backend optimization with Node.js and MongoDB, developed responsive React interfaces, managed technical initiatives for performance improvements.",
    "experience.item3.title": "Software Developer CO-OP",
    "experience.item3.org": "Immigration & Refugee Board",
    "experience.item3.desc": "Optimized data processing solutions using TypeScript and SQL, enhanced system performance through pattern analysis and code reviews.",
    "experience.item4.title": "IT Support Analyst CO-OP and Part-time",
    "experience.item4.org": "Immigration & Refugee Board",
    "experience.item4.desc": "Resolved complex technical issues through systematic troubleshooting, managed secure database configurations and system performance optimization.",
    "experience.item5.title": "Programming Assistant (CO-OP)",
    "experience.item5.org": "University of Ottawa",
    "experience.item5.desc": "Designed clean HTML layouts to improve readability and structure. Reviewed content and translated instructional materials to French.",
    "projects.tag": "Portfolio",
    "projects.title": "Featured Projects",
    "projects.cepap.title": "CEPAP – Educational Dashboard (In Progress)",
    "projects.cepap.desc": "Here is my first ongoing project under AG Code & Design for an educational organization. An educational dashboard to organize and share teaching materials. File upload/download, category sorting, and user sign-in are already functional. Upcoming features include an admin dashboard to view event registrations, an event list for teachers, and support for uploading presentation videos.",
    "projects.uyp.title": "UYP-PMS – Pharmacy Prescription Management System",
    "projects.uyp.desc": "A full-stack web application designed to simulate real-world pharmacy prescription workflows. The system supports role-based access (Admin, Pharmacist, Assistant), secure user authentication, and end-to-end prescription handling, including prescription creation and preparation. The application is fully containerized, allowing a simple and consistent setup using Docker Compose.",
    "projects.skylens.title": "Skylens – Aircraft Conflict Detection Tool",
    "projects.skylens.desc": "Built during the NAV CANADA-sponsored challenge at the uOttaHack 8 hackathon, Skylens is a real-time simulation tool designed to detect and visualize potential mid-air aircraft conflicts based on flight trajectory data. The goal was to explore ways technology could support air traffic safety by detecting risks before they become emergencies.<br><br>I was responsible for developing the core algorithm that processes aircraft positions, altitude, speed, and heading to identify when two or more flights enter a potential conflict zone. With our team, we implemented the solution with a React front-end and NestJS backend to make the logic interactive and clear. The final prototype was presented to NAV CANADA mentors and received positive feedback for its simplicity and practical use.",
    "projects.novigrad.title": "Novigrad: Service Management App",
    "projects.novigrad.desc": "Android application with real-time updates and user authentication. An administrator manage the platform by adding or deleting services, removing employees. Employees can sign up or log in to offer their own services on the platform.",
    "projects.glamhair.title": "GlamHair Website",
    "projects.glamhair.desc": "An online wig store that allows customers to browse and buy wigs, book consultations, and get care tips for their hair extensions and wigs. The website also includes guidance on how to install, maintain, and style their wigs.",
    "projects.ag.title": "AG Code&Design (In Progress)",
    "projects.ag.desc": "A small web studio created to help individuals and small businesses build a real online presence. The goal is to make websites that are clear, easy to use, and reflect the identity of each client. The project focuses on simple design, smooth navigation, and responsive layouts so anyone can access the site on any device.",
    "buttons.demo": "Demo",
    "buttons.devReport": "Dev Report",
    "buttons.techReport": "Technical Report",
    "buttons.figmaOverview": "Figma Problem Overview",
    "buttons.live": "Live",
    "contact.tag": "Get In Touch",
    "contact.title": "Contact Me",
    "contact.email.title": "Email",
    "contact.email.label": "Response within 24h",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.link": "Connect with me",
    "contact.linkedin.label": "Professional network",
    "contact.availability.title": "Availability",
    "contact.availability.link": "Open to Opportunities",
    "contact.availability.label": "Co-op, Part-time & Full-time roles",
    "footer.text": "© 2025 Gamelle Kamga. Crafted with passion and precision."
  },
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.subtitle1": "Ingénieure logiciel full‑stack",
    "hero.subtitle2": "Étudiante",
    "hero.cta.contact": "Me contacter",
    "hero.cta.download": "Télécharger le CV",
    "about.tag": "Introduction",
    "about.title": "À propos de moi",
    "about.p1": "Je suis une personne qui résout les problèmes avec logique et cœur. J’aime créer des choses qui fonctionnent bien et qui aident les gens dans la vie réelle. En tant qu’étudiante bilingue (anglais et français) en génie logiciel, j’ai appris à rester calme et organisée même quand la vie s’accélère. Lors de mon dernier trimestre, j’ai concilié un stage à temps partiel, mes cours universitaires et du tutorat auprès d’élèves du secondaire. Cela m’a appris à planifier, à rester concentrée et à soutenir les autres tout en gardant une attitude positive. J’ai aussi lancé un petit projet personnel pour aider les petites entreprises locales à créer leur site web et à se développer en ligne. Pour moi, c’était plus qu’un projet de code : c’était une façon de rendre la technologie utile aux personnes qui en ont vraiment besoin. Cela m’a aussi donné une excellente occasion de pratiquer et d’améliorer mes compétences en développement tout en aidant les autres.",
    "about.p2": "Je crois que la technologie doit rester humaine, et que l’empathie, la bienveillance et une bonne communication font une vraie différence dans une équipe. J’aime rire, partager des idées et apporter une énergie positive dans mon travail. Si vous cherchez quelqu’un qui code avec rigueur et qui se soucie vraiment des gens, je serais ravie de travailler avec vous.",
    "about.stats.years": "Années d’expérience",
    "about.stats.tech": "Technologies",
    "about.stats.coops": "Stages coop et stages",
    "skills.tag": "Expertise",
    "skills.title": "Compétences techniques",
    "concepts.title": "Concepts d’ingénierie et connaissances techniques",
    "concepts.p1": "Au-delà des outils et des langages de programmation, j’ai développé une solide compréhension des concepts fondamentaux du génie logiciel grâce à ma formation académique et à mes projets personnels. J’aime apprendre comment les systèmes se comportent, comment analyser les problèmes sous différents angles, et comment des choix de conception réfléchis améliorent la fiabilité et la maintenabilité.",
    "concepts.design.title": "Conception et analyse logicielle",
    "concepts.design.text": "Analyse des besoins, compréhension des epics et des user stories, traduction des besoins fonctionnels en solutions techniques, et raisonnement sur le comportement du système avant l’implémentation.",
    "concepts.testing.title": "Tests et validation",
    "concepts.testing.text": "Compréhension des cas de test, scénarios de test, cas limites et stratégies de validation pour garantir que le logiciel se comporte comme prévu et respecte les spécifications.",
    "concepts.debugging.title": "Résolution de problèmes et débogage",
    "concepts.debugging.text": "Raisonnement logique, débogage pas à pas, identification des causes racines et proposition de solutions alternatives lorsque les approches initiales ne fonctionnent pas.",
    "concepts.automation.title": "Automatisation et scripting",
    "concepts.automation.text": "Écriture de scripts pour automatiser les tâches répétitives, simplifier les flux de travail et soutenir les activités de test ou de traitement de données.",
    "concepts.distributed.title": "Notions de systèmes distribués",
    "concepts.distributed.text": "Compréhension de base des communications client-serveur, des API, des communications basées sur RPC comme gRPC et de la façon dont les services interagissent dans les systèmes modernes.",
    "concepts.networking.title": "Fondamentaux des réseaux",
    "concepts.networking.text": "Connaissances de base des concepts réseau comme la communication TCP/IP et les notions de routage étudiées en cours.",
    "concepts.ml.title": "Sensibilisation au machine learning",
    "concepts.ml.text": "Compréhension conceptuelle des principes du machine learning, notamment les modèles basés sur les données, l’entraînement, l’évaluation et les limites pratiques, avec un intérêt pour leur application via l’apprentissage pratique.",
    "concepts.communication.title": "Collaboration et communication",
    "concepts.communication.text": "Capacité à poser des questions, expliquer clairement les idées, documenter les problèmes et les solutions, et contribuer activement au sein d’une petite équipe de développement.",
    "experience.tag": "Parcours",
    "experience.title": "Expérience",
    "experience.item1.title": "Développeuse logiciel CO-OP",
    "experience.item1.org": "Université d’Ottawa",
    "experience.item1.desc": "Création d’une base de données bilingue de bourses avec un CMS avancé, mise en place d’algorithmes de recherche et de systèmes de validation automatisés.",
    "experience.item2.title": "Développeuse logiciel et cheffe d’équipe (stage)",
    "experience.item2.org": "Wouessi",
    "experience.item2.desc": "Optimisation du backend avec Node.js et MongoDB, développement d’interfaces React responsives, pilotage d’initiatives techniques pour améliorer les performances.",
    "experience.item3.title": "Développeuse logiciel CO-OP",
    "experience.item3.org": "Commission de l’immigration et du statut de réfugié",
    "experience.item3.desc": "Optimisation de solutions de traitement de données avec TypeScript et SQL, amélioration des performances système grâce à l’analyse des patterns et aux revues de code.",
    "experience.item4.title": "Analyste du support TI CO-OP et temps partiel",
    "experience.item4.org": "Commission de l’immigration et du statut de réfugié",
    "experience.item4.desc": "Résolution de problèmes techniques complexes par un dépannage systématique, gestion de configurations de bases de données sécurisées et optimisation des performances système.",
    "experience.item5.title": "Assistante en programmation (CO-OP)",
    "experience.item5.org": "Université d’Ottawa",
    "experience.item5.desc": "Conception de mises en page HTML claires pour améliorer la lisibilité et la structure. Révision de contenus et traduction de supports pédagogiques en français.",
    "projects.tag": "Portfolio",
    "projects.title": "Projets mis en avant",
    "projects.cepap.title": "CEPAP – Tableau de bord éducatif (En cours)",
    "projects.cepap.desc": "Voici mon premier projet en cours sous AG Code & Design pour une organisation éducative. Un tableau de bord pour organiser et partager des supports pédagogiques. Le téléversement et le téléchargement de fichiers, le tri par catégorie et la connexion des utilisateurs sont déjà fonctionnels. Les prochaines fonctionnalités incluent un tableau de bord administrateur pour voir les inscriptions aux événements, une liste d’événements pour les enseignants et la prise en charge du téléversement de vidéos de présentation.",
    "projects.uyp.title": "UYP-PMS – Système de gestion des prescriptions en pharmacie",
    "projects.uyp.desc": "Application web full-stack conçue pour simuler des flux de travail réels de prescriptions en pharmacie. Le système prend en charge un accès par rôle (Administrateur, Pharmacien, Assistant), une authentification sécurisée et la gestion complète des prescriptions, y compris leur création et leur préparation. L’application est entièrement conteneurisée, ce qui permet une mise en place simple et cohérente via Docker Compose.",
    "projects.skylens.title": "Skylens – Outil de détection de conflits aériens",
    "projects.skylens.desc": "Réalisé pendant le défi parrainé par NAV CANADA lors du hackathon uOttaHack 8, Skylens est un outil de simulation en temps réel conçu pour détecter et visualiser des conflits aériens potentiels à partir des données de trajectoire de vol. L’objectif était d’explorer comment la technologie peut soutenir la sécurité du trafic aérien en détectant les risques avant qu’ils ne deviennent des urgences.<br><br>J’étais responsable du développement de l’algorithme principal qui traite la position des aéronefs, l’altitude, la vitesse et le cap afin d’identifier quand deux vols ou plus entrent dans une zone de conflit potentielle. Avec l’équipe, nous avons mis en œuvre la solution avec un front-end React et un backend NestJS pour rendre la logique interactive et claire. Le prototype final a été présenté aux mentors de NAV CANADA et a reçu des retours positifs pour sa simplicité et son utilité pratique.",
    "projects.novigrad.title": "Novigrad : application de gestion de services",
    "projects.novigrad.desc": "Application Android avec mises à jour en temps réel et authentification utilisateur. Un administrateur gère la plateforme en ajoutant ou supprimant des services et en retirant des employés. Les employés peuvent s’inscrire ou se connecter pour proposer leurs propres services sur la plateforme.",
    "projects.glamhair.title": "Site web GlamHair",
    "projects.glamhair.desc": "Boutique en ligne de perruques permettant aux clients de parcourir et d’acheter des perruques, de réserver des consultations et d’obtenir des conseils pour l’entretien de leurs extensions et perruques. Le site propose aussi des indications pour installer, entretenir et coiffer leurs perruques.",
    "projects.ag.title": "AG Code&Design (En cours)",
    "projects.ag.desc": "Petit studio web créé pour aider les particuliers et les petites entreprises à bâtir une présence en ligne réelle. L’objectif est de créer des sites clairs, faciles à utiliser et fidèles à l’identité de chaque client. Le projet met l’accent sur un design simple, une navigation fluide et des mises en page responsives afin que tout le monde puisse accéder au site sur n’importe quel appareil.",
    "buttons.demo": "Démo",
    "buttons.devReport": "Rapport de développement",
    "buttons.techReport": "Rapport technique",
    "buttons.figmaOverview": "Aperçu du problème (Figma)",
    "buttons.live": "Voir en ligne",
    "contact.tag": "Contact",
    "contact.title": "Me contacter",
    "contact.email.title": "Courriel",
    "contact.email.label": "Réponse sous 24 h",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.link": "Se connecter avec moi",
    "contact.linkedin.label": "Réseau professionnel",
    "contact.availability.title": "Disponibilité",
    "contact.availability.link": "Ouverte aux opportunités",
    "contact.availability.label": "Stages coop, temps partiel et temps plein",
    "footer.text": "© 2025 Gamelle Kamga. Réalisé avec passion et précision."
  }
};

const langToggle = document.getElementById('langToggle');
const storedLang = localStorage.getItem('site-lang');
let currentLang = storedLang || 'en';

function updateToggleLabel(lang) {
  if (!langToggle) return;
  const isEnglish = lang === 'en';
  langToggle.textContent = isEnglish ? 'Français' : 'English';
  langToggle.setAttribute('aria-label', isEnglish ? 'Switch to French' : 'Passer en anglais');
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang]?.[key];
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const value = translations[lang]?.[key];
    if (value) {
      el.innerHTML = value;
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  applyTranslations(lang);
  updateToggleLabel(lang);

  const cvLink = document.getElementById('cvDownload');
  if (cvLink) {
    const cvHref = lang === 'fr' ? cvLink.dataset.cvFr : cvLink.dataset.cvEn;
    if (cvHref) {
      cvLink.setAttribute('href', cvHref);
    }
  }
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'fr' : 'en');
  });
}

setLanguage(currentLang);

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

if (slides.length > 1) {
  setInterval(nextSlide, 4000);
}

// Navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Skill circles
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const percent = circle.dataset.percent;
      const progress = 440 - (440 * percent) / 100;

      circle.querySelector('.circle-progress').style.strokeDashoffset = progress;
      circle.classList.add('animate');
      skillObserver.unobserve(circle);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-circle').forEach(circle => {
  skillObserver.observe(circle);
});

// Timeline
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
  timelineObserver.observe(item);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const section = document.querySelector('.hero-section');
const backgrounds = [
  './assets/bg1.jpg',
  './assets/bg2.png',
  './assets/bg3.jpg'
];

let index = 0;

if (section) {
  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    section.style.backgroundImage = `url('${backgrounds[index]}')`;
  }, 10000); // 10000ms = 10 seconds
}
