
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import Home from "./pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Home />} />
        <Route path="" element />
      </Route> 
    </>
  )
);
 
function App() {

  return <RouterProvider router={router} />;
}

export default App;
