import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Edit from './Pages/Edit/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
