/**
 * ============================================================================
 * DEV ARCADE - PORTFOLIO GIOCHI ENGINE (MULTILINGUAL - 10 LANGUAGES)
 * Default Language: English (en)
 * Supports: English, Italian, Spanish, French, Arabic, Chinese, Portuguese, Hindi, Russian, Japanese
 * ============================================================================
 */

// Storage Keys
const STORAGE_KEY_GAMES = "dev_arcade_games_v4";
const STORAGE_KEY_USERS = "dev_arcade_users_v4";
const STORAGE_KEY_SESSION = "dev_arcade_session_v4";
const STORAGE_KEY_THEME = "dev_arcade_theme_v4";
const STORAGE_KEY_LANG = "dev_arcade_lang_v4";

// ============================================================================
// ADMIN CREATOR KEY & DEFAULT ADMIN ACCOUNT
// ============================================================================
const CREATOR_SECRET_KEY = "admin123";



// ============================================================================
// DEFAULT GAMES LIST (WITH DUAL GITHUB LINKS & SNAKE COVER POSITIONED ON THE SNAKE)
// ============================================================================
const defaultGames = [
    {
        id: 1,
        title: "Snake from Scratch with HTML, CSS & JavaScript",
        category: "Arcade",
        tech: "HTML5 • CSS • Vanilla JS",
        description: "The classic Snake game created from scratch with pure HTML, CSS, and JavaScript. Smooth grid movement, food collision, dynamic scoring system, and keyboard controls.",
        playUrl: "https://diensal8-sudo.github.io/snake-game/",
        repoUrl: "https://github.com/diensal8-sudo/calculator.git",
        coverStyle: "grad-purple",
        imageUrl: "snake-cover.jpg",
        imagePosition: "center 52%" // Centers exactly on the green snake!
    },
    {
        id: 2,
        title: "Quiz Game built from scratch with HTML, CSS & JS",
        category: "Azione",
        tech: "Canvas 2D • JavaScript • Web Audio",
        description: "A multiple-choice quiz game built from scratch with HTML, CSS and JavaScript. No libraries, no frameworks - just pure web technologies. Test your knowledge with a timer, score tracking, and interactive feedback.",
        playUrl: "https://diensal8-sudo.github.io/quiz-e-domande/",
        repoUrl: "https://github.com/diensal8-sudo/quiz-e-domande.git",
        coverStyle: "grad-cyan",
        imageUrl: "",
        imagePosition: "center 50%"
    },
    {
        id: 3,
        title: "Memory Code Challenge",
        category: "Puzzle",
        tech: "JavaScript DOM • CSS 3D",
        description: "Test your memory by matching programming icon pairs in the shortest time possible, with timer, flip animations, and local high scores.",
        playUrl: "https://diensal8-sudo.github.io/Memory/",
        repoUrl: "https://github.com/diensal8-sudo/Memory.git",
        coverStyle: "grad-orange",
        imageUrl: "",
        imagePosition: "center 50%"
    },
    {
        id: 4,
        title: "Tic-Tac-Toe against the computer",
        category: "Platform",
        tech: "HTML5 Canvas • Physics JS",
        description: " built from scratch with HTML, CSS and JavaScript. No libraries, no frameworks. Play against the computer with a simple AI that never loses, and enjoy the smooth animations and responsive design.",
        playUrl: "https://diensal8-sudo.github.io/Tic-Tac-Toe-vs-CPU/",
        repoUrl: "https://github.com/diensal8-sudo/Tic-Tac-Toe-vs-CPU.git",
        coverStyle: "grad-emerald",
        imageUrl: "",
        imagePosition: "center 50%"
    },
    {
        id: 5,
        title: "A to-do list app built from scratch ",
        category: "Casual",
        tech: "CSS Grid • JavaScript • Touch Support",
        description: "A to-do list app built from scratch with HTML, CSS and JavaScript. No libraries, no frameworks.",
        playUrl: "https://diensal8-sudo.github.io/Todo-list/",
        repoUrl: "https://github.com/diensal8-sudo/Todo-list.git",
        coverStyle: "grad-rose",
        imageUrl: "",
        imagePosition: "center 50%"
    }
];

