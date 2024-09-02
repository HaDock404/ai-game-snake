import Intro from "./Intro"

function Main() {
    return (
        <main>
            <Intro 
                title="Bienvenue dans mon tableau de bord"
                text="Ce tableau de bord à pour objectif de permettre à un 
                public non averti de comprendre la méthodologie de récupération de données
                ainsi que leur traitement afin de comprendre la manière de jouer des testeurs de 
                notre jeu Snake."
                quote="Attention, ce serpent n'a pas de freins... Bon courage pour ne pas finir en nœud!"
            />
        </main>
    )
}

export default Main