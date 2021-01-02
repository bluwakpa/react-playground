import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
import Messages from './Messages';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
    );
  }
}

/*
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet constcetur, adimama. Incident shoe lace face brace avacado?<br />
        {//  make another tooltip direct inside the App }
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventory reluctant smurf walker. Karen is {secondTooltip} scram beat it. Beat the mirror into oblivion.
      </Split>
    </main>
  );
}
*/

export default App;