// ============================================================================
// MULTILINGUAL DICTIONARY (TOP 10 WORLD LANGUAGES)
// English (Default), Italian, Spanish, French, Arabic, Chinese, Portuguese, Hindi, Russian, Japanese
// ============================================================================
const translations = {
    en: {
        brandSubtitle: "Game Portfolio",
        navGames: "Games",
        navFaq: "FAQ",
        navGithub: "GitHub",
        navNewGame: "+ New Game",
        navLogout: "Logout",
        navAuth: "🔐 Login / Register",
        heroBadge: "Web Game Portfolio & Open Source Code",
        heroTitle1: "My games crafted from scratch,",
        heroTitle2: "playable online in your browser",
        heroSubtitle: "Explore my interactive game collection: test every game live in the browser via GitHub Pages or inspect the open-source codebase on GitHub.",
        heroExplore: "🎮 Explore Games",
        heroAdd: "➕ Add a Game",
        heroExport: "📦 Export for GitHub",
        statGames: "Games in Portfolio",
        statPlayable: "Playable Online",
        statCode: "Source Code Ready",
        showcaseTitle: "🎮 Games Showcase",
        showcaseSubtitle: "Choose a game: click '▶ Play Online' to launch the demo or '</> GitHub Code' to inspect the repository.",
        searchPlaceholder: "Search by title, technology or keyword...",
        sortNewest: "Newest first",
        sortAlpha: "Title (A - Z)",
        sortCategory: "Category",
        catAll: "All",
        catArcade: "🕹️ Arcade",
        catPuzzle: "🧩 Puzzle",
        catAction: "⚔️ Action",
        catPlatform: "🏃 Platform",
        catCasual: "🎲 Casual",
        playOnline: "▶ Play Online",
        githubCode: "</> GitHub Code",
        previewInPortfolio: "👁️ Play in Portfolio",
        liveDemoBadge: "● Live Demo",
        editTooltip: "Edit Game",
        deleteTooltip: "Delete Game",
        noGamesFound: "No games found",
        noGamesFoundDesc: "No games match your search query or selected category.",
        resetFilters: "Reset Filters",
        faqTitle: "❓ Frequently Asked Questions",
        faqSubtitle: "Everything you need to know about this game portfolio",
        faqQ1: "How do the two GitHub links work for each game?",
        faqA1: "Each game includes two essential links: 1. 'Play Online' launches the game hosted via GitHub Pages (e.g. https://username.github.io/game-name/). 2. 'GitHub Code' opens the GitHub Repository with all source files to study, fork, or star.",
        faqQ2: "How can I add a new game to the portfolio?",
        faqA2: "Click 'Login / Register' at the top right. Log in as Creator with your credentials or register a new Creator account with your secret key. Then click '+ New Game' to publish your title and both GitHub links!",
        faqQ3: "Do added games stay saved permanently?",
        faqA3: "Yes! Added games are saved directly in browser LocalStorage. Furthermore, with the 'Export for GitHub' button, you can copy the updated list into script.js so every visitor sees your games preloaded.",
        faqQ4: "Can I test games directly inside this website?",
        faqA4: "Absolutely! Click 'Play in Portfolio' on any card to launch an interactive game window without ever leaving the page.",
        footerDesc: "A collection of web games, prototypes and open-source experiments built with modern web technologies (HTML5 Canvas, CSS3, Vanilla JavaScript).",
        footerNav: "Navigation",
        footerAllGames: "All Games",
        footerAuthorLogin: "Creator Login",
        footerDev: "Developer",
        footerGithub: "GitHub Profile",
        footerCopyright: "© 2026 Dev Arcade. Built to showcase playable web games & open source GitHub code.",
        authTitleLogin: "User Login",
        authTitleRegister: "Create an Account",
        tabLogin: "Login",
        tabRegister: "Register",
        usernameOrEmail: "Username or Email",
        usernamePlaceholder: "Enter username or email...",
        password: "Password",
        passwordPlaceholder: "Enter your password...",
        cancelBtn: "Cancel",
        loginBtn: "Login",
        regUsername: "Username *",
        regEmail: "Email Address *",
        regPassword: "Password *",
        regConfirmPassword: "Confirm Password *",
        regRole: "Account Role",
        rolePlayer: "🕹️ Player (Visitor profile)",
        roleCreator: "🎮 Game Creator (Portfolio Owner)",
        creatorKey: "Secret Creator Key *",
        creatorKeyHint: "Only the portfolio owner has this key to manage games.",
        createAccountBtn: "Create Account",
        addGameTitle: "Add a New Game",
        editGameTitle: "Edit Game",
        gameTitle: "Game Title *",
        gameCategory: "Category *",
        gameTech: "Technologies / Languages",
        gameDescription: "Game Description *",
        gamePlayLink: "Link 1: Playable Game (GitHub Pages) *",
        gamePlayHint: "URL where the game can be played live in browser.",
        gameRepoLink: "Link 2: Source Code (GitHub Repository) *",
        gameRepoHint: "URL to the GitHub repository holding the source code.",
        gameThemeStyle: "Card Gradient Theme",
        gameImageCover: "Cover Image (URL or path e.g. snake-cover.jpg)",
        bannerPreviewLabel: "Live Banner Preview:",
        saveGameBtn: "💾 Save Game",
        playerFullscreen: "↗️ Play Fullscreen",
        playerRepo: "</> View GitHub Code",
        exportTitle: "Export Games Configuration",
        exportInfo: "Copy this code and replace defaultGames in script.js to make your games permanently available to all online visitors!",
        copyCode: "📋 Copy Code",
        copiedCode: "✅ Copied!",
        downloadJson: "Download JSON"
    },
    it: {
        brandSubtitle: "Portfolio Giochi",
        navGames: "Giochi",
        navFaq: "FAQ",
        navGithub: "GitHub",
        navNewGame: "+ Nuovo Gioco",
        navLogout: "Esci",
        navAuth: "🔐 Accedi / Registrati",
        heroBadge: "Portfolio Giochi & Codice Open Source",
        heroTitle1: "I miei giochi creati da zero,",
        heroTitle2: "giocabili online nel browser",
        heroSubtitle: "Esplora la mia collezione di videogiochi web: ogni titolo include sia la demo giocabile online via GitHub Pages, sia il repository del codice sorgente su GitHub.",
        heroExplore: "🎮 Esplora i Giochi",
        heroAdd: "➕ Aggiungi un Gioco",
        heroExport: "📦 Esporta per GitHub",
        statGames: "Giochi nel Portfolio",
        statPlayable: "Giocabili Online",
        statCode: "Codice Disponibile",
        showcaseTitle: "🎮 Vetrina Giochi",
        showcaseSubtitle: "Scegli un gioco: clicca su '▶ Gioca Online' per avviarlo o su '</> Codice GitHub' per vedere il sorgente.",
        searchPlaceholder: "Cerca per titolo, tecnologia o parola chiave...",
        sortNewest: "Più recenti",
        sortAlpha: "Titolo (A - Z)",
        sortCategory: "Categoria",
        catAll: "Tutti",
        catArcade: "🕹️ Arcade",
        catPuzzle: "🧩 Puzzle",
        catAction: "⚔️ Azione",
        catPlatform: "🏃 Platform",
        catCasual: "🎲 Casual",
        playOnline: "▶ Gioca Online",
        githubCode: "</> Codice GitHub",
        previewInPortfolio: "👁️ Prova nel Portfolio",
        liveDemoBadge: "● Live Demo",
        editTooltip: "Modifica Gioco",
        deleteTooltip: "Elimina Gioco",
        noGamesFound: "Nessun gioco trovato",
        noGamesFoundDesc: "Nessun gioco corrisponde alla ricerca o al filtro selezionato.",
        resetFilters: "Reimposta Filtri",
        faqTitle: "❓ Domande Frequenti",
        faqSubtitle: "Tutto quello che c'è da sapere sul funzionamento di questo portfolio",
        faqQ1: "Come funzionano i due link di GitHub per ogni gioco?",
        faqA1: "Ogni gioco include due link essenziali: 1. '▶ Gioca Online' apre la versione su GitHub Pages. 2. '</> Codice GitHub' porta alla repository con i file sorgente da studiare o scaricare.",
        faqQ2: "Come posso aggiungere un mio nuovo gioco?",
        faqA2: "Clicca su 'Accedi / Registrati' in alto a destra. Accedi come Creator con le tue credenziali o registrati inserendo la chiave segreta. Poi clicca '+ Nuovo Gioco'!",
        faqQ3: "I giochi aggiunti rimangono salvati per sempre?",
        faqA3: "Sì! Vengono salvati nel LocalStorage del browser. Inoltre con 'Esporta per GitHub' puoi copiare la lista aggiornata in script.js così tutti i visitatori li vedranno sempre.",
        faqQ4: "Posso provare un gioco direttamente all'interno di questo sito?",
        faqA4: "Certamente! Clicca su 'Prova nel Portfolio' su qualsiasi scheda per avviare una finestra interattiva senza uscire dalla pagina.",
        footerDesc: "Collezione di videogiochi web, prototipi e giochi open source sviluppati con tecnologie web moderne (HTML5 Canvas, CSS3, JavaScript Vanilla).",
        footerNav: "Navigazione",
        footerAllGames: "Tutti i Giochi",
        footerAuthorLogin: "Accesso Autore",
        footerDev: "Sviluppatore",
        footerGithub: "Profilo GitHub",
        footerCopyright: "© 2026 Dev Arcade. Realizzato per condividere e mostrare giochi web & codice GitHub.",
        authTitleLogin: "Accesso Utente",
        authTitleRegister: "Crea un nuovo Account",
        tabLogin: "Accedi",
        tabRegister: "Registrati",
        usernameOrEmail: "Nome Utente o Email",
        usernamePlaceholder: "Inserisci username o email...",
        password: "Password",
        passwordPlaceholder: "Inserisci la tua password...",
        cancelBtn: "Annulla",
        loginBtn: "Accedi",
        regUsername: "Nome Utente *",
        regEmail: "Indirizzo Email *",
        regPassword: "Password *",
        regConfirmPassword: "Conferma Password *",
        regRole: "Ruolo Account",
        rolePlayer: "🕹️ Giocatore (Profilo visitatore)",
        roleCreator: "🎮 Game Creator (Amministratore del portfolio)",
        creatorKey: "Chiave Segreta Autore *",
        creatorKeyHint: "Solo il proprietario del portfolio possiede questa chiave per gestire i giochi.",
        createAccountBtn: "Crea Account",
        addGameTitle: "Aggiungi un nuovo gioco",
        editGameTitle: "Modifica gioco",
        gameTitle: "Titolo del Gioco *",
        gameCategory: "Categoria *",
        gameTech: "Tecnologie / Linguaggi",
        gameDescription: "Descrizione del Gioco *",
        gamePlayLink: "Link 1: Per GIOCARE al gioco (GitHub Pages) *",
        gamePlayHint: "Questo è l'indirizzo dove il gioco è eseguibile online (GitHub Pages).",
        gameRepoLink: "Link 2: Per il CODICE Sorgente (Repository GitHub) *",
        gameRepoHint: "Questo è il link alla pagina GitHub che contiene tutto il codice sorgente.",
        gameThemeStyle: "Tema Gradiente Card",
        gameImageCover: "Copertina Immagine (URL o nome file es. snake-cover.jpg)",
        bannerPreviewLabel: "Anteprima Grafica Banner:",
        saveGameBtn: "💾 Salva Gioco",
        playerFullscreen: "↗️ Gioca a Schermo Intero",
        playerRepo: "</> Vedi Codice GitHub",
        exportTitle: "Esporta Configurazione Giochi",
        exportInfo: "Copia questo codice e sostituiscilo in script.js nella costante defaultGames per renderlo permanente online!",
        copyCode: "📋 Copia Codice",
        copiedCode: "✅ Codice Copiato!",
        downloadJson: "Scarica JSON"
    },
    es: {
        brandSubtitle: "Portafolio de Juegos",
        navGames: "Juegos",
        navFaq: "Preguntas",
        navGithub: "GitHub",
        navNewGame: "+ Nuevo Juego",
        navLogout: "Cerrar sesión",
        navAuth: "🔐 Iniciar Sesión / Registro",
        heroBadge: "Portafolio de Juegos y Código Abierto",
        heroTitle1: "Mis juegos creados desde cero,",
        heroTitle2: "jugables online en tu navegador",
        heroSubtitle: "Explora mi colección interactiva: prueba cada juego directamente en el navegador con GitHub Pages o revisa el código fuente en GitHub.",
        heroExplore: "🎮 Explorar Juegos",
        heroAdd: "➕ Añadir Juego",
        heroExport: "📦 Exportar para GitHub",
        statGames: "Juegos en Portafolio",
        statPlayable: "Jugables Online",
        statCode: "Código Fuente Listo",
        showcaseTitle: "🎮 Catálogo de Juegos",
        showcaseSubtitle: "Elige un juego: pulsa '▶ Jugar Online' o '</> Código GitHub' para ver el repositorio.",
        searchPlaceholder: "Buscar por título, tecnología o palabra clave...",
        sortNewest: "Más recientes",
        sortAlpha: "Título (A - Z)",
        sortCategory: "Categoría",
        catAll: "Todos",
        catArcade: "🕹️ Arcade",
        catPuzzle: "🧩 Puzzle",
        catAction: "⚔️ Acción",
        catPlatform: "🏃 Plataforma",
        catCasual: "🎲 Casual",
        playOnline: "▶ Jugar Online",
        githubCode: "</> Código GitHub",
        previewInPortfolio: "👁️ Probar en Portafolio",
        liveDemoBadge: "● Demo en vivo",
        editTooltip: "Editar Juego",
        deleteTooltip: "Eliminar Juego",
        noGamesFound: "No se encontraron juegos",
        noGamesFoundDesc: "Ningún juego coincide con los criterios de búsqueda.",
        resetFilters: "Restablecer Filtros",
        faqTitle: "❓ Preguntas Frecuentes",
        faqSubtitle: "Todo lo que necesitas saber sobre este portafolio",
        faqQ1: "¿Cómo funcionan los dos enlaces de GitHub?",
        faqA1: "Cada juego incluye dos enlaces: 1. 'Jugar Online' abre el juego en GitHub Pages. 2. 'Código GitHub' lleva al repositorio con los archivos.",
        faqQ2: "¿Cómo añadir un nuevo juego?",
        faqA2: "Inicia sesión como Creador con tu clave secreta y pulsa '+ Nuevo Juego'.",
        faqQ3: "¿Se guardan los juegos para siempre?",
        faqA3: "¡Sí! Se guardan en LocalStorage y con 'Exportar para GitHub' puedes pegarlos en script.js para que sean públicos.",
        faqQ4: "¿Puedo jugar dentro de este sitio?",
        faqA4: "¡Por supuesto! Haz clic en 'Probar en Portafolio' para abrirlo directamente en la página.",
        footerDesc: "Colección de videojuegos web y prototipos desarrollados con tecnologías web modernas.",
        footerNav: "Navegación",
        footerAllGames: "Todos los Juegos",
        footerAuthorLogin: "Acceso Creador",
        footerDev: "Desarrollador",
        footerGithub: "Perfil GitHub",
        footerCopyright: "© 2026 Dev Arcade. Creado para compartir juegos web y código abierto.",
        authTitleLogin: "Acceso de Usuario",
        authTitleRegister: "Crear una Cuenta",
        tabLogin: "Entrar",
        tabRegister: "Registrarse",
        usernameOrEmail: "Usuario o Correo",
        usernamePlaceholder: "Ingresa usuario o correo...",
        password: "Contraseña",
        passwordPlaceholder: "Ingresa tu contraseña...",
        cancelBtn: "Cancelar",
        loginBtn: "Entrar",
        regUsername: "Nombre de Usuario *",
        regEmail: "Correo Electrónico *",
        regPassword: "Contraseña *",
        regConfirmPassword: "Confirmar Contraseña *",
        regRole: "Rol de Cuenta",
        rolePlayer: "🕹️ Jugador (Perfil visitante)",
        roleCreator: "🎮 Creador de Juegos (Dueño)",
        creatorKey: "Clave Secreta de Creador *",
        creatorKeyHint: "Solo el dueño posee esta clave para gestionar juegos.",
        createAccountBtn: "Crear Cuenta",
        addGameTitle: "Añadir un Nuevo Juego",
        editGameTitle: "Editar Juego",
        gameTitle: "Título del Juego *",
        gameCategory: "Categoría *",
        gameTech: "Tecnologías / Lenguajes",
        gameDescription: "Descripción del Juego *",
        gamePlayLink: "Enlace 1: Jugar al Juego (GitHub Pages) *",
        gamePlayHint: "Dirección donde el juego es ejecutable online.",
        gameRepoLink: "Enlace 2: Código Fuente (GitHub Repo) *",
        gameRepoHint: "Enlace al repositorio con el código fuente.",
        gameThemeStyle: "Tema de Gradiente",
        gameImageCover: "Imagen de Portada (URL o archivo)",
        bannerPreviewLabel: "Vista Previa de Portada:",
        saveGameBtn: "💾 Guardar Juego",
        playerFullscreen: "↗️ Pantalla Completa",
        playerRepo: "</> Ver Código GitHub",
        exportTitle: "Exportar Configuración",
        exportInfo: "Copia este código y pégalo en defaultGames en script.js.",
        copyCode: "📋 Copiar Código",
        copiedCode: "✅ ¡Copiado!",
        downloadJson: "Descargar JSON"
    },
    fr: {
        brandSubtitle: "Portfolio de Jeux",
        navGames: "Jeux",
        navFaq: "FAQ",
        navGithub: "GitHub",
        navNewGame: "+ Nouveau Jeu",
        navLogout: "Déconnexion",
        navAuth: "🔐 Connexion / Inscription",
        heroBadge: "Portfolio de Jeux & Code Open Source",
        heroTitle1: "Mes jeux créés de zéro,",
        heroTitle2: "jouables en ligne dans le navigateur",
        heroSubtitle: "Découvrez mes créations web : testez chaque jeu en direct via GitHub Pages ou explorez le code source sur GitHub.",
        heroExplore: "🎮 Explorer les Jeux",
        heroAdd: "➕ Ajouter un Jeu",
        heroExport: "📦 Exporter pour GitHub",
        statGames: "Jeux au Portfolio",
        statPlayable: "Jouables en Ligne",
        statCode: "Code Disponible",
        showcaseTitle: "🎮 Vitrine des Jeux",
        showcaseSubtitle: "Choisissez un jeu : cliquez sur '▶ Jouer en Ligne' ou sur '</> Code GitHub'.",
        searchPlaceholder: "Rechercher par titre, techno ou mot-clé...",
        sortNewest: "Plus récents",
        sortAlpha: "Titre (A - Z)",
        sortCategory: "Catégorie",
        catAll: "Tous",
        catArcade: "🕹️ Arcade",
        catPuzzle: "🧩 Puzzle",
        catAction: "⚔️ Action",
        catPlatform: "🏃 Plateforme",
        catCasual: "🎲 Casual",
        playOnline: "▶ Jouer en Ligne",
        githubCode: "</> Code GitHub",
        previewInPortfolio: "👁️ Jouer ici",
        liveDemoBadge: "● Démo en Direct",
        editTooltip: "Modifier le Jeu",
        deleteTooltip: "Supprimer le Jeu",
        noGamesFound: "Aucun jeu trouvé",
        noGamesFoundDesc: "Aucun jeu ne correspond à votre recherche.",
        resetFilters: "Réinitialiser les Filtres",
        faqTitle: "❓ Questions Fréquentes",
        faqSubtitle: "Tout ce qu'il faut savoir sur ce portfolio de jeux",
        faqQ1: "Comment fonctionnent les deux liens GitHub ?",
        faqA1: "Chaque jeu propose : 1. 'Jouer en Ligne' sur GitHub Pages. 2. 'Code GitHub' pour explorer le dépôt GitHub.",
        faqQ2: "Comment ajouter un nouveau jeu ?",
        faqA2: "Connectez-vous en tant que Créateur avec votre clé secrète puis cliquez sur '+ Nouveau Jeu'.",
        faqQ3: "Les jeux restent-ils enregistrés ?",
        faqA3: "Oui ! Ils sont stockés dans LocalStorage et exportables dans script.js pour être visibles de tous.",
        faqQ4: "Puis-je jouer directement sur ce site ?",
        faqA4: "Absolument ! Cliquez sur 'Jouer ici' pour lancer le jeu dans une fenêtre intégrée.",
        footerDesc: "Collection de jeux vidéo web développés avec des technologies modernes.",
        footerNav: "Navigation",
        footerAllGames: "Tous les Jeux",
        footerAuthorLogin: "Accès Créateur",
        footerDev: "Développeur",
        footerGithub: "Profil GitHub",
        footerCopyright: "© 2026 Dev Arcade. Conçu pour partager des jeux web et du code open source.",
        authTitleLogin: "Connexion Utilisateur",
        authTitleRegister: "Créer un Compte",
        tabLogin: "Connexion",
        tabRegister: "Inscription",
        usernameOrEmail: "Identifiant ou Email",
        usernamePlaceholder: "Entrez votre nom ou email...",
        password: "Mot de passe",
        passwordPlaceholder: "Entrez votre mot de passe...",
        cancelBtn: "Annuler",
        loginBtn: "Connexion",
        regUsername: "Nom d'utilisateur *",
        regEmail: "Adresse Email *",
        regPassword: "Mot de passe *",
        regConfirmPassword: "Confirmer le mot de passe *",
        regRole: "Rôle du compte",
        rolePlayer: "🕹️ Joueur (Profil visiteur)",
        roleCreator: "🎮 Créateur de Jeux (Propriétaire)",
        creatorKey: "Clé Secrète Créateur *",
        creatorKeyHint: "Seul le propriétaire possède cette clé pour gérer les jeux.",
        createAccountBtn: "Créer le Compte",
        addGameTitle: "Ajouter un Nouveau Jeu",
        editGameTitle: "Modifier le Jeu",
        gameTitle: "Titre du Jeu *",
        gameCategory: "Catégorie *",
        gameTech: "Technologies / Langages",
        gameDescription: "Description du Jeu *",
        gamePlayLink: "Lien 1: Jouer au Jeu (GitHub Pages) *",
        gamePlayHint: "Lien où le jeu s'exécute en ligne.",
        gameRepoLink: "Lien 2: Code Source (Dépôt GitHub) *",
        gameRepoHint: "Lien vers le dépôt GitHub contenant le code.",
        gameThemeStyle: "Thème Dégradé",
        gameImageCover: "Image de Couverture (URL ou fichier)",
        bannerPreviewLabel: "Aperçu de la Bannière:",
        saveGameBtn: "💾 Enregistrer le Jeu",
        playerFullscreen: "↗️ Plein Écran",
        playerRepo: "</> Voir Code GitHub",
        exportTitle: "Exporter la Configuration",
        exportInfo: "Copiez ce code dans defaultGames dans script.js pour le rendre permanent.",
        copyCode: "📋 Copier le Code",
        copiedCode: "✅ Copié !",
        downloadJson: "Télécharger JSON"
    },
    ar: {
        brandSubtitle: "معرض الألعاب",
        navGames: "الألعاب",
        navFaq: "الأسئلة الشائعة",
        navGithub: "GitHub",
        navNewGame: "+ لعبة جديدة",
        navLogout: "تسجيل الخروج",
        navAuth: "🔐 تسجيل الدخول / التسجيل",
        heroBadge: "معرض ألعاب الويب والرموز مفتوحة المصدر",
        heroTitle1: "ألعابي المصممة بالكامل من الصفر،",
        heroTitle2: "قابلة للعب مباشرة في المتصفح",
        heroSubtitle: "استكشف مجموعتي التفاعلية: جرب كل لعبة مباشرة عبر صفحات GitHub Pages أو تصفح الكود المصدري على GitHub.",
        heroExplore: "🎮 استكشف الألعاب",
        heroAdd: "➕ أضف لعبة",
        heroExport: "📦 تصدير إلى GitHub",
        statGames: "ألعاب بالمعرض",
        statPlayable: "جاهزة للعب أونلاين",
        statCode: "الكود متاح مجاناً",
        showcaseTitle: "🎮 معرض الألعاب",
        showcaseSubtitle: "اختر لعبة: انقر على '▶ العب أونلاين' أو '</> كود GitHub' لمعاينة المشروع.",
        searchPlaceholder: "ابحث بالاسم أو التقنية أو الكلمة المفتاحية...",
        sortNewest: "الأحدث أولاً",
        sortAlpha: "الاسم (أ - ي)",
        sortCategory: "التصنيف",
        catAll: "الكل",
        catArcade: "🕹️ أركيد",
        catPuzzle: "🧩 ألغاز",
        catAction: "⚔️ أكشن",
        catPlatform: "🏃 منصات",
        catCasual: "🎲 خفيفة",
        playOnline: "▶ العب أونلاين",
        githubCode: "</> كود GitHub",
        previewInPortfolio: "👁️ العب بالمعرض",
        liveDemoBadge: "● ديمو مباشر",
        editTooltip: "تعديل اللعبة",
        deleteTooltip: "حذف اللعبة",
        noGamesFound: "لم يتم العثور على ألعاب",
        noGamesFoundDesc: "لا توجد لعبة تطابق معايير البحث.",
        resetFilters: "إعادة ضبط التصفية",
        faqTitle: "❓ الأسئلة الشائعة",
        faqSubtitle: "كل ما تود معرفته عن هذا الموقع التفاعلي",
        faqQ1: "كيف يعمل الرابطان المزدوجان من GitHub؟",
        faqA1: "لكل لعبة رابطان: 1. 'العب أونلاين' لتشغيل اللعبة في المتصفح. 2. 'كود GitHub' لفتح المستودع المصدري.",
        faqQ2: "كيف يمكنني إضافة لعبة جديدة؟",
        faqA2: "سجل الدخول كمنشئ ألعاب باستخدام المفتاح السري، ثم انقر على '+ لعبة جديدة'.",
        faqQ3: "هل تبقى الألعاب محفوظة دائماً؟",
        faqA3: "نعم! تحفظ محلياً ويمكن نسخها عبر زر التصدير إلى ملف script.js لتصبح دائمة للجميع.",
        faqQ4: "هل يمكنني اللعب داخل هذا الموقع مباشرة؟",
        faqA4: "بالتأكيد! انقر على 'العب بالمعرض' لفتح نافذة اللعب بدون مغادرة الصفحة.",
        footerDesc: "مجموعة ألعاب ويب وتجارب تفاعلية مبنية بأحدث تقنيات الويب الحديثة.",
        footerNav: "التنقل",
        footerAllGames: "جميع الألعاب",
        footerAuthorLogin: "دخول المطور",
        footerDev: "المطور",
        footerGithub: "ملف GitHub",
        footerCopyright: "© 2026 Dev Arcade. تم التطوير لمشاركة ألعاب الويب وأكواد GitHub.",
        authTitleLogin: "تسجيل الدخول",
        authTitleRegister: "إنشاء حساب جديد",
        tabLogin: "دخول",
        tabRegister: "تسجيل",
        usernameOrEmail: "اسم المستخدم أو البريد",
        usernamePlaceholder: "أدخل اسم المستخدم أو البريد...",
        password: "كلمة المرور",
        passwordPlaceholder: "أدخل كلمة المرور...",
        cancelBtn: "إلغاء",
        loginBtn: "تسجيل الدخول",
        regUsername: "اسم المستخدم *",
        regEmail: "البريد الإلكتروني *",
        regPassword: "كلمة المرور *",
        regConfirmPassword: "تأكيد كلمة المرور *",
        regRole: "نوع الحساب",
        rolePlayer: "🕹️ لاعب (حساب زائر)",
        roleCreator: "🎮 منشئ ألعاب (مالك الموقع)",
        creatorKey: "المفتاح السري للمنشئ *",
        creatorKeyHint: "المفتاح مخصص لمالك المعرض فقط لإدارة الألعاب.",
        createAccountBtn: "إنشاء الحساب",
        addGameTitle: "إضافة لعبة جديدة",
        editGameTitle: "تعديل اللعبة",
        gameTitle: "اسم اللعبة *",
        gameCategory: "التصنيف *",
        gameTech: "التقنيات المستخدمة",
        gameDescription: "وصف اللعبة *",
        gamePlayLink: "الرابط 1: للعب أونلاين (GitHub Pages) *",
        gamePlayHint: "رابط اللعبة القابل للتشغيل المباشر.",
        gameRepoLink: "الرابط 2: الكود المصدري (مستودع GitHub) *",
        gameRepoHint: "رابط مستودع GitHub الذي يحتوي على الأكواد.",
        gameThemeStyle: "نمط التدرج للبطاقة",
        gameImageCover: "رابط أو اسم صورة الغلاف",
        bannerPreviewLabel: "معاينة الغلاف مباشرة:",
        saveGameBtn: "💾 حفظ اللعبة",
        playerFullscreen: "↗️ وضع ملء الشاشة",
        playerRepo: "</> عرض كود GitHub",
        exportTitle: "تصدير التكوين",
        exportInfo: "انسخ هذا الكود واستبدل defaultGames في script.js لجعله دائماً للزوار.",
        copyCode: "📋 نسخ الكود",
        copiedCode: "✅ تم النسخ بنجاح!",
        downloadJson: "تحميل JSON"
    },
    zh: {
        brandSubtitle: "网页游戏作品集",
        navGames: "游戏列表",
        navFaq: "常见问题",
        navGithub: "GitHub",
        navNewGame: "+ 新增游戏",
        navLogout: "退出登录",
        navAuth: "🔐 登录 / 注册",
        heroBadge: "网页游戏作品集与开源代码",
        heroTitle1: "从零开始独立开发的游戏，",
        heroTitle2: "可在浏览器中即时在线畅玩",
        heroSubtitle: "探索我的交互式游戏集：通过 GitHub Pages 在线试玩每款游戏，或在 GitHub 上查阅完整开源代码。",
        heroExplore: "🎮 探索游戏",
        heroAdd: "➕ 添加游戏",
        heroExport: "📦 导出到 GitHub",
        statGames: "已收录游戏",
        statPlayable: "100% 在线可玩",
        statCode: "开源代码完备",
        showcaseTitle: "🎮 游戏展厅",
        showcaseSubtitle: "选择一款游戏：点击“▶ 在线畅玩”或“</> GitHub 源码”进行体验与查阅。",
        searchPlaceholder: "按标题、技术栈或关键字搜索...",
        sortNewest: "最新发布",
        sortAlpha: "名称排序 (A - Z)",
        sortCategory: "按分类",
        catAll: "全部",
        catArcade: "🕹️ 街机",
        catPuzzle: "🧩 益智",
        catAction: "⚔️ 动作",
        catPlatform: "🏃 平台跳跃",
        catCasual: "🎲 休闲",
        playOnline: "▶ 在线畅玩",
        githubCode: "</> GitHub 源码",
        previewInPortfolio: "👁️ 站内试玩",
        liveDemoBadge: "● 在线演示",
        editTooltip: "编辑游戏",
        deleteTooltip: "删除游戏",
        noGamesFound: "未找到相关游戏",
        noGamesFoundDesc: "没有匹配您搜索条件的游戏。",
        resetFilters: "重置筛选",
        faqTitle: "❓ 常见问题",
        faqSubtitle: "关于本游戏作品集的完整指南",
        faqQ1: "每个游戏的双 GitHub 链接如何运作？",
        faqA1: "包含两个关键链接：1. “在线畅玩”通过 GitHub Pages 运行网页游戏；2. “GitHub 源码”直达开源代码仓库。",
        faqQ2: "如何添加新游戏？",
        faqA2: "点击右上角登录/注册，输入创作者密钥即可获得发布权限，随后点击“+ 新增游戏”。",
        faqQ3: "添加的游戏会永久保存吗？",
        faqA3: "是的！本地保存在 LocalStorage 中，通过“导出到 GitHub”按钮可将配置代码固化至 script.js 中供全球访客浏览。",
        faqQ4: "可以直接在当前页面内试玩吗？",
        faqA4: "当然！点击卡片上的“站内试玩”即可在弹出窗口中即时体验。",
        footerDesc: "基于纯原生 HTML5 Canvas、CSS3 和 JavaScript 开发的现代网页游戏集。",
        footerNav: "快速导航",
        footerAllGames: "所有游戏",
        footerAuthorLogin: "开发者入口",
        footerDev: "开发者",
        footerGithub: "GitHub 主页",
        footerCopyright: "© 2026 Dev Arcade. 专为展示互动网页游戏与开源代码而构建。",
        authTitleLogin: "用户登录",
        authTitleRegister: "注册新账号",
        tabLogin: "登录",
        tabRegister: "注册",
        usernameOrEmail: "用户名或邮箱",
        usernamePlaceholder: "请输入用户名或邮箱...",
        password: "密码",
        passwordPlaceholder: "请输入密码...",
        cancelBtn: "取消",
        loginBtn: "登录",
        regUsername: "用户名 *",
        regEmail: "电子邮箱 *",
        regPassword: "密码 *",
        regConfirmPassword: "确认密码 *",
        regRole: "账号类型",
        rolePlayer: "🕹️ 玩家（访客权限）",
        roleCreator: "🎮 创作者（站长权限）",
        creatorKey: "创作者专属安全密钥 *",
        creatorKeyHint: "仅站长持有此密钥以进行游戏增删改。",
        createAccountBtn: "创建账号",
        addGameTitle: "添加新游戏",
        editGameTitle: "编辑游戏",
        gameTitle: "游戏名称 *",
        gameCategory: "所属分类 *",
        gameTech: "使用技术 / 语言",
        gameDescription: "游戏简介 *",
        gamePlayLink: "链接 1：在线游玩地址 (GitHub Pages) *",
        gamePlayHint: "游戏在浏览器中运行的网址。",
        gameRepoLink: "链接 2：源代码仓库 (GitHub Repo) *",
        gameRepoHint: "存放源代码的 GitHub 项目主页。",
        gameThemeStyle: "卡片渐变主题",
        gameImageCover: "封面图片地址 (如 snake-cover.jpg)",
        bannerPreviewLabel: "封面实时预览：",
        saveGameBtn: "💾 保存游戏",
        playerFullscreen: "↗️ 全屏游玩",
        playerRepo: "</> 查看源码",
        exportTitle: "导出游戏配置",
        exportInfo: "复制此代码并替换 script.js 中的 defaultGames，让全球访客直接看到新游戏！",
        copyCode: "📋 复制代码",
        copiedCode: "✅ 复制成功！",
        downloadJson: "下载 JSON 备份"
    },
    pt: {
        brandSubtitle: "Portfólio de Jogos",
        navGames: "Jogos",
        navFaq: "Perguntas",
        navGithub: "GitHub",
        navNewGame: "+ Novo Jogo",
        navLogout: "Sair",
        navAuth: "🔐 Entrar / Cadastrar",
        heroBadge: "Portfólio de Jogos & Código Aberto",
        heroTitle1: "Meus jogos criados do zero,",
        heroTitle2: "jogáveis online no seu navegador",
        heroSubtitle: "Explore minha coleção interativa: teste cada jogo diretamente pelo GitHub Pages ou inspecione o código-fonte no GitHub.",
        heroExplore: "🎮 Explorar Jogos",
        heroAdd: "➕ Adicionar Jogo",
        heroExport: "📦 Exportar para GitHub",
        statGames: "Jogos no Portfólio",
        statPlayable: "Jogáveis Online",
        statCode: "Código Aberto Pronto",
        showcaseTitle: "🎮 Vitrine de Jogos",
        showcaseSubtitle: "Escolha um jogo: clique em '▶ Jogar Online' ou em '</> Código GitHub'.",
        searchPlaceholder: "Pesquise por título, tecnologia ou palavra-chave...",
        sortNewest: "Mais recentes",
        sortAlpha: "Título (A - Z)",
        sortCategory: "Categoria",
        catAll: "Todos",
        catArcade: "🕹️ Arcade",
        catPuzzle: "🧩 Puzzle",
        catAction: "⚔️ Ação",
        catPlatform: "🏃 Plataforma",
        catCasual: "🎲 Casual",
        playOnline: "▶ Jogar Online",
        githubCode: "</> Código GitHub",
        previewInPortfolio: "👁️ Jogar no Portfólio",
        liveDemoBadge: "● Demo ao Vivo",
        editTooltip: "Editar Jogo",
        deleteTooltip: "Excluir Jogo",
        noGamesFound: "Nenhum jogo encontrado",
        noGamesFoundDesc: "Nenhum jogo corresponde à sua pesquisa.",
        resetFilters: "Redefinir Filtros",
        faqTitle: "❓ Perguntas Frequentes",
        faqSubtitle: "Tudo o que você precisa saber sobre este portfólio",
        faqQ1: "Como funcionam os dois links do GitHub?",
        faqA1: "Cada jogo tem dois links: 1. 'Jogar Online' via GitHub Pages. 2. 'Código GitHub' com os arquivos no repositório.",
        faqQ2: "Como adicionar um novo jogo?",
        faqA2: "Faça login como Criador com sua chave secreta e clique em '+ Novo Jogo'.",
        faqQ3: "Os jogos adicionados ficam salvos?",
        faqA3: "Sim! Ficam salvos no LocalStorage e você pode exportá-los para o script.js para que fiquem públicos.",
        faqQ4: "Posso jogar direto nesta página?",
        faqA4: "Com certeza! Clique em 'Jogar no Portfólio' para abrir uma janela interativa.",
        footerDesc: "Coleção de jogos web desenvolvidos com tecnologias modernas.",
        footerNav: "Navegação",
        footerAllGames: "Todos os Jogos",
        footerAuthorLogin: "Acesso Criador",
        footerDev: "Desenvolvedor",
        footerGithub: "Perfil GitHub",
        footerCopyright: "© 2026 Dev Arcade. Criado para compartilhar jogos web e código aberto.",
        authTitleLogin: "Login de Usuário",
        authTitleRegister: "Criar uma Conta",
        tabLogin: "Entrar",
        tabRegister: "Cadastrar",
        usernameOrEmail: "Usuário ou E-mail",
        usernamePlaceholder: "Digite usuário ou e-mail...",
        password: "Senha",
        passwordPlaceholder: "Digite sua senha...",
        cancelBtn: "Cancelar",
        loginBtn: "Entrar",
        regUsername: "Nome de Usuário *",
        regEmail: "Endereço de E-mail *",
        regPassword: "Senha *",
        regConfirmPassword: "Confirmar Senha *",
        regRole: "Função da Conta",
        rolePlayer: "🕹️ Jogador (Perfil visitante)",
        roleCreator: "🎮 Criador de Jogos (Proprietário)",
        creatorKey: "Chave Secreta do Criador *",
        creatorKeyHint: "Apenas o dono possui esta chave para gerenciar jogos.",
        createAccountBtn: "Criar Conta",
        addGameTitle: "Adicionar Novo Jogo",
        editGameTitle: "Editar Jogo",
        gameTitle: "Título do Jogo *",
        gameCategory: "Categoria *",
        gameTech: "Tecnologias / Linguagens",
        gameDescription: "Descrição do Jogo *",
        gamePlayLink: "Link 1: Jogar Online (GitHub Pages) *",
        gamePlayHint: "Endereço para rodar o jogo online no navegador.",
        gameRepoLink: "Link 2: Código Fonte (Repositório GitHub) *",
        gameRepoHint: "Link para o repositório com o código.",
        gameThemeStyle: "Tema de Gradiente",
        gameImageCover: "Imagem de Capa (URL ou arquivo)",
        bannerPreviewLabel: "Pré-visualização da Capa:",
        saveGameBtn: "💾 Salvar Jogo",
        playerFullscreen: "↗️ Tela Cheia",
        playerRepo: "</> Ver Código GitHub",
        exportTitle: "Exportar Configuração",
        exportInfo: "Copie este código e cole em defaultGames em script.js.",
        copyCode: "📋 Copiar Código",
        copiedCode: "✅ Copiado!",
        downloadJson: "Baixar JSON"
    },
    hi: {
        brandSubtitle: "गेम पोर्टफोलियो",
        navGames: "गेम्स",
        navFaq: "सामान्य प्रश्न",
        navGithub: "GitHub",
        navNewGame: "+ नया गेम",
        navLogout: "लॉगआउट",
        navAuth: "🔐 लॉगिन / रजिस्टर",
        heroBadge: "वेब गेम पोर्टफोलियो और ओपन सोर्स कोड",
        heroTitle1: "शुरुआत से बनाए गए मेरे गेम्स,",
        heroTitle2: "सीधे ब्राउज़र में ऑनलाइन खेलने योग्य",
        heroSubtitle: "मेरे इंटरैक्टिव संग्रह का अन्वेषण करें: GitHub Pages के माध्यम से प्रत्येक गेम खेलें या GitHub पर सोर्स कोड देखें।",
        heroExplore: "🎮 गेम्स देखें",
        heroAdd: "➕ नया गेम जोड़ें",
        heroExport: "📦 GitHub के लिए निर्यात",
        statGames: "पोर्टफोलियो में गेम्स",
        statPlayable: "ऑनलाइन खेलने योग्य",
        statCode: "सोर्स कोड उपलब्ध",
        showcaseTitle: "🎮 गेम्स शोकेस",
        showcaseSubtitle: "एक गेम चुनें: '▶ ऑनलाइन खेलें' या '</> GitHub कोड' पर क्लिक करें।",
        searchPlaceholder: "शीर्षक, तकनीक या कीवर्ड से खोजें...",
        sortNewest: "नवीनतम",
        sortAlpha: "नाम (A - Z)",
        sortCategory: "श्रेणी",
        catAll: "सभी",
        catArcade: "🕹️ आर्केड",
        catPuzzle: "🧩 पहेली",
        catAction: "⚔️ एक्शन",
        catPlatform: "🏃 प्लेटफ़ॉर्म",
        catCasual: "🎲 कैज़ुअल",
        playOnline: "▶ ऑनलाइन खेलें",
        githubCode: "</> GitHub कोड",
        previewInPortfolio: "👁️ यहीं खेलें",
        liveDemoBadge: "● लाइव डेमो",
        editTooltip: "गेम संपादित करें",
        deleteTooltip: "गेम हटाएं",
        noGamesFound: "कोई गेम नहीं मिला",
        noGamesFoundDesc: "आपकी खोज से मेल खाता कोई गेम उपलब्ध नहीं है।",
        resetFilters: "फ़िल्टर रीसेट करें",
        faqTitle: "❓ अक्सर पूछे जाने वाले प्रश्न",
        faqSubtitle: "इस गेम पोर्टफोलियो के बारे में सब कुछ",
        faqQ1: "दो GitHub लिंक कैसे काम करते हैं?",
        faqA1: "प्रत्येक गेम में दो लिंक हैं: 1. 'ऑनलाइन खेलें' GitHub Pages पर गेम खोलता है। 2. 'GitHub कोड' सोर्स कोड दिखाता है।",
        faqQ2: "नया गेम कैसे जोड़ें?",
        faqA2: "क्रिएटर के रूप में गुप्त कुंजी से लॉगिन करें और '+ नया गेम' पर क्लिक करें।",
        faqQ3: "क्या जोड़े गए गेम्स हमेशा सुरक्षित रहते हैं?",
        faqA3: "हाँ! वे LocalStorage में सुरक्षित रहते हैं और script.js में कॉपी करके सार्वजनिक किए जा सकते हैं।",
        faqQ4: "क्या मैं सीधे इसी साइट पर खेल सकता हूँ?",
        faqA4: "बिल्कुल! बिना पेज छोड़े खेलने के लिए 'यहीं खेलें' पर क्लिक करें।",
        footerDesc: "आधुनिक वेब तकनीकों से निर्मित वेब गेम्स और ओपन सोर्स प्रयोगों का संग्रह।",
        footerNav: "नेविगेशन",
        footerAllGames: "सभी गेम्स",
        footerAuthorLogin: "क्रिएटर लॉगिन",
        footerDev: "डेवलपर",
        footerGithub: "GitHub प्रोफाइल",
        footerCopyright: "© 2026 Dev Arcade. वेब गेम्स और ओपन सोर्स कोड साझा करने के लिए निर्मित।",
        authTitleLogin: "उपयोगकर्ता लॉगिन",
        authTitleRegister: "नया खाता बनाएं",
        tabLogin: "लॉगिन",
        tabRegister: "रजिस्टर",
        usernameOrEmail: "उपयोगकर्ता नाम या ईमेल",
        usernamePlaceholder: "उपयोगकर्ता नाम या ईमेल दर्ज करें...",
        password: "पासवर्ड",
        passwordPlaceholder: "पासवर्ड दर्ज करें...",
        cancelBtn: "रद्द करें",
        loginBtn: "लॉगिन",
        regUsername: "उपयोगकर्ता नाम *",
        regEmail: "ईमेल पता *",
        regPassword: "पासवर्ड *",
        regConfirmPassword: "पासवर्ड की पुष्टि करें *",
        regRole: "खाता भूमिका",
        rolePlayer: "🕹️ खिलाड़ी (आगंतुक)",
        roleCreator: "🎮 गेम क्रिएटर (मालिक)",
        creatorKey: "क्रिएटर गुप्त कुंजी *",
        creatorKeyHint: "गेम्स प्रबंधित करने की कुंजी केवल मालिक के पास है।",
        createAccountBtn: "खाता बनाएं",
        addGameTitle: "नया गेम जोड़ें",
        editGameTitle: "गेम संपादित करें",
        gameTitle: "गेम का शीर्षक *",
        gameCategory: "श्रेणी *",
        gameTech: "प्रौद्योगिकियां / भाषाएं",
        gameDescription: "गेम विवरण *",
        gamePlayLink: "लिंक 1: खेलने के लिए (GitHub Pages) *",
        gamePlayHint: "ब्राउज़र में ऑनलाइन गेम चलाने का पता।",
        gameRepoLink: "लिंक 2: सोर्स कोड (GitHub रिपॉजिटरी) *",
        gameRepoHint: "कोड फाइलों का GitHub रिपॉजिटरी लिंक।",
        gameThemeStyle: "ग्रेडिएंट थीम",
        gameImageCover: "कवर इमेज (URL या फाइल)",
        bannerPreviewLabel: "लाइव बैनर पूर्वावलोकन:",
        saveGameBtn: "💾 गेम सहेजें",
        playerFullscreen: "↗️ फुलस्क्रीन खेलें",
        playerRepo: "</> कोड देखें",
        exportTitle: "कॉन्फ़िगरेशन निर्यात करें",
        exportInfo: "इस कोड को script.js में defaultGames में बदलें।",
        copyCode: "📋 कोड कॉपी करें",
        copiedCode: "✅ कॉपी हो गया!",
        downloadJson: "JSON डाउनलोड करें"
    },
    ru: {
        brandSubtitle: "Портфолио Игр",
        navGames: "Игры",
        navFaq: "ЧаВо",
        navGithub: "GitHub",
        navNewGame: "+ Новая игра",
        navLogout: "Выйти",
        navAuth: "🔐 Войти / Регистрация",
        heroBadge: "Портфолио Веб-Игр и Открытый Исходный Код",
        heroTitle1: "Мои игры, созданные с нуля,",
        heroTitle2: "доступные прямо в браузере",
        heroSubtitle: "Исследуйте мою коллекцию: запускайте каждую игру онлайн через GitHub Pages или изучайте исходный код на GitHub.",
        heroExplore: "🎮 Смотреть Игры",
        heroAdd: "➕ Добавить Игру",
        heroExport: "📦 Экспорт для GitHub",
        statGames: "Игр в Портфолио",
        statPlayable: "Онлайн в Браузере",
        statCode: "Открытый Код",
        showcaseTitle: "🎮 Витрина Игр",
        showcaseSubtitle: "Выберите игру: нажмите '▶ Играть Онлайн' или '</> Код GitHub'.",
        searchPlaceholder: "Поиск по названию, технологии или слову...",
        sortNewest: "Сначала новые",
        sortAlpha: "По названию (А - Я)",
        sortCategory: "По категории",
        catAll: "Все",
        catArcade: "🕹️ Аркады",
        catPuzzle: "🧩 Головоломки",
        catAction: "⚔️ Экшен",
        catPlatform: "🏃 Платформеры",
        catCasual: "🎲 Казуальные",
        playOnline: "▶ Играть Онлайн",
        githubCode: "</> Код GitHub",
        previewInPortfolio: "👁️ Играть на сайте",
        liveDemoBadge: "● Демо онлайн",
        editTooltip: "Редактировать",
        deleteTooltip: "Удалить",
        noGamesFound: "Игры не найдены",
        noGamesFoundDesc: "По вашему запросу ничего не найдено.",
        resetFilters: "Сбросить фильтры",
        faqTitle: "❓ Часто Задаваемые Вопросы",
        faqSubtitle: "Всё, что нужно знать о данном веб-портфолио",
        faqQ1: "Как работают две ссылки GitHub?",
        faqA1: "Каждая игра содержит: 1. 'Играть Онлайн' на GitHub Pages. 2. 'Код GitHub' с файлами исходного кода.",
        faqQ2: "Как добавить новую игру?",
        faqA2: "Войдите под ролью Создателя с секретным ключом и нажмите '+ Новая игра'.",
        faqQ3: "Сохраняются ли игры навсегда?",
        faqA3: "Да! Они сохраняются в LocalStorage, а через 'Экспорт для GitHub' их можно скопировать в script.js.",
        faqQ4: "Можно ли играть прямо внутри сайта?",
        faqA4: "Конечно! Нажмите 'Играть на сайте' для запуска встроенного окна.",
        footerDesc: "Коллекция веб-игр, созданных на чистых современных технологиях (HTML5 Canvas, CSS3, JavaScript).",
        footerNav: "Навигация",
        footerAllGames: "Все Игры",
        footerAuthorLogin: "Вход Автора",
        footerDev: "Разработчик",
        footerGithub: "Профиль GitHub",
        footerCopyright: "© 2026 Dev Arcade. Создано для демонстрации веб-игр и открытого кода.",
        authTitleLogin: "Вход в систему",
        authTitleRegister: "Регистрация аккаунта",
        tabLogin: "Вход",
        tabRegister: "Регистрация",
        usernameOrEmail: "Имя пользователя или Email",
        usernamePlaceholder: "Введите имя или email...",
        password: "Пароль",
        passwordPlaceholder: "Введите пароль...",
        cancelBtn: "Отмена",
        loginBtn: "Войти",
        regUsername: "Имя пользователя *",
        regEmail: "Электронная почта *",
        regPassword: "Пароль *",
        regConfirmPassword: "Подтверждение пароля *",
        regRole: "Роль аккаунта",
        rolePlayer: "🕹️ Игрок (Профиль посетителя)",
        roleCreator: "🎮 Создатель Игр (Владелец)",
        creatorKey: "Секретный ключ Создателя *",
        creatorKeyHint: "Ключ есть только у владельца для управления играми.",
        createAccountBtn: "Создать Аккаунт",
        addGameTitle: "Добавить Новую Игру",
        editGameTitle: "Редактировать Игру",
        gameTitle: "Название Игры *",
        gameCategory: "Категория *",
        gameTech: "Технологии / Стек",
        gameDescription: "Описание Игры *",
        gamePlayLink: "Ссылка 1: Для игры (GitHub Pages) *",
        gamePlayHint: "Адрес, где игра доступна для запуска онлайн.",
        gameRepoLink: "Ссылка 2: Исходный код (GitHub Репозиторий) *",
        gameRepoHint: "Ссылка на репозиторий с исходным кодом.",
        gameThemeStyle: "Градиентная тема",
        gameImageCover: "Обложка (URL или файл)",
        bannerPreviewLabel: "Предпросмотр баннера:",
        saveGameBtn: "💾 Сохранить Игру",
        playerFullscreen: "↗️ Во весь экран",
        playerRepo: "</> Смотреть на GitHub",
        exportTitle: "Экспорт Конфигурации",
        exportInfo: "Скопируйте этот массив в defaultGames в script.js.",
        copyCode: "📋 Скопировать Код",
        copiedCode: "✅ Скопировано!",
        downloadJson: "Скачать JSON"
    },
    ja: {
        brandSubtitle: "ゲームポートフォリオ",
        navGames: "ゲーム一覧",
        navFaq: "よくある質問",
        navGithub: "GitHub",
        navNewGame: "+ 新規ゲーム追加",
        navLogout: "ログアウト",
        navAuth: "🔐 ログイン / 新規登録",
        heroBadge: "ウェブゲーム作品集 ＆ オープンソースコード",
        heroTitle1: "ゼロから自作したオリジナルゲームを、",
        heroTitle2: "ブラウザ上で今すぐオンラインプレイ",
        heroSubtitle: "GitHub Pages によるライブデモ体験、または GitHub 上で公開されているオープンソースコードをご覧ください。",
        heroExplore: "🎮 ゲームを探す",
        heroAdd: "➕ ゲームを追加",
        heroExport: "📦 GitHub用にエクスポート",
        statGames: "収録ゲーム数",
        statPlayable: "100% オンライン動作",
        statCode: "ソースコード公開中",
        showcaseTitle: "🎮 ゲームショーケース",
        showcaseSubtitle: "ゲームを選択してください: 「▶ 今すぐプレイ」または「</> GitHub コード」をクリック。",
        searchPlaceholder: "タイトル、技術スタック、キーワードで検索...",
        sortNewest: "新着順",
        sortAlpha: "タイトル順 (A - Z)",
        sortCategory: "カテゴリ別",
        catAll: "すべて",
        catArcade: "🕹️ アーケード",
        catPuzzle: "🧩 パズル",
        catAction: "⚔️ アクション",
        catPlatform: "🏃 プラットフォーマー",
        catCasual: "🎲 カジュアル",
        playOnline: "▶ 今すぐプレイ",
        githubCode: "</> GitHub コード",
        previewInPortfolio: "👁️ サイト内でプレイ",
        liveDemoBadge: "● ライブデモ",
        editTooltip: "ゲームを編集",
        deleteTooltip: "ゲームを削除",
        noGamesFound: "ゲームが見つかりませんでした",
        noGamesFoundDesc: "検索条件に一致するゲームがありません。",
        resetFilters: "フィルターをリセット",
        faqTitle: "❓ よくある質問 (FAQ)",
        faqSubtitle: "このゲームポートフォリオに関するQ&A",
        faqQ1: "2つのGitHubリンクの違いは何ですか？",
        faqA1: "各ゲームには2つのリンクがあります: 1. 「今すぐプレイ」は GitHub Pages による動作デモ。2. 「GitHub コード」はソースコードのリポジトリです。",
        faqQ2: "新しいゲームを追加するには？",
        faqA2: "作成者として秘密鍵でログインし、「+ 新規ゲーム追加」ボタンを押します。",
        faqQ3: "追加したゲームは保存されますか？",
        faqA3: "はい！LocalStorage に保存され、「GitHub用にエクスポート」を使って script.js に書き込めば常時公開されます。",
        faqQ4: "このサイトから離れずにプレイできますか？",
        faqA4: "はい！「サイト内でプレイ」をクリックすると、ページ内で直接ゲームが起動します。",
        footerDesc: "HTML5 Canvas、CSS3、Vanilla JavaScript で作られたインタラクティブなゲーム作品集。",
        footerNav: "ナビゲーション",
        footerAllGames: "すべてのゲーム",
        footerAuthorLogin: "作成者ログイン",
        footerDev: "開発者",
        footerGithub: "GitHub プロフィール",
        footerCopyright: "© 2026 Dev Arcade. ウェブゲームとオープンソースコードの共有のために制作。",
        authTitleLogin: "ユーザーログイン",
        authTitleRegister: "アカウント新規登録",
        tabLogin: "ログイン",
        tabRegister: "新規登録",
        usernameOrEmail: "ユーザー名またはメールアドレス",
        usernamePlaceholder: "ユーザー名またはメールを入力...",
        password: "パスワード",
        passwordPlaceholder: "パスワードを入力...",
        cancelBtn: "キャンセル",
        loginBtn: "ログイン",
        regUsername: "ユーザー名 *",
        regEmail: "メールアドレス *",
        regPassword: "パスワード *",
        regConfirmPassword: "パスワード再入力 *",
        regRole: "アカウント区分",
        rolePlayer: "🕹️ プレイヤー（閲覧用）",
        roleCreator: "🎮 ゲームクリエイター（管理者権限）",
        creatorKey: "クリエイター秘密鍵 *",
        creatorKeyHint: "ゲーム管理権限を有効にするための秘密鍵です。",
        createAccountBtn: "アカウントを作成",
        addGameTitle: "新しいゲームを追加",
        editGameTitle: "ゲームを編集",
        gameTitle: "ゲームタイトル *",
        gameCategory: "カテゴリ *",
        gameTech: "使用技術 / 言語",
        gameDescription: "ゲームの説明 *",
        gamePlayLink: "リンク 1: プレイ用 (GitHub Pages) *",
        gamePlayHint: "ブラウザで直接遊べる公開URL。",
        gameRepoLink: "リンク 2: ソースコード (GitHub リポジトリ) *",
        gameRepoHint: "コードが保管されているリポジトリURL。",
        gameThemeStyle: "カード背景テーマ",
        gameImageCover: "カバー画像URLまたはファイル名 (例: snake-cover.jpg)",
        bannerPreviewLabel: "バナープレビュー:",
        saveGameBtn: "💾 ゲームを保存",
        playerFullscreen: "↗️ フルスクリーンで起動",
        playerRepo: "</> GitHub でコードを見る",
        exportTitle: "設定をエクスポート",
        exportInfo: "このコードをコピーして script.js の defaultGames に貼り付けてください。",
        copyCode: "📋 コードをコピー",
        copiedCode: "✅ コピー完了！",
        downloadJson: "JSON ダウンロード"
    }
};

