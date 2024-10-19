import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/clientPages/signIn/SignIn"
import SignUp from "./pages/clientPages/signUp/SignUp"
import ForgotPassword from "./pages/clientPages/forgotPassword/ForgotPassword"

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
    }
  ])
  return <RouterProvider router={router} />
}

export default App