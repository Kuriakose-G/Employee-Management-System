import './App.css';
import {Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin';
import Add from './Components/Add';
import Edit from './Components/Edit';
import View from './Components/View';
import Pahenotfound from './Components/Pahenotfound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Admin page localhosh - 3000 */}
        <Route path='' element={<Admin/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='*' element={<Pahenotfound/>}/>
      </Routes>
    </div>
  );
}

export default App;