// ============================================================================
// GLOBAL APPLICATION STATE
// ============================================================================
let games = [];
let users = [];
let currentUser = null;
let currentCategory = "Tutti";
let searchQuery = "";
let currentSort = "newest";
// DEFAULT LANGUAGE: ENGLISH (en)
let currentLang = localStorage.getItem(STORAGE_KEY_LANG) || "en";

// ============================================================================
// DOM ELEMENTS
// ============================================================================
const langSelect = document.getElementById("lang-select");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const openAuthBtn = document.getElementById("open-auth-btn");
const authActions = document.getElementById("auth-actions");
const userProfileMenu = document.getElementById("user-profile-menu");
const userAvatarInitial = document.getElementById("user-avatar-initial");
const userDisplayName = document.getElementById("user-display-name");
const userRoleBadge = document.getElementById("user-role-badge");
const logoutBtn = document.getElementById("logout-btn");
const navAddGameBtn = document.getElementById("nav-add-game-btn");
const heroAddBtn = document.getElementById("hero-add-btn");
const footerLoginLink = document.getElementById("footer-login-link");

// Stats & Games Grid
const statTotalGames = document.getElementById("stat-total-games");
const gamesGrid = document.getElementById("games-grid");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const categoryButtons = document.querySelectorAll("#category-filters .pill");

