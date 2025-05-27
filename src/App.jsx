import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, useLocation } from "react-router-dom"
import Mortgage from "./pages/Mortgage";
import Product from "./pages/Productpage";
import MultiStepForm from "./pages/MultiStepForm";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 pt-16 px-4">
        <Outlet />
      </main>
    </div>
  );
}


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Mortgage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="multi" element={<MultiStepForm/>}/>
      </Route>
      
    )
  )

  return <RouterProvider router={router}/>
}

export default App
