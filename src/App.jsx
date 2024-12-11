import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import About_me from './About_me/About_me';
import Contact from './Contactme/Contact';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path:'/skill',
      element:<Skill/>,
    },
    {
      path:'/education',
      element:<Education/>,
    },
    {
      path:'/about',
      element:<About_me/>,
    },
    {
      path:'/contact',
      element:<Contact/>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
