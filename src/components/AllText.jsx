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
    en: "The SQLite database allows for a simple and lightweight configuration. Its serverless architecture enables direct reading and writing of data without a client-server setup. It is stored in a Docker container that does not have persistence outside the container. To access it, you need to run the commands shown in image 1 to copy the data locally, allowing you to manipulate and analyze it afterward. You can access the database data in JSON format at the following address: https://github.com/HaDock404/api-game-snake. Image 2 provides a quick visualization of the data. In order, they correspond to the snake's head position in X, the number of apples eaten, the apple's position in X, the previous position of the apple in X, the game board size in X, the game ID, the snake's head position in Y, the game time in milliseconds, the apple's position in Y, the previous position of the apple in Y, and the game board size in Y.",
    fr: "La base de données SQLite, permet une configuration simple et légère, son architecture sans serveur permet de lire et écrire des données directement sans architecture client-serveur. Elle est stocké dans un container Docker qui n'a pas de persistance à l'extérieur du conteneur. Pour pouvoir y accéder il faut réaliser les commandes de l'image 1 afin de copier en local les données pour pouvoir ensuite les manipuler afin de les analyser. Vous pouvez avoir accès aux données de la base de données au format JSON à l'adresse https://github.com/HaDock404/api-game-snake . L'image 2 permet de visualiser rapidement les données. Dans l'ordre elles correspondent à la position de la tête du serpent en X, le nombre de pommes mangées, la position de la pomme en X, la position précédente de la pomme en X, la taille du tableau de jeu en X, l'identifiant de partie, la tête du serpent en Y, le temps de jeu en milliseconde,la position de la pomme en Y, la position précédente de la pomme en Y, la taille du tableau de jeu en X."
};
export const image1_title = {
    en: "Command Line",
    fr: "Ligne de commande"
};
export const image2_title = {
    en: "JSON database",
    fr: "Base de données JSON"
};
export const text_03bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_05 = {
    en: "Data manipulation",
    fr: "Manipulation des données"
};
export const text_05 = {
    en: "To allow us to analyze the game data, it must first be extracted properly in a format understandable by humans to simplify interpretation. For this, we will use sqlite3 to interact with the database. In the first image, I present the simple commands that allow navigation through the data and extraction for manipulation in Python. In the second image, you can find the dataframe that will allow us to perform our data analysis. This dataframe was obtained through the steps of the following notebook: https://github.com/HaDock404/ai-game-snake/blob/master/data_analytics/data_extraction.ipynb",
    fr: "Pour nous permettre d'analyser les données de jeu, il faut d'abord les extraire correctement avec un format compréhensible par l'humain pour simplifer leur interprétation. Pour cela nous allons utiliser sqlite3 afin d'intéragir avec la base de données. Dans la première image je présente les commandes simples qui permettent de naviguer dans les données et de les extraire afin de les manipuler en python. Dans la seconde image vous pouvez retrouvez le dataframe qui va nous permettre de réaliser notre analyse de données. Ce dataframe a été obtenu grâce aux étapes du notebook suivant https://github.com/HaDock404/ai-game-snake/blob/master/data_analytics/data_extraction.ipynb"
};
export const image1_05_title = {
    en: "SQLite3",
    fr: "SQLite3"
};
export const image2_05_title = {
    en: "Dataframe",
    fr: "Dataframe"
};
export const text_05bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_06 = {
    en: "Game analysis",
    fr: "Analyse de jeu"
};
export const text_06 = {
    en: "This project enjoyed significant success during its brief one-week lifespan, with over 80 games played. The game was distributed across various platforms and shared with my family and close contacts. The first observation is the difficulty in controlling the snake beyond the twentieth apple collected. While some players managed to achieve high scores, the majority seem to stall around 10. The analysis of the interquartile range of the scores, as shown in the first image, highlights this trend, although a few distant outliers were observed. We believe that once the game controls are mastered, it becomes easier to improve performance. However, a barrier appears around 60 apples collected, likely due to the snake's large size, making navigation more challenging. In the second image, the interquartile range of playtime perfectly aligns with that of the scores, as these two parameters are intrinsically linked: the longer a player plays, the higher their chances of achieving a good score. This initial analysis already allows us to assess the difficulty of our game and adjust it to enhance player engagement over time.",
    fr: "Ce projet a rencontré un franc succès durant sa brève existence d'une semaine, avec plus de 80 parties jouées. Le jeu a été diffusé sur différentes plateformes et partagé avec ma famille et mes proches. Le premier constat est la difficulté à contrôler le serpent au-delà de la vingtième pomme récupérée. Bien que certains joueurs aient réussi à obtenir de bons scores, la majorité semble stagner autour de 10. L'analyse de l'interquartile des scores, comme le montre la première image, fait ressortir cette tendance, bien que quelques outliers très éloignés soient observés. Nous pensons qu'une fois les contrôles du jeu maîtrisés, il devient plus facile d'améliorer ses performances. Toutefois, une barrière semble apparaître autour de 60 pommes récupérées, probablement due à la taille importante du serpent, rendant la navigation plus complexe. Sur la deuxième image, l'interquartile du temps de jeu correspond parfaitement à celui des scores, ces deux paramètres étant intrinsèquement liés : plus un joueur passe de temps à jouer, plus il a de chances d'obtenir un bon score. Cette première analyse nous permet déjà d'évaluer la difficulté de notre jeu et de l'ajuster afin de prolonger l'engagement des joueurs."
};
export const image1_06_title = {
    en: "Interquartile Score",
    fr: "Interquartile Score"
};
export const image2_06_title = {
    en: "Interquartile Time",
    fr: "Interquartile Temps"
};
export const text_06bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_07 = {
    en: "Player distribution",
    fr: "Répartition des joueurs"
};
export const text_07 = {
    en: "The first chart clearly represents the different categories of people who played our game. On one hand, our close contacts, who achieved modest scores, and on the other hand, strangers, more familiar with technology, who managed to achieve very high scores. It would also have been useful to identify players based on their scores to track their progression over multiple games. In the second bar chart, we see the distribution of players according to different score ranges. There is a noticeable concentration of low scores, which corresponds to our close contacts who tested the game first, and likely to players who did not immediately master the controls and lost quickly. The scores are consistent, with a significant proportion of players scoring below 20, while a minority managed to exceed this threshold.",
    fr: "Le premier graphique reflète bien les différentes catégories de personnes ayant joué à notre jeu. D'une part, nos proches, qui réalisent des scores modestes, et d'autre part, des inconnus, plus familiers avec les technologies, qui obtiennent de très bons scores. Il aurait également été pertinent d'identifier les joueurs en fonction de leurs scores pour suivre leur progression au fil des parties. Dans le deuxième diagramme en barres, nous observons la répartition des joueurs en fonction de différentes tranches de score. Une concentration notable sur les scores bas est visible, ce qui correspond à nos proches ayant testé le jeu en premier, puis probablement à des joueurs n'ayant pas immédiatement maîtrisé les contrôles, perdant ainsi assez rapidement. Les scores sont cohérents avec une proportion significative de joueurs obtenant un score inférieur à 20, tandis qu'une minorité parvient à dépasser cette limite."
};
export const image1_07_title = {
    en: "Distribution",
    fr: "Répartition"
};
export const image2_07_title = {
    en: "Rank",
    fr: "Rang"
};
export const text_07bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_08 = {
    en: "Position",
    fr: "Position"
};
export const text_08 = {
    en: "This chart is the most interesting for us, as it clearly shows the position of the snake's head and the apple at the moment players lost. There is no consistency in the position of the apples when players lost; they are placed randomly, and no discernible pattern emerges, preventing us from making any hypotheses based on this data. However, a repeating pattern in the position of the snake's head is immediately noticeable. Players consistently lose near the edges of the game field. As the snake's speed increases rapidly, it can become difficult to judge the right moment to turn when near the edges. Since hitting a wall is an elimination condition, and low scores do not allow the snake to grow long enough for the head to touch its own body (another elimination condition), it is logical that games often end this way.",
    fr: "Ce graphique est pour nous le plus intéressant, car il permet de visualiser clairement la position de la tête du serpent et de la pomme au moment où les joueurs ont perdu. Il n’y a pas de cohérence dans la position des pommes lors des défaites, elles sont disposées de manière aléatoire, et aucun modèle ne semble se dégager, ce qui ne nous permet pas de formuler des hypothèses à partir de ces données. En revanche, on remarque immédiatement une répétition dans la position de la tête du serpent. Les joueurs perdent systématiquement sur les bords du terrain de jeu. La vitesse de déplacement du serpent augmentant rapidement, il peut devenir difficile de juger le bon moment pour tourner lorsque le serpent se trouve près des bords. Étant donné que toucher un bord est éliminatoire et que les scores faibles ne permettent pas au serpent d’être assez long pour que sa tête touche son propre corps (autre condition d'élimination), il est donc logique que les parties se terminent de cette manière."
};
export const text_08bis = {
    en: "",
    fr: ""
};

