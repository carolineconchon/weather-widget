import './App.css';
import Weather from './components/Weather';


function App() {

  return (
    <div className="App">
    <h1>Widget Météo</h1>
    <Weather city="Les Ulis" zipcode='91940'/>
    <Weather city="Dourdan" zipcode='91410'/>
    <Weather city="Gueugnon" zipcode='71130'/>
    <Weather city="Paris" zipcode='75000'/>
    <Weather city="Rouen" zipcode='76000'/>
    </div>
  );
}

export default App;
