export const intro_title = {
    en: "Welcome to this dashboard",
    fr: "Bienvenue dans ce tableau de bord"
};
export const intro_text = {
    en: "This dashboard aims to enable an uninformed audience to understand the methodology of data retrieval as well as its processing in order to grasp how the testers of our Snake game play.",
    fr: "Ce tableau de bord à pour objectif de permettre à un public non averti de comprendre la méthodologie de récupération de données ainsi que leur traitement afin de comprendre la manière de jouer des testeurs de notre jeu Snake."
};
export const intro_quote = {
    en: "Watch out, this snake has no brakes... Good luck not ending up in a knot!",
    fr: "Attention, ce serpent n'a pas de freins... Bon courage pour ne pas finir en nœud!"
};

/////////////////////////////////////////////////////////

export const title_01 = {
    en: "Project Presentation",
    fr: "Présentation du projet"
};
export const text_01 = {
    en: "The project is a web-based Snake game application, designed to offer a gaming experience directly through a browser. Developed with React, the game benefits from a responsive and modern user interface. Game data, such as user scores, performance statistics, and other key metrics, are collected in real-time through an API deployed via ngrok. This data is then stored on a private server. For data management, SQLite is used as the database system, ideal for efficient and fast storage of game information. Here, we present the analysis of this data. Thanks to this complete architecture, the project not only offers an entertaining gaming experience but also a solid infrastructure for data collection, processing, and analysis.",
    fr: "Le projet est une application web de jeu Snake, conçue pour offrir une expérience de jeu directement via un navigateur. Développé avec React, le jeu bénéficie d'une interface utilisateur réactive et moderne. Les données de jeu, telles que les scores des utilisateurs, les statistiques de performance et les autres métriques clés, sont collectées en temps réel grâce à une API déployé grâce à ngrok. Ces données sont ensuite stockées sur un serveur privé. Pour la gestion de ces données, SQLite est utilisé comme système de base de données, idéal pour le stockage efficace et rapide des informations du jeu. Nous présentons ici l'analyse de ces données. Grâce à cette architecture complète, le projet offre non seulement une expérience de jeu divertissante, mais aussi une infrastructure solide pour la collecte, le traitement et l'analyse des données."
};

/////////////////////////////////////////////////////////

export const title_02 = {
    en: "Snake Game",
    fr: "Jeu Snake"
};
export const text_02 = {
    en: "The game is hosted for free on a GitHub page and can be found on my GitHub profile, the link to which is provided above. The game has been developed with React, where the player controls a snake (green squares) using the directional keys on their keyboard. The objective is to collect apples (red squares) to score points. Each time the player collects an apple, the snake grows by one square, and the snake's movement speed increases by 10ms, up to a maximum speed of 14ms between each movement of the snake's square, making the movement very challenging for the player. When the player loses, their game information is sent to an API that handles storing the game data.",
    fr: "Le jeu est hébergé gratuitement sur un page Github et peut être retrouvé sur mon profil github dont le lien se retouve plus haut. Le jeu a été développé avec React, l'utilisateur dirige un serpent (carrés verts) avec les touches directionnelles de son clavier. L'objectif est de récupérer des pommes (carrés rouges) pour gagner des points. Lorsque le joueur récupére une pomme, le serpent s'aggrandi d'un carré et la vitesse de déplacement du serpent est augmenté de 10ms pour atteindre la vitesse maximal de 14ms entre chaque déplacement de carré du serpent, rendant son déplacement très difficile pour le joueur. Lorsque le joueur perd, ses informations de jeu sont envoyées à une API qui se charge de stocker les données de jeu."
};
export const text_02bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_04 = {
    en: "API",
    fr: "API"
};
export const text_04 = {
    en: "The API has been created with FastAPI, which provides a visually pleasant management interface for various calls, even for non-experts. The API retrieves game data such as the game time, the positions of the apple and the snake when the player loses, as well as the previous position to attempt to understand the path that led to the loss. The number of apples collected is also recorded. The game grid size can vary depending on the screen sizes of the users, and the grid's dimensions and width are also retrieved. The API is deployed in a Docker container and made available online through the ngrok service. The /recover_data endpoint pushes game data to the database, while the /game_data endpoint allows viewing of all retrieved data.",
    fr: "L'API a été réalisé avec fastApi ce qui permet d'avoir un interface de gestion des différents Calls assez agréable visuellement pour des non initiés. L'API récupére des données de jeu comme le temps de jeu, la position de la pomme et du serpent lorsque le joueur perd mais également la position précédente pour tenter de comprendre le parcours qui l'a amené à perdre. Le nombre de pommes récupérer est également récupéré. La taille de la grille de jeu peut être variable selon les différentes tailles d'écran des utilisateurs, la taille et la largeur de la grille de jeu est également récupéré. L'API est mis en production dans un conteneur Docker, et déployé en ligne grâce au service ngrok. /recover_data permet de pusher dans la database les données d'une partie et /game_data de visualiser l'ensemble des données récupérés."
};
export const text_04bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_03 = {
    en: "Database",
    fr: "Base de données"
};
export const text_03 = {
    en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    fr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};
export const text_03bis = {
    en: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    fr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
};