// Auth Modal
const authModal = document.getElementById("auth-modal");
const authModalTitle = document.getElementById("auth-modal-title");
const closeAuthModal = document.getElementById("close-auth-modal");
const cancelAuthModal = document.getElementById("cancel-auth-modal");
const tabLoginBtn = document.getElementById("tab-login-btn");
const tabRegisterBtn = document.getElementById("tab-register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const cancelRegModal = document.getElementById("cancel-reg-modal");
const regRoleSelect = document.getElementById("reg-role");
const creatorKeyGroup = document.getElementById("creator-key-group");
const regCreatorKeyInput = document.getElementById("reg-creator-key");

// Game Modal (Add / Edit)
const gameModal = document.getElementById("game-modal");
const modalTitle = document.getElementById("modal-title");
const closeGameModal = document.getElementById("close-game-modal");
const cancelGameModal = document.getElementById("cancel-game-modal");
const gameForm = document.getElementById("game-form");
const gameIdInput = document.getElementById("game-id");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const techInput = document.getElementById("tech");
const descriptionInput = document.getElementById("description");
const playUrlInput = document.getElementById("playUrl");
const repoUrlInput = document.getElementById("repoUrl");
const coverStyleInput = document.getElementById("coverStyle");
const imageUrlInput = document.getElementById("imageUrl");
const bannerLivePreview = document.getElementById("banner-live-preview");
const previewBadgeCat = document.getElementById("preview-badge-cat");
const previewBadgeTech = document.getElementById("preview-badge-tech");

// Player Modal (Interactive Iframe)
const playerModal = document.getElementById("player-modal");
const closePlayerModal = document.getElementById("close-player-modal");
const playerGameTitle = document.getElementById("player-game-title");
const gameIframe = document.getElementById("game-iframe");
const playerGameTech = document.getElementById("player-game-tech");
const playerGameCat = document.getElementById("player-game-cat");
const playerExternalPlayBtn = document.getElementById("player-external-play-btn");
const playerRepoBtn = document.getElementById("player-repo-btn");

// Export Modal
const exportModal = document.getElementById("export-modal");
const openExportModal = document.getElementById("open-export-modal");
const closeExportModal = document.getElementById("close-export-modal");
const exportCodeTextarea = document.getElementById("export-code");
const copyCodeBtn = document.getElementById("copy-code-btn");
const downloadJsonBtn = document.getElementById("download-json-btn");

// Toast Container
const toastContainer = document.getElementById("toast-container");

// ============================================================================
// INITIALIZATION
// ============================================================================
function initApp() {
    // Initialize Theme
    initTheme();

    // Initialize Auth & Users
    initAuth();

    // Load Games Data
    loadGames();

    // Setup Event Listeners
    setupEventListeners();

    // Apply Default or Saved Language
    setLanguage(currentLang);

    // Initial Auth UI update
    updateUIForAuth();
}

// ============================================================================
// LANGUAGE ENGINE (i18n)
// ============================================================================
function t(key) {
    const langObj = translations[currentLang] || translations["en"];
    return langObj[key] || translations["en"][key] || key;
}

function setLanguage(lang) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY_LANG, lang);

    // HTML lang and direction (RTL for Arabic)
    document.documentElement.setAttribute("lang", lang);
    if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
    } else {
        document.documentElement.setAttribute("dir", "ltr");
    }

    if (langSelect) {
        langSelect.value = lang;
    }

    // Translate all static elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (key) {
            el.textContent = t(key);
        }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (key) {
            el.setAttribute("placeholder", t(key));
        }
    });

    // Re-render games so dynamic card text matches selected language
    renderGames();
}

