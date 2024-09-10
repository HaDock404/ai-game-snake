import '../styles/expandable_box_with_image.css'

function ExpandableBoxWithImage(props) {

    const checkboxId = `toggle-${props.id}`

    return (
        <div className="expandable-box-with-image">
            <input type="checkbox" id={checkboxId}></input>
            <label htmlFor={checkboxId} className="box-header-with-image">
                <h3 className="main-paragraph-title-with-image">
                    {props.title}<span className={props.span_color}>{props.span_text}</span>
                </h3>
              <span className="arrow-with-image">&#9658;</span>
            </label>
            <div className="box-content-with-image">
                <div className="main-paragraph-text-with-image">
                    {props.text}
                </div>
                <div className="image">
                    <img src={props.image} alt="image"/>
                </div>
                <div className="main-paragraph-text-with-image">
                    {props.text_paragraph}
                </div>
            </div>
        </div>
    )
}

export default ExpandableBoxWithImage