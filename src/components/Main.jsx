import Intro from "./Intro"
import ExpandableBox from "./ExpandableBox"
import ExpandableBoxWithImage from "./ExpandableBoxWithImage"
import Image1 from '../assets/test-image.jpg'

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
            <ExpandableBox 
                title="Présentation du projet"
                span_color="documentation"
                span_text="Documentation"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
            />
            <ExpandableBoxWithImage 
                title="Présentation du projet"
                span_color="documentation"
                span_text="Documentation"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
                image={Image1}
                text_paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. It was popularised in the 
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
                recently with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum."
            />
        </main>
    )
}

export default Main