// ============================================================================
// THEME (DARK / LIGHT)
// ============================================================================
function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || "dark";
    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            setTheme(newTheme);
            showToast(`${newTheme === "dark" ? "Dark" : "Light"} theme enabled`, "info");
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    if (themeIcon) {
        themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
}

// ============================================================================
// AUTHENTICATION & SESSIONS
// ============================================================================
function initAuth() {
    try {
        const storedUsers = localStorage.getItem(STORAGE_KEY_USERS);
        if (storedUsers) {
            users = JSON.parse(storedUsers);
        } else {
            users = [defaultAdminUser];
            localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
        }

        const storedSession = localStorage.getItem(STORAGE_KEY_SESSION);
        if (storedSession) {
            currentUser = JSON.parse(storedSession);
        }
    } catch (e) {
        console.error("Auth initialization error:", e);
        users = [defaultAdminUser];
        currentUser = null;
    }
}

function isCreator() {
    return currentUser && (currentUser.role === "creator" || currentUser.role === "admin");
}

function updateUIForAuth() {
    if (currentUser) {
        if (authActions) authActions.classList.add("hidden");
        if (userProfileMenu) userProfileMenu.classList.remove("hidden");

        if (userDisplayName) userDisplayName.textContent = currentUser.name || currentUser.username;
        if (userAvatarInitial) userAvatarInitial.textContent = (currentUser.username || "U")[0].toUpperCase();

        if (userRoleBadge) {
            userRoleBadge.textContent = isCreator() ? t("roleCreator").split(" ")[1] : t("rolePlayer").split(" ")[1];
            userRoleBadge.style.color = isCreator() ? "var(--accent-emerald)" : "var(--accent-cyan)";
        }

        if (navAddGameBtn) {
            if (isCreator()) {
                navAddGameBtn.classList.remove("hidden");
            } else {
                navAddGameBtn.classList.add("hidden");
            }
        }
    } else {
        if (authActions) authActions.classList.remove("hidden");
        if (userProfileMenu) userProfileMenu.classList.add("hidden");
    }

    renderGames();
}

