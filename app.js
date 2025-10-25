// Translations
const translations = {
  fr: {
    'nav-title': 'Le Football Français',
    'hero-title': 'Le Football Français',
    'hero-subtitle': 'Passion, Unité et Diversité',
    'scroll-down': 'Défiler vers le bas',
    'intro-title': 'Plus qu\'un Sport',
    'intro-text': 'En France, le football n\'est pas seulement un sport - c\'est une expression de passion, d\'unité et d\'identité multiculturelle. Des rues des banlieues aux stades emblématiques, le football incarne les valeurs républicaines françaises et rassemble une nation diverse autour d\'un amour commun pour le beau jeu.',
    'history-title': 'L\'Histoire',
    'legends-title': 'Les Légendes',
    'zidane-origin': 'Marseille, France - Origine algérienne',
    'henry-origin': 'Les Ulis, France - Origine caribéenne',
    'mbappe-origin': 'Bondy, France - Origine camerounaise & algérienne',
    'caps': 'Sélections',
    'goals': 'Buts',
    'achievements': 'Réalisations',
    'zidane-achievements': ['Vainqueur Coupe du Monde 1998 (2 buts en finale)', 'Vainqueur Euro 2000', 'Finaliste Coupe du Monde 2006', 'Ballon d\'Or 1998', 'Symbole de la France multiculturelle'],
    'henry-achievements': ['Meilleur buteur de l\'histoire (jusqu\'en 2022)', 'Vainqueur Coupe du Monde 1998', 'Vainqueur Euro 2000', 'Légende d\'Arsenal FC', '228 buts pour Arsenal'],
    'mbappe-achievements': ['Vainqueur Coupe du Monde 2018 (à 19 ans)', 'Meilleur buteur Coupe du Monde 2022 (8 buts)', 'Hat-trick en finale 2022', 'Capitaine de l\'équipe de France', 'Nouveau symbole de la diversité française'],
    'clubs-title': 'Les Grands Clubs',
    'founded': 'Fondé:',
    'stadium': 'Stade:',
    'psg-titles': ['13 Championnats de France', '16 Coupes de France', '9 Coupes de la Ligue', 'Vainqueur Ligue des Champions 2025', 'Club le plus titré de France (56 trophées)'],
    'marseille-titles': ['9 Championnats de France', '10 Coupes de France', 'Vainqueur Ligue des Champions 1993', 'Seul club français champion d\'Europe', 'Club le plus populaire du sud'],
    'lyon-titles': ['7 Championnats consécutifs (2002-2008)', '5 Coupes de France', '8 Trophées des Champions', 'Record de titres consécutifs', 'Domination des années 2000'],
    'worldcup-title': 'Gloire de la Coupe du Monde',
    'rainbow-team': 'L\'Équipe Arc-en-ciel',
    'wc1998-location': 'Stade de France, Paris',
    'wc1998-highlights': ['Zidane marque 2 buts de la tête', '1,5 million sur les Champs-Élysées', 'Équipe \'Black-Blanc-Beur\'', 'Victoire pour la France multiculturelle', 'Joueurs d\'Algérie, Ghana, Martinique, Nouvelle-Calédonie'],
    'new-generation': 'Nouvelle Génération',
    'wc2018-location': 'Luzhniki Stadium, Moscou',
    'wc2018-highlights': ['15 joueurs sur 23 d\'origine africaine', 'Mbappé, Pogba, Kanté, Umtiti leaders', 'Plus jeune buteur en finale depuis Pelé', 'Nouvelle génération multiculturelle', 'La diversité comme force'],
    'diversity-title': 'La Diversité: Notre Force',
    'diversity-p1': 'Les victoires en Coupe du Monde de 1998 et 2018 ont démontré au monde entier que la force de la France réside dans sa diversité. Ces équipes multiculturelles n\'étaient pas seulement des champions du football - elles étaient le reflet de la France moderne.',
    'diversity-p2': 'Des banlieues parisiennes aux quartiers de Marseille, le football français puise sa force dans toutes les communautés. Des joueurs d\'origines africaine, caribéenne, arabe et européenne se sont unis sous le maillot bleu, prouvant que le talent et la passion n\'ont pas de frontières.',
    'banlieues-title': 'Les Banlieues: Fabriques de Talents',
    'banlieues-text': 'Les banlieues françaises sont les véritables fabriques de talents du football. C\'est là, sur les terrains en béton, que des légendes comme Mbappé, Pogba, Benzema et Mahrez ont perfectionné leur art. Le football de rue a créé une génération de joueurs techniques, créatifs et déterminés - des champions nés de la diversité.',
    'diversity-quote': '"Quand vous gagnez, vous êtes français. Nous sommes tous français ensemble."',
    'fanculture-title': 'La Culture des Supporters',
    'chants-title': 'Chants et Ambiance',
    'chants-text': 'Les groupes ultras créent une atmosphère électrique dans les stades français. Des chants légendaires aux tifos spectaculaires, les supporters sont le douzième homme sur le terrain.',
    'street-title': 'Football de Rue',
    'street-text': 'Dans les banlieues, le football de rue est plus qu\'un jeu - c\'est une passion, un art de vivre. C\'est là que tout commence, sur les terrains en béton où naissent les futurs champions.',
    'stadiums-title': 'Forteresses de Passion',
    'stadiums-text': 'Le Stade Vélodrome de Marseille et le Parc des Princes de Paris sont des cathédrales du football. Ces stades vibrent au rythme des supporters, créant une atmosphère unique en Europe.',
    'community-title': 'Rassemblement Communautaire',
    'community-text': 'Le football est le sport du peuple. Il rassemble les familles, les amis, les voisins. Chaque match est une célébration de l\'unité, peu importe les origines.',
    'values-title': 'Plus qu\'un Jeu',
    'values-intro': 'Le football français incarne parfaitement les valeurs républicaines de la France. Sur le terrain, ces principes prennent vie à chaque match, à chaque but, à chaque célébration.',
    'liberte-text': 'Le football est une expression de liberté. Sur les terrains de rue, les jeunes s\'expriment librement, créent, innovent. Le football de rue est un acte de libération, un espace où chacun peut rêver de grandeur.',
    'egalite-text': 'Sur le terrain, tous sont égaux. Peu importe l\'origine, la couleur de peau ou le quartier, seul le talent compte. Le football offre les mêmes opportunités à tous ceux qui ont la passion et la détermination.',
    'fraternite-text': 'L\'équipe de France est l\'incarnation de la fraternité. Des joueurs de tous horizons unis par un même maillot, un même rêve. "Nous sommes tous fiers de porter ce maillot" - Paul Pogba.',
    'values-conclusion': 'Après les attentats terroristes de 2015, le football français a montré sa solidarité et sa résilience. Les joueurs et les supporters se sont unis pour démontrer que rien ne peut briser l\'esprit français. Le football a été un symbole de défiance et d\'espoir.',
    'conclusion-title': 'Le Battement de Cœur Culturel',
    'conclusion-p1': 'En France, le football n\'est pas simplement un jeu - c\'est le battement de cœur culturel d\'une nation. Des matchs de rue dans les banlieues aux stades remplis de 80 000 supporters, le football résonne dans chaque coin du pays.',
    'conclusion-p2': 'De Zidane à Mbappé, des générations de joueurs ont uni la France à travers leur passion pour le beau jeu. Ils ont prouvé que la véritable force de la France réside dans sa diversité, dans sa capacité à transformer les différences en richesse.',
    'conclusion-p3': 'Chaque but, chaque chant, chaque célébration - c\'est l\'âme de la France qui s\'exprime. Le football est plus qu\'un sport ici, c\'est une identité, une fierté, un avenir commun.',
    'conclusion-final': 'L\'avenir du football français est aussi vibrant et diversifié que son passé glorieux.',
    'footer-text': 'Créé avec passion pour célébrer la culture du football français'
  },
  en: {
    'nav-title': 'French Football',
    'hero-title': 'French Football',
    'hero-subtitle': 'Passion, Unity and Diversity',
    'scroll-down': 'Scroll down',
    'intro-title': 'More Than a Sport',
    'intro-text': 'In France, football is not just a sport - it\'s an expression of passion, unity, and multicultural identity. From the streets of the banlieues to iconic stadiums, football embodies French Republican values and unites a diverse nation around a common love for the beautiful game.',
    'history-title': 'History',
    'legends-title': 'The Legends',
    'zidane-origin': 'Marseille, France - Algerian descent',
    'henry-origin': 'Les Ulis, France - Caribbean descent',
    'mbappe-origin': 'Bondy, France - Cameroonian & Algerian descent',
    'caps': 'Caps',
    'goals': 'Goals',
    'achievements': 'Achievements',
    'zidane-achievements': ['1998 World Cup Winner (2 goals in final)', 'Euro 2000 Winner', '2006 World Cup Finalist', '1998 Ballon d\'Or', 'Symbol of multicultural France'],
    'henry-achievements': ['France\'s all-time top scorer (until 2022)', '1998 World Cup Winner', 'Euro 2000 Winner', 'Arsenal FC Legend', '228 goals for Arsenal'],
    'mbappe-achievements': ['2018 World Cup Winner (at age 19)', '2022 World Cup Top Scorer (8 goals)', 'Hat-trick in 2022 final', 'France National Team Captain', 'New symbol of French diversity'],
    'clubs-title': 'Major Clubs',
    'founded': 'Founded:',
    'stadium': 'Stadium:',
    'psg-titles': ['13 Ligue 1 Titles', '16 Coupe de France', '9 Coupe de la Ligue', '2025 Champions League Winner', 'Most successful French club (56 trophies)'],
    'marseille-titles': ['9 Ligue 1 Titles', '10 Coupe de France', '1993 Champions League Winner', 'Only French club to win Champions League', 'Most popular club in southern France'],
    'lyon-titles': ['7 Consecutive League Titles (2002-2008)', '5 Coupe de France', '8 Trophée des Champions', 'Record consecutive titles', 'Dominated the 2000s'],
    'worldcup-title': 'World Cup Glory',
    'rainbow-team': 'The Rainbow Team',
    'wc1998-location': 'Stade de France, Paris',
    'wc1998-highlights': ['Zidane scores 2 headed goals', '1.5 million on Champs-Élysées', 'Rainbow Team \'Black-Blanc-Beur\'', 'Victory for multicultural France', 'Players from Algeria, Ghana, Martinique, New Caledonia'],
    'new-generation': 'New Generation',
    'wc2018-location': 'Luzhniki Stadium, Moscow',
    'wc2018-highlights': ['15 of 23 players of African descent', 'Mbappé, Pogba, Kanté, Umtiti leaders', 'Youngest scorer in final since Pelé', 'New multicultural generation', 'Diversity as strength'],
    'diversity-title': 'Diversity: Our Strength',
    'diversity-p1': 'The 1998 and 2018 World Cup victories demonstrated to the world that France\'s strength lies in its diversity. These multicultural teams weren\'t just football champions - they were reflections of modern France.',
    'diversity-p2': 'From Parisian banlieues to Marseille neighborhoods, French football draws its strength from all communities. Players of African, Caribbean, Arab and European origins united under the blue jersey, proving that talent and passion know no borders.',
    'banlieues-title': 'Les Banlieues: Talent Factories',
    'banlieues-text': 'French banlieues are the true football talent factories. It\'s there, on concrete pitches, that legends like Mbappé, Pogba, Benzema and Mahrez perfected their craft. Street football created a generation of technical, creative and determined players - champions born from diversity.',
    'diversity-quote': '"When you win, you\'re French. We are all French together."',
    'fanculture-title': 'Fan Culture',
    'chants-title': 'Chants and Atmosphere',
    'chants-text': 'Ultra groups create an electric atmosphere in French stadiums. From legendary chants to spectacular tifos, supporters are the twelfth man on the field.',
    'street-title': 'Street Football',
    'street-text': 'In the banlieues, street football is more than a game - it\'s a passion, a way of life. That\'s where it all begins, on concrete pitches where future champions are born.',
    'stadiums-title': 'Fortresses of Passion',
    'stadiums-text': 'Marseille\'s Stade Vélodrome and Paris\' Parc des Princes are football cathedrals. These stadiums vibrate to the rhythm of supporters, creating a unique atmosphere in Europe.',
    'community-title': 'Community Gathering',
    'community-text': 'Football is the people\'s sport. It brings together families, friends, neighbors. Every match is a celebration of unity, regardless of origin.',
    'values-title': 'More Than a Game',
    'values-intro': 'French football perfectly embodies France\'s Republican values. On the field, these principles come to life with every match, every goal, every celebration.',
    'liberte-text': 'Football is an expression of freedom. On street pitches, youth express themselves freely, create, innovate. Street football is an act of liberation, a space where anyone can dream of greatness.',
    'egalite-text': 'On the field, everyone is equal. Regardless of origin, skin color or neighborhood, only talent matters. Football offers the same opportunities to all who have passion and determination.',
    'fraternite-text': 'The French national team is the embodiment of brotherhood. Players from all backgrounds united by the same jersey, the same dream. "We are all proud to wear this shirt" - Paul Pogba.',
    'values-conclusion': 'After the 2015 terrorist attacks, French football showed its solidarity and resilience. Players and supporters united to demonstrate that nothing can break the French spirit. Football was a symbol of defiance and hope.',
    'conclusion-title': 'The Cultural Heartbeat',
    'conclusion-p1': 'In France, football is not simply a game - it\'s the cultural heartbeat of a nation. From street matches in banlieues to stadiums filled with 80,000 supporters, football resonates in every corner of the country.',
    'conclusion-p2': 'From Zidane to Mbappé, generations of players have united France through their passion for the beautiful game. They proved that France\'s true strength lies in its diversity, in its ability to transform differences into wealth.',
    'conclusion-p3': 'Every goal, every chant, every celebration - it\'s France\'s soul expressing itself. Football is more than a sport here, it\'s an identity, a pride, a common future.',
    'conclusion-final': 'The future of French football is as vibrant and diverse as its glorious past.',
    'footer-text': 'Created with passion to celebrate French football culture'
  }
};

