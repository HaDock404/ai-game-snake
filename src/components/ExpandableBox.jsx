import '../styles/expandable_box.css'

function ExpandableBoxWithImage(props) {

    const checkboxId = `toggle-${props.id}`

    return (
        <div className="expandable-box">
            <input type="checkbox" id={checkboxId}></input>
            <label htmlFor={checkboxId} className="box-header">
                <h3 className="main-paragraph-title">
                    {props.title}<span className={props.span_color}>{props.span_text}</span>
                </h3>
              <span className="arrow">&#9658;</span>
            </label>
            <div className="box-content">
                <div className="main-paragraph-text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default ExpandableBoxWithImage