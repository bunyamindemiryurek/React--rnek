
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheader from './Components/Myheader';

import About from './Components/About';

import Acordion from './Components/Acordion';
import Alert from './Components/Alert';
import Card from './Components/Card';
import Table  from './Components/Table';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Myheader></Myheader>
      
      <About />
      
      <Acordion /> 
      <Alert />
      <Card />
      <Table />
      <Footer></Footer>
      
    </div>
  );
}

export default App;
