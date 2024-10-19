import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/clientPages/signIn/SignIn"
import SignUp from "./pages/clientPages/signUp/SignUp"
import ForgotPassword from "./pages/clientPages/forgotPassword/ForgotPassword"
import Home from "./pages/clientPages/home/Home"

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
      path:"/home",
      element:<Home/>
    }
  ])
  return <RouterProvider router={router} />
}

export default App