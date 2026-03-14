import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import NavBar from "./components/navbar/NavBar"
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from "./components/rightbar/RightBar" 
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import {Navigate, createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom"
import "./style.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { AuthContext } from "./context/authContext.jsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);
  
  const queryClient = new QueryClient()

  const Layout = () => {

    return (
      <QueryClientProvider client={queryClient}>   
        <div className= {`theme-${darkMode ? "dark" : "light"}`}>
          <NavBar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <Outlet />
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
    );
  };
  
  const ProtectedRoute = ({children}) => {
    if(!true){
      return <Navigate to="/login" />
    }
    return children;
  }

const router = createBrowserRouter([
  {
    path: "/",
    element:<ProtectedRoute><Layout /></ProtectedRoute> ,
    children:[
    {
    path: "/",
    element: <Home />
    },
    {
      path: "/profile/:id",
      element: <Profile />
    }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
   {
    path: "/register",
    element: <Register />
  }
]);

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