// Timeline data
const timelineData = [
  {
    year: 1904,
    event_fr: 'Création de l\'équipe de France, premier match vs Belgique (3-3)',
    event_en: 'French National Team founded, first match vs Belgium (3-3)'
  },
  {
    year: 1919,
    event_fr: 'Création de la Fédération Française de Football (FFF)',
    event_en: 'French Football Federation (FFF) created'
  },
  {
    year: 1938,
    event_fr: 'La France organise sa première Coupe du Monde',
    event_en: 'France hosts first World Cup'
  },
  {
    year: 1958,
    event_fr: '3ème place, record de buts de Just Fontaine',
    event_en: 'Third place finish, Just Fontaine\'s record goals'
  },
  {
    year: 1984,
    event_fr: 'Victoire à l\'Euro (ère Platini)',
    event_en: 'Euro Championship victory (Platini era)'
  },
  {
    year: 1998,
    event_fr: 'Première victoire en Coupe du Monde - Équipe Arc-en-ciel',
    event_en: 'First World Cup victory - Rainbow Team'
  },
  {
    year: 2000,
    event_fr: 'Victoire à l\'Euro',
    event_en: 'Euro Championship victory'
  },
  {
    year: 2018,
    event_fr: 'Deuxième victoire en Coupe du Monde - Célébration de la diversité',
    event_en: 'Second World Cup victory - Celebrating diversity'
  }
];

