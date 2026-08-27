import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
        <ToastContainer
          className='text-red-400 bg-black/85'
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
          toastClassName="!bg-gray-900 !text-white !rounded-xl !shadow-xl"
          progressClassName="!bg-lime-400"
        />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