function openAuthDialog(defaultTab = "login") {
    authModal.classList.remove("hidden");
    switchAuthTab(defaultTab);
}

function closeAuthDialog() {
    authModal.classList.add("hidden");
    loginForm.reset();
    registerForm.reset();
}

function switchAuthTab(tab) {
    if (tab === "login") {
        tabLoginBtn.classList.add("active");
        tabRegisterBtn.classList.remove("active");
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        authModalTitle.textContent = t("authTitleLogin");
    } else {
        tabLoginBtn.classList.remove("active");
        tabRegisterBtn.classList.add("active");
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        authModalTitle.textContent = t("authTitleRegister");
    }
}

// Login Submit
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const identifier = document.getElementById("login-username").value.trim().toLowerCase();
    const pass = document.getElementById("login-password").value;

    const user = users.find(u =>
        (u.username.toLowerCase() === identifier || u.email.toLowerCase() === identifier) &&
        u.password === pass
    );

    if (user) {
        currentUser = user;
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
        closeAuthDialog();
        updateUIForAuth();
        showToast(`${user.name || user.username} logged in successfully!`, "success");
    } else {
        showToast("Invalid credentials! Please verify username and password.", "error");
    }
});

// Register Submit
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim().toLowerCase();
    const pass = document.getElementById("reg-password").value;
    const confirmPass = document.getElementById("reg-password-confirm").value;
    const role = regRoleSelect.value;

    if (pass !== confirmPass) {
        showToast("Passwords do not match!", "error");
        return;
    }

    if (pass.length < 4) {
        showToast("Password must be at least 4 characters long.", "error");
        return;
    }

    const usernameExists = users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (usernameExists) {
        showToast("Username already taken! Please choose another.", "error");
        return;
    }

    const emailExists = users.some(u => u.email.toLowerCase() === email);
    if (emailExists) {
        showToast("Email already registered! Please login.", "error");
        return;
    }

    // Protect Creator role with secret key
    if (role === "creator") {
        const creatorKey = regCreatorKeyInput ? regCreatorKeyInput.value.trim() : "";
        if (creatorKey !== CREATOR_SECRET_KEY) {
            showToast("Invalid secret creator key! You cannot register as Creator.", "error");
            return;
        }
    }

    const newUser = {
        username: username,
        email: email,
        password: pass,
        name: username,
        role: role
    };

    users.push(newUser);
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));

    closeAuthDialog();
    updateUIForAuth();
    showToast(`Account "${username}" created successfully!`, "success");
});

