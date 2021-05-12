import './App.css';
import React, { useState } from "react";

// const App = () => {
//
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);
//
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <button onClick={incrementItem}>increment</button>
//       <button onClick={decrementItem}>decrement</button>
//     </div>
//   );
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item : 1
        }
    }

    incrementItem = () => {
        this.setState(state => {
            return {
                item : this.state.item + 1
            }
        })
    };

    decrementItem = () => {
        this.setState(state => {
            return {
                item : this.state.item - 1
            }
        })
    };

    render() {
        const item = this.state.item;

        return (
            <div className="App">
                <h1>Hello {item}</h1>
                <button onClick={this.incrementItem}>increment</button>
                <button onClick={this.decrementItem}>decrement</button>
            </div>
        )
    }

}

export default App;
