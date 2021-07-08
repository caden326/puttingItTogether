import React, {Component} from "react";


class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    handleClick = () =>{
        this.setState({
            age : this.state.age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>  { this.props.lastName } { this.props.firstName }</h1>
                <p> Age: {this.state.age} </p>
                <p> Hair Color: {this.props.haircolor} </p>

                <button onClick={ this.handleClick }>{ this.props.firstName }'s Birthday button</button>
            </div>
        );
    }
}

export default Personcard;


// class Counter extends Component {
//     state = {
//         count: 0
//     };
//     handleClick = () => {
//         this.setState(({ age }) => ({
//         count: age + 1
//         }));
//     };
//     render() {
//         return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
// }