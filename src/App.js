
import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
          <Component lastName="Doe" firstName="Jane" age={45} haircolor="black"/>

          <Component lastName="Smith" firstName="John" age={88} haircolor="brown"/>

          <Component lastName="Filmore" firstName="Millard" age={50} haircolor="Blanched almond"/>

          <Component lastName="Smith" firstName="Maria" age={62} haircolor="brown"/>
        
      </header>
    </div>
  );
}

export default App;