// Logout
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        if (confirm("Do you really want to log out?")) {
            currentUser = null;
            localStorage.removeItem(STORAGE_KEY_SESSION);
            updateUIForAuth();
            showToast("Logged out successfully.", "info");
        }
    });
}

// ============================================================================
// GAMES MANAGEMENT & LOCALSTORAGE
// ============================================================================
function loadGames() {
    try {
        // Carica i giochi definiti in defaultGames così le modifiche in script.js sono sempre visibili
        games = defaultGames.map(g => ({ ...g }));
        saveGames();
    } catch (e) {
        console.error("Error loading games:", e);
        games = [...defaultGames];
    }
}

function saveGames() {
    localStorage.setItem(STORAGE_KEY_GAMES, JSON.stringify(games));
    updateStats();
}

function updateStats() {
    if (statTotalGames) {
        statTotalGames.textContent = games.length;
    }
}

// ============================================================================
// RENDER GAMES GRID
// ============================================================================
function renderGames() {
    if (!gamesGrid) return;

    let filtered = games.filter(game => {
        const matchesCategory = currentCategory === "Tutti" ||
            game.category.toLowerCase() === currentCategory.toLowerCase();
        const query = searchQuery.toLowerCase();
        const matchesSearch =
            (game.title || "").toLowerCase().includes(query) ||
            (game.description || "").toLowerCase().includes(query) ||
            (game.tech || "").toLowerCase().includes(query) ||
            (game.category || "").toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    // Sorting
    if (currentSort === "alpha") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === "category") {
        filtered.sort((a, b) => a.category.localeCompare(b.category));
    } else {
        filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
    }

    updateStats();

    if (filtered.length === 0) {
        gamesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
                <div style="font-size: 2.8rem; margin-bottom: 12px;">🔍</div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 6px;">${t("noGamesFound")}</h3>
                <p style="color: var(--text-secondary); max-width: 440px; margin: 0 auto 18px; font-size: 0.94rem;">
                    ${t("noGamesFoundDesc")}
                </p>
                <button class="btn-outline" onclick="resetFilters()">${t("resetFilters")}</button>
            </div>
        `;
        return;
    }

    gamesGrid.innerHTML = filtered.map(game => {
        const bannerStyleClass = game.coverStyle || "grad-purple";
        
        // Exact vertical positioning: center 52% brings the snake body right into center view!
        const bgPos = game.imagePosition || "center 52%";
        const customBgStyle = game.imageUrl
            ? `style="background-image: linear-gradient(180deg, rgba(15,23,42,0.12) 0%, rgba(15,23,42,0.25) 45%, rgba(15,23,42,0.85) 100%), url('${escapeHtml(game.imageUrl)}'); background-position: ${bgPos}; background-size: cover;"`
            : "";

        const canEdit = isCreator();
        const adminActionsHtml = canEdit ? `
            <div class="card-admin-actions">
                <button class="icon-btn" title="${t("editTooltip")}" onclick="openEditGameModal(${game.id})">✏️</button>
                <button class="icon-btn delete-btn" title="${t("deleteTooltip")}" onclick="deleteGameConfirm(${game.id})">🗑️</button>
            </div>
        ` : "";

        return `
            <article class="game-card" id="game-card-${game.id}">
                <!-- Card Banner with Focused Artwork -->
                <div class="card-banner ${bannerStyleClass}" ${customBgStyle}>
                    <div class="banner-top">
                        <span class="banner-category-badge">${escapeHtml(game.category)}</span>
                        ${adminActionsHtml}
                    </div>
                    <div class="banner-bottom">
                        <span class="tech-tag">${escapeHtml(game.tech)}</span>
                        <span class="status-tag">${t("liveDemoBadge")}</span>
                    </div>
                </div>

                <!-- Card Body -->
                <div class="card-body">
                    <h3 class="card-title">${escapeHtml(game.title)}</h3>
                    <p class="card-desc">${escapeHtml(game.description)}</p>

                    <!-- Dual GitHub Links Section -->
                    <div class="card-actions-wrapper">
                        <div class="card-actions-grid">
                            <!-- Link 1: PLAY LIVE GAME (GitHub Pages) -->
                            <a href="${escapeHtml(game.playUrl)}" target="_blank" rel="noopener" class="btn-card-play" title="Play online">
                                <span>▶</span> ${t("playOnline")}
                            </a>
                            <!-- Link 2: REPOSITORY SOURCE CODE (GitHub) -->
                            <a href="${escapeHtml(game.repoUrl)}" target="_blank" rel="noopener" class="btn-card-code" title="View repository code">
                                <span>&lt;/&gt;</span> ${t("githubCode")}
                            </a>
                        </div>

                        <!-- Direct in-portfolio playable window -->
                        <button class="btn-card-preview" onclick="openGameInPlayer(${game.id})" title="Play inside this page">
                            <span>👁️</span> ${t("previewInPortfolio")}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

window.resetFilters = function() {
    searchQuery = "";
    if (searchInput) searchInput.value = "";
    currentCategory = "Tutti";
    categoryButtons.forEach(b => {
        b.classList.toggle("active", b.dataset.category === "Tutti");
    });
    renderGames();
};

// ============================================================================
// ADD & EDIT GAME (CREATOR ONLY)
// ============================================================================
function openNewGameModal() {
    if (!currentUser) {
        showToast("Please login or register to add new games!", "info");
        openAuthDialog("login");
        return;
    }

    if (!isCreator()) {
        showToast("Your account is registered as Player. Only Creators can publish games.", "error");
        return;
    }

    gameForm.reset();
    gameIdInput.value = "";
    modalTitle.textContent = t("addGameTitle");
    coverStyleInput.value = "grad-purple";
    updateLiveBannerPreview();
    gameModal.classList.remove("hidden");
}

window.openEditGameModal = function(id) {
    if (!isCreator()) {
        showToast("You do not have permission to edit this game.", "error");
        return;
    }

    const game = games.find(g => g.id === id);
    if (!game) return;

    gameIdInput.value = game.id;
    titleInput.value = game.title || "";
    categoryInput.value = game.category || "Arcade";
    techInput.value = game.tech || "";
    descriptionInput.value = game.description || "";
    playUrlInput.value = game.playUrl || "";
    repoUrlInput.value = game.repoUrl || "";
    coverStyleInput.value = game.coverStyle || "grad-purple";
    imageUrlInput.value = game.imageUrl || "";

    modalTitle.textContent = `${t("editGameTitle")}: ${game.title}`;
    updateLiveBannerPreview();
    gameModal.classList.remove("hidden");
};

function closeGameDialog() {
    gameModal.classList.add("hidden");
    gameForm.reset();
}

function updateLiveBannerPreview() {
    if (!bannerLivePreview) return;
    const cat = categoryInput.value || "Arcade";
    const tech = techInput.value || "HTML5 • JS";
    const style = coverStyleInput.value || "grad-purple";
    const img = imageUrlInput.value.trim();

    bannerLivePreview.className = `preview-banner-inner ${style}`;
    if (img) {
        bannerLivePreview.style.backgroundImage = `linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.85) 100%), url('${img}')`;
        bannerLivePreview.style.backgroundPosition = "center 52%";
    } else {
        bannerLivePreview.style.backgroundImage = "";
    }

    previewBadgeCat.textContent = cat;
    previewBadgeTech.textContent = tech;
}

[categoryInput, techInput, coverStyleInput, imageUrlInput].forEach(elem => {
    if (elem) elem.addEventListener("input", updateLiveBannerPreview);
});

// Save Game
gameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const idVal = gameIdInput.value;
    const isEdit = Boolean(idVal);

    const gameData = {
        id: isEdit ? Number(idVal) : Date.now(),
        title: titleInput.value.trim(),
        category: categoryInput.value,
        tech: techInput.value.trim() || "HTML5 • JS",
        description: descriptionInput.value.trim(),
        playUrl: playUrlInput.value.trim(),
        repoUrl: repoUrlInput.value.trim(),
        coverStyle: coverStyleInput.value,
        imageUrl: imageUrlInput.value.trim(),
        imagePosition: "center 52%"
    };

    if (isEdit) {
        games = games.map(g => g.id === gameData.id ? gameData : g);
        showToast(`Game "${gameData.title}" updated successfully!`, "success");
    } else {
        games.unshift(gameData);
        showToast(`New game "${gameData.title}" added to portfolio!`, "success");
    }

    saveGames();
    renderGames();
    closeGameDialog();
});

// Delete Game
window.deleteGameConfirm = function(id) {
    if (!isCreator()) {
        showToast("You do not have permission to delete games.", "error");
        return;
    }

    const game = games.find(g => g.id === id);
    if (!game) return;

    if (confirm(`Do you really want to permanently remove "${game.title}"?`)) {
        games = games.filter(g => g.id !== id);
        saveGames();
        renderGames();
        showToast(`Game "${game.title}" removed.`, "info");
    }
};

// ============================================================================
// INTEGRATED GAME PLAYER MODAL (PLAY IN PORTFOLIO)
// ============================================================================
window.openGameInPlayer = function(id) {
    const game = games.find(g => g.id === id);
    if (!game) return;

    playerGameTitle.textContent = game.title;
    playerGameTech.textContent = game.tech;
    playerGameCat.textContent = game.category;
    playerExternalPlayBtn.href = game.playUrl;
    playerRepoBtn.href = game.repoUrl;

    gameIframe.src = game.playUrl;
    playerModal.classList.remove("hidden");
    showToast(`Loading "${game.title}"...`, "info");
};

function closePlayerDialog() {
    playerModal.classList.add("hidden");
    gameIframe.src = "";
}

// ============================================================================
// EXPORT & BACKUP FOR GITHUB
// ============================================================================
function openExportDialog() {
    const codeString = `const defaultGames = ${JSON.stringify(games, null, 4)};`;
    exportCodeTextarea.value = codeString;
    exportModal.classList.remove("hidden");
}

function closeExportDialog() {
    exportModal.classList.add("hidden");
}

if (copyCodeBtn) {
    copyCodeBtn.addEventListener("click", () => {
        exportCodeTextarea.select();
        navigator.clipboard.writeText(exportCodeTextarea.value).then(() => {
            copyCodeBtn.textContent = t("copiedCode");
            showToast("Code copied to clipboard! Paste it into script.js.", "success");
            setTimeout(() => {
                copyCodeBtn.textContent = t("copyCode");
            }, 2500);
        }).catch(() => {
            showToast("Failed to copy automatically. Please copy manually.", "error");
        });
    });
}

if (downloadJsonBtn) {
    downloadJsonBtn.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(games, null, 2));
        const downloadAnchor = document.createElement("a");
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "portfolio-games-backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("JSON backup downloaded!", "success");
    });
}