// Current language
let currentLang = 'fr';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initTimeline();
  initPlayerCards();
  initScrollAnimations();
  initScrollTop();
  initNavbar();
});

// Language Toggle
function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langToggle.querySelector('.lang-text').textContent = currentLang === 'fr' ? 'EN' : 'FR';
    updateLanguage();
  });
}

function updateLanguage() {
  const elements = document.querySelectorAll('[data-lang-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    const translation = translations[currentLang][key];
    
    if (Array.isArray(translation)) {
      // Handle lists
      element.innerHTML = translation.map(item => `<li>${item}</li>`).join('');
    } else {
      element.textContent = translation;
    }
  });
  
  // Update timeline
  updateTimeline();
}

// Timeline
function initTimeline() {
  const timeline = document.getElementById('timeline');
  
  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <p class="timeline-event" data-timeline-index="${index}">${item.event_fr}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
}

function updateTimeline() {
  const timelineEvents = document.querySelectorAll('[data-timeline-index]');
  
  timelineEvents.forEach(event => {
    const index = parseInt(event.getAttribute('data-timeline-index'));
    const eventKey = currentLang === 'fr' ? 'event_fr' : 'event_en';
    event.textContent = timelineData[index][eventKey];
  });
}

// Player Cards
function initPlayerCards() {
  const playerCards = document.querySelectorAll('.player-card');
  
  playerCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section));
  
  // Observe timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => observer.observe(item));
}

// Scroll to Top
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scrollTop');
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});