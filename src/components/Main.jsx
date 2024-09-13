import Intro from "./Intro"
import ExpandableBox from "./ExpandableBox"
import ExpandableBoxWithImage from "./ExpandableBoxWithImage"
import ExpandableBoxWithGraph from "./ExpandableBoxWithGraph"
import NavLinks from "./NavLinks"

// import Image1 from '../assets/image1.jpg'
// import Image2 from '../assets/image2.jpg'
// import Image3 from '../assets/image3.jpg'

import Snake from '../assets/Snake.png'
import API from '../assets/API.png'
import JSON from '../assets/JSON.png'
import Command from '../assets/Command.png'
import SQLite3 from '../assets/SQLite3.png'
import data from '../assets/data.png'
import Score from '../assets/Score.png'
import Time from '../assets/Time.png'
import Score2 from '../assets/Score2.png'
import Score3 from '../assets/Score3.png'
import Loss from '../assets/Loss.png'
import Scheme from '../assets/Scheme.png'

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
                image={Snake}
                text_paragraph={Text.text_02bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id4"
                title={Text.title_04[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_04[language]}
                image={API}
                text_paragraph={Text.text_04bis[language]}
            />
            <ExpandableBoxWithGraph
                id="id3"
                title={Text.title_03[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_03[language]}
                image1={Command}
                image1_title={Text.image1_title[language]}
                image2={JSON}
                image2_title={Text.image2_title[language]}
            />
            <ExpandableBoxWithGraph
                id="id5"
                title={Text.title_05[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_05[language]}
                image1={SQLite3}
                image1_title={Text.image1_05_title[language]}
                image2={data}
                image2_title={Text.image2_05_title[language]}
            />
            <ExpandableBoxWithGraph
                id="id6"
                title={Text.title_06[language]}
                span_color="graphical"
                span_text="Chart"
                text={Text.text_06[language]}
                image1={Score}
                image1_title={Text.image1_06_title[language]}
                image2={Time}
                image2_title={Text.image2_06_title[language]}
            />
            <ExpandableBoxWithGraph
                id="id7"
                title={Text.title_07[language]}
                span_color="graphical"
                span_text="Chart"
                text={Text.text_07[language]}
                image1={Score2}
                image1_title={Text.image1_07_title[language]}
                image2={Score3}
                image2_title={Text.image2_07_title[language]}
            />
            <ExpandableBoxWithImage 
                id="id8"
                title={Text.title_08[language]}
                span_color="graphical"
                span_text="Chart"
                text={Text.text_08[language]}
                image={Loss}
                text_paragraph={Text.text_08bis[language]}
            />
            <ExpandableBoxWithImage 
                id="id9"
                title={Text.title_09[language]}
                span_color="documentation"
                span_text="Documentation"
                text={Text.text_09[language]}
                image={Scheme}
                text_paragraph={Text.text_09bis[language]}
            />
        </main>
    )
}

export default Main