// ============================================================================
// TOAST NOTIFICATIONS
// ============================================================================
function showToast(message, type = "info") {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    if (type === "error") icon = "⚠️";

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span>${escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 300);
    }, 3800);
}

// ============================================================================
// SETUP EVENT LISTENERS
// ============================================================================
function setupEventListeners() {
    // Language Switcher
    if (langSelect) {
        langSelect.addEventListener("change", (e) => {
            setLanguage(e.target.value);
            showToast(`Language switched to: ${e.target.options[e.target.selectedIndex].text}`, "info");
        });
    }

    // Auth Triggers
    if (openAuthBtn) openAuthBtn.addEventListener("click", () => openAuthDialog("login"));
    if (footerLoginLink) footerLoginLink.addEventListener("click", () => openAuthDialog("login"));
    if (closeAuthModal) closeAuthModal.addEventListener("click", closeAuthDialog);
    if (cancelAuthModal) cancelAuthModal.addEventListener("click", closeAuthDialog);
    if (cancelRegModal) cancelRegModal.addEventListener("click", closeAuthDialog);

    if (tabLoginBtn) tabLoginBtn.addEventListener("click", () => switchAuthTab("login"));
    if (tabRegisterBtn) tabRegisterBtn.addEventListener("click", () => switchAuthTab("register"));

    // Secret Key Toggle
    if (regRoleSelect) {
        regRoleSelect.addEventListener("change", () => {
            if (regRoleSelect.value === "creator") {
                if (creatorKeyGroup) creatorKeyGroup.classList.remove("hidden");
            } else {
                if (creatorKeyGroup) {
                    creatorKeyGroup.classList.add("hidden");
                    if (regCreatorKeyInput) regCreatorKeyInput.value = "";
                }
            }
        });
    }

    // Add Game Triggers
    if (navAddGameBtn) navAddGameBtn.addEventListener("click", openNewGameModal);
    if (heroAddBtn) heroAddBtn.addEventListener("click", openNewGameModal);
    if (closeGameModal) closeGameModal.addEventListener("click", closeGameDialog);
    if (cancelGameModal) cancelGameModal.addEventListener("click", closeGameDialog);

    // Player Modal
    if (closePlayerModal) closePlayerModal.addEventListener("click", closePlayerDialog);

    // Export Modal
    if (openExportModal) openExportModal.addEventListener("click", openExportDialog);
    if (closeExportModal) closeExportModal.addEventListener("click", closeExportDialog);

    // Close on Backdrop Click
    [authModal, gameModal, playerModal, exportModal].forEach(modal => {
        if (!modal) return;
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
                if (modal === playerModal) {
                    gameIframe.src = "";
                }
            }
        });
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            renderGames();
        });
    }

    // Sort
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderGames();
        });
    }

    // Category Filter Pills
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderGames();
        });
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".faq-item").forEach(other => other.classList.remove("open"));
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });

    // Escape Key to Close Modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            [authModal, gameModal, playerModal, exportModal].forEach(m => {
                if (m && !m.classList.contains("hidden")) {
                    m.classList.add("hidden");
                    if (m === playerModal) gameIframe.src = "";
                }
            });
        }
    });
}

// Start Application on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);
