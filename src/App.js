import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form1 from './components/Form1';
import Header from './components/Header';
import List from './components/List';

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Form1 />} />
          <Route path='/:id' element={<Form1 />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
