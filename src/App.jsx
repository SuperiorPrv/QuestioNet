import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/clientPages/signIn/SignIn"
import SignUp from "./pages/clientPages/signUp/SignUp"
import ForgotPassword from "./pages/clientPages/forgotPassword/ForgotPassword"
import Home from "./pages/clientPages/home/Home"
import Dashboard from "./dashboard/Dashboard"
import Questions from "./pages/clientPages/questions/Questions"
import Users from "./pages/clientPages/users/Users"
import About from "./pages/clientPages/about/About"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword/>
    },
    {
      path:"/dashboard",
      element: <Dashboard/>,
      children: [
        {
          path:"/dashboard/home",
          element:<Home/>
        },
        {
          path:"/dashboard/question",
          element:<Questions/>
        },
        {
          path:"/dashboard/users",
          element:<Users/>
        },
        {
          path:"/dashboard/about",
          element:<About/>
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App