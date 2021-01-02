import React, {useState} from 'react';

// class HelloWorld extends React.Component{
//     state={
//         who: 'world'
//     }
    
//     handleClick = (e) => {
//         this.setState({who: e.target.innerText})
//         //console.log(e.target.innerText)
//     }

//     render() {
//         return(
//             <div>
//                 <p>Hello {this.state.who}</p>
//                 <button onClick={this.handleClick}>world</button>
//                 <button onClick={this.handleClick}>friend</button>
//                 <button onClick={this.handleClick}>react</button>
//             </div>
//         )
//     }
// }

function HelloWorld() {
    const [who, setWho]=useState('world') 
    
    const handleClick = (e) => {
        setWho(e.target.innerText)
    }

        return(
            <div>
                <p>Hello {who}</p>
                <button onClick={handleClick}>world</button>
                <button onClick={handleClick}>friend</button>
                <button onClick={handleClick}>react</button>
            </div>
        )
}


export default HelloWorld;