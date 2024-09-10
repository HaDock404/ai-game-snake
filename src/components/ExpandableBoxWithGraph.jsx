import '../styles/expandable_box_with_graph.css'

function display_cloudWords(image_props, path) {
    var displayed_image_1 = document.querySelector('.main-paragraph-image-display_2');

    if (displayed_image_1) {
        displayed_image_1.src = path;
    }
}



function ExpandableBoxWithGraphBis(props) {

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
                    <div id="main-paragraph-radio">
                        <input
                            type="radio"
                            name="image_choice"
                            value="image1"
                            className="image1"
                            onClick={()=> display_cloudWords('image1', props.image1)}
                            defaultChecked
                        />
                        <label className="radio-style" htmlFor="image1">{props.image1_title}</label>
                        <input
                            type="radio"
                            name="image_choice"
                            value="image2"
                            className="image2"
                            onClick={()=> display_cloudWords('image2', props.image2)}
                        />
                        <label className="radio-style" htmlFor="image2">{props.image2_title}</label>
                    </div>
                    
                    <div class="main-paragraph-image">
                        <img
                            src={props.image1}
                            alt=""
                            className="main-paragraph-image-display_2"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                display: "block"
                            }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandableBoxWithGraphBis