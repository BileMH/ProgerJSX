
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profilephoto from './Profail/Profilephoto';
import { Fullname } from './Profail/Fullname';
import { Address } from './Profail/Address';

function App() {
  return (
    <div className="App">
    <Fullname/>
    <Address/>
    <Profilephoto/> 
  
    </div>
  );
}

export default App;
