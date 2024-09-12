import '../styles/expandable_box_with_graph.css'

function display_cloudWords(imageId, path) {
    var displayed_image = document.getElementById(imageId); // Use unique ID to target image

    if (displayed_image) {
        displayed_image.src = path;
    }
}



function ExpandableBoxWithGraphBis(props) {

    const checkboxId = `toggle-${props.id}`;
    const input01 = `input01-${props.id}`;
    const input02 = `input02-${props.id}`;
    const imageId = `image-display-${props.id}`; // Unique image ID
    const radioGroupName = `image_choice-${props.id}`;

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
                            id={input01}
                            name={radioGroupName}
                            value="image1"
                            className="image1"
                            onClick={() => display_cloudWords(imageId, props.image1)} // Pass unique image ID
                            defaultChecked
                        />
                        <label className="radio-style" htmlFor={input01}>{props.image1_title}</label>
                        <input
                            type="radio"
                            id={input02}
                            name={radioGroupName}
                            value="image2"
                            className="image2"
                            onClick={() => display_cloudWords(imageId, props.image2)} // Pass unique image ID
                        />
                        <label className="radio-style" htmlFor={input02}>{props.image2_title}</label>
                    </div>
                    
                    <div className="main-paragraph-image">
                        <img
                            id={imageId}  // Set unique ID for each image
                            src={props.image1}
                            alt={props.image1}
                            className="main-paragraph-image-display"
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
    );
}

export default ExpandableBoxWithGraphBis;
