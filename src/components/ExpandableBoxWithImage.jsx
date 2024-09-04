import '../styles/expandable_box_with_image.css'

function ExpandableBoxWithImage(props) {
    "rersr"
    return (
        <div id="expandable-box-with-image">
            <input type="checkbox" id="toggle-with-image"></input>
            <label htmlFor="toggle-with-image" id="box-header-with-image">
                <h3 id="main-paragraph-title-with-image">
                    {props.title}<span id={props.span_color}>{props.span_text}</span>
                </h3>
              <span id="arrow-with-image">&#9658;</span>
            </label>
            <div id="box-content-with-image">
                <div id="main-paragraph-text-with-image">
                    {props.text}
                </div>
                <div id="image">
                    <img src={props.image}/>
                </div>
                <div id="main-paragraph-text-with-image">
                    {props.text_paragraph}
                </div>
            </div>
        </div>
    )
}

export default ExpandableBoxWithImage