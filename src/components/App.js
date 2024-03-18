
import React, { Component } from "react";
import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }
import React, { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    onChangeText = (event) => {
        const newValue = event.target.value;
        this.setState({ value: newValue });
    }

    render() {
        return (
            <div>
                <label htmlFor="input">Enter your name</label>
                <input id="input" value={this.state.value} onChange={this.onChangeText} />
                {this.state.value ? <p>Hello {this.state.value}!</p> : null}
            </div>
        );
    }
}

export default Greeting;