/////////////////////////////////////////////////////////

export const title_09 = {
    en: "Conclusion",
    fr: "Conclusion"
};
export const text_09 = {
    en: "We could have further expanded data collection and analysis to refine our game, but that was not our primary objective. We aimed to briefly explore the possibilities of this project, which serves as an excellent exercise without requiring too much time. This project allows us to demonstrate the overall process of putting a simple application into production. Complete deployment involves multiple layers of development and various tools working in synergy to ensure the application functions smoothly. The diagram below illustrates the project's architecture and highlights its complexity. This experience has given us a better understanding of the challenges related to designing, developing, and optimizing a web application, while balancing the simplicity of the product with the technical requirements necessary for its deployment.",
    fr: "Nous aurions pu approfondir la collecte et l'analyse des données pour affiner davantage notre jeu, mais ce n'était pas notre objectif initial. Nous voulions simplement explorer les possibilités offertes par ce projet, qui constitue un excellent exercice, sans toutefois y consacrer trop de temps. Ce projet nous permet de démontrer la mise en production d'une application simple dans son ensemble. Le déploiement complet implique de nombreuses couches de développement et l'utilisation de différents outils, travaillant en synergie pour assurer le bon fonctionnement de l'application. Le schéma ci-dessous illustre l'architecture du projet et met en lumière sa complexité. Cette expérience nous a permis de mieux comprendre les enjeux liés à la conception, au développement et à l'optimisation d'une application web, tout en équilibrant la simplicité du produit avec les exigences techniques nécessaires à sa mise en production."
};
export const text_09bis = {
    en: "",
    fr: ""
};