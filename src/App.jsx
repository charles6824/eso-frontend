
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
  // useLocation,
  // useNavigate,
} from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element = {<About/>} />
        <Route path="/community" element = {<Community/>} />
        
      </Route> 
    </>
  )
);
 
function App() {

  return <RouterProvider router={router} />;
}

export default App;
