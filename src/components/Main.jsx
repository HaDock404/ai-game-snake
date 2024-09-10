import Intro from "./Intro"
import ExpandableBox from "./ExpandableBox"
import ExpandableBoxWithImage from "./ExpandableBoxWithImage"
import ExpandableBoxWithGraph from "./ExpandableBoxWithGraph"
import NavLinks from "./NavLinks"

import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image3 from '../assets/image3.jpg'

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import * as Text from "./AllText";

function Main() {
    const { language } = useContext(LanguageContext);

    return (
        <main>
            <Intro 
                title={Text.intro_title[language]}
                text={Text.intro_text[language]}
                quote={Text.intro_quote[language]}
            />
            <NavLinks />
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
                id="id2"
                title={Text.title_02[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_02[language]}
                image={Image1}
                text_paragraph={Text.text_02bis[language]}
            />
            <ExpandableBoxWithGraph 
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
                image1={Image2}
                image1_title="Test1"
                image2={Image3}
                image2_title="Test2"
            />
        </main>
    )
}

export default Main