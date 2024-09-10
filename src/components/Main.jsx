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
                id="id1"
                title={Text.title_01[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_01[language]}
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
                id="id3"
                title={Text.title_03[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_03[language]}
                image1={Image2}
                image1_title="Test1"
                image2={Image3}
                image2_title="Test2"
            />
        </main>
    )
}

export default Main