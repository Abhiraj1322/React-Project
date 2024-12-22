import{Route,createBrowserRouter,createRoutesFromElements,RouterProvider}from 'react-router-dom'
import MainLayout from './Layouts/MainLayout';
import React from 'react';
import Homepage from './Pages/Homepage';
import NotFoundPage from './Pages/NotFoundPage';
import JobsPage from './Pages/JobsPage';
import JobPage,{jobLoader} from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
const router=createBrowserRouter(
  createRoutesFromElements(
  <Route  path='/' element={<MainLayout/>}>
  <Route  index element={<Homepage/>}/>
 <Route path='/jobs' element={<JobsPage/>}/>
 <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
 <Route path='/add-jobs' element={<AddJobPage/>}/>
  <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}/>   
 
};

export default App
