import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import SearchTodo from './components/SearchTodo';
import DeleteTodo from './components/DeleteTodo';
import ViewTodo from './components/ViewTodo';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<AddTodo/>} />
      <Route path="/search" element={<SearchTodo/>} />
      <Route path="/delete" element={<DeleteTodo/>} />
      <Route path="/view" element={<ViewTodo/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
