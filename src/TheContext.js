import React, {Component} from 'react';

const TheContext = React.createContext();

class TheProvider extends Component {
render() {
    return (
        <TheContext.Provider value="hello from context">
            {this.props.children}
        </TheContext.Provider>
    );
}}
const TheConsumer = TheContext.Consumer;
export { TheProvider, TheConsumer };