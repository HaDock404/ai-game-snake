import '../styles/expandable_box_with_graph.css'

function display_cloudWords(image_props, path) {
    var choice1 = document.querySelector('input[name="image_choice1"]:checked').value;
    var choice2 = document.querySelector('input[name="image_choice2"]:checked').value;

    var displayed_image_1 = document.getElementById('main-paragraph-image-display_1');
    var displayed_image_2 = document.getElementById('main-paragraph-image-display_2');

    switch (image_props) {
        case 'image1':
            displayed_image_1.src = path;
            break;
        case 'image2':
            displayed_image_1.src = path;
            break;
        default:
            displayed_image_1.src = path;
    }
}


function ExpandableBoxWithGraph(props) {
    return (
        <div id="expandable-box-with-graph">
            <input type="checkbox" id="toggle-with-graph"></input>
            <label htmlFor="toggle-with-graph" id="box-header-with-graph">
                <h3 id="main-paragraph-title-with-graph">
                    {props.title}<span id={props.span_color}>{props.span_text}</span>
                </h3>
              <span id="arrow-with-graph">&#9658;</span>
            </label>
            <div id="box-content-with-graph">
                <div id="main-paragraph-text-with-graph">
                    {props.text}
                    <div id="main-paragraph-radio">
                        <input
                            type="radio"
                            name="image_choice"
                            value="image1"
                            id="image1"
                            onClick={()=> display_cloudWords('image1', props.image2)}
                            defaultChecked
                        />
                        <label id="radio-style" htmlFor="image1">{props.image1_title}</label>
                        <input
                            type="radio"
                            name="image_choice"
                            value="image2"
                            id="image2"
                            onClick={()=> display_cloudWords('image2', props.image2)}
                        />
                        <label className="radio-style" htmlFor="image2">{props.image2_title}</label>
                    </div>
                    
                    <div class="main-paragraph-image">
                        <img src={props.image2} alt="" id="main-paragraph-image-display_2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpandableBoxWithGraph