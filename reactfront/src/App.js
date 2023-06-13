import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlogs';

//importamos el router
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CompEditblog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={ <CompShowBlogs/>}/>
        <Route path='/create' element={ <CompCreateBlog/>}/>
        <Route path='/edit/:id' element={ <CompEditblog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
