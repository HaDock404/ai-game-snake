import '../styles/expandable_box.css'

function Expandable_box() {
    return (
        <div id="expandable-box">
            <input type="checkbox" id="toggle"></input>
            <label for="toggle" id="box-header">
                <h3 id="main-paragraph-title">
                    Présentation du Dataset<span id="documentation">Documentation</span>
                </h3>
              <span id="arrow">&#9658;</span>
            </label>
            <div id="box-content">
                <div id="main-paragraph-text">
                    test
                </div>
            </div>
        </div>
    )
}

export default Expandable_box