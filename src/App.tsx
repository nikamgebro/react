import React, {createElement as e} from 'react';


function App() {
    // return(
    //     <h1>Hello aaa</h1>
    // )
    return e('h1', {className: 'container'}, [
        e('h1', {className: 'font-bold'}, "text KSX"),
        e('button', {className: '',}, 'click me')
    ])
}

export default App;
