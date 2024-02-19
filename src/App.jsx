import { useStateValues } from "./utils/Provider";
import Description from "./pages/Description";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Player from "./Sections/Player";
import Main from './pages/Main'
import Login from './pages/Login'
import Register from "./pages/Register";
import { useEffect } from "react";
import Signin from "./pages/Signin";


function App() {

  const [{ token }, dispatch] = useStateValues();

  useEffect((() => {
    const data = localStorage.getItem("token");
    if (data) {
      dispatch({
        type: "SET_TOKEN",
        token: (JSON.parse(localStorage.token)),
      });
    }
  
  }), [dispatch])


  return (
    <div>
      <div className='bg-black overflow-hidden text-white h-[100vh] w-[100vw] '>
        <Routes>
          <Route path='/search' element={<Category />} />
          <Route path='/login' element={<Signin
          />} />
          <Route path='/register' element={<Register />} />

          {
            token ?
              (<Route path='/' element={<Main />} />)
              : (<Route path='/' element={<Login />} />)
          }
          <Route path='description/:id' element={<Description />} />
        </Routes>
        {
          token &&
          <Player />
        }
      </div>
    </div>
  );
}

export default App;
