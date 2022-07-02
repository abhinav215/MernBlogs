import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext,useEffect } from "react";
import { Context } from "./context/Context";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import axios from "axios";

// const URL_BACKEND = "https://blog-site-restapi.herokuapp.com/api/"

function App() {
  const {user} = useContext(Context)

  
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get(URL_BACKEND);
  //     console.log(res)
  //   };
  //   fetchPosts();
  //   console.log("yo")
  // }, []);

  return (
    <Router>
      {/* {user?<Topbar />:<></>} */}
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        {/* <Route exact path="/" element={user ? <Homepage /> : <Login />}/> */}
        <Route path="/posts" element={user ? <Homepage /> : <Login />}/>
        <Route path="/register" element={user ? <Homepage />:<Register />}/>
        <Route path="/login" element={user ? <Homepage /> :<Login />}/>
        <Route path="/post/:id"  element={<Single />}/>
        <Route path="/write"  element={user ? <Write /> : <Login />}/>
        <Route path="/contact"  element={user ? <Contact /> : <Login />}/>
        <Route path="/about"  element={user ? <About /> : <Login />}/>
        <Route path="/settings" element={user ? <Settings /> : <Login />}/>
      </Routes>
    </Router>
    // <>abc</>
  );
}

export default App;