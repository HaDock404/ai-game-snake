import '../styles/intro.css'

function Intro(props) {
    return (
        <div id="intro-container">
            <h2 id="intro-title">{props.title}</h2>
            <div id="intro-text">{props.text}</div>
            <div id="intro-quote">{props.quote}</div>
        </div>
    )
}

export default Intro