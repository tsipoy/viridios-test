import './App.css';
import { MainMenu } from './Menu';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="page-1" element={<Page1 />} />
          <Route path="page-2" element={<Page2 />} />
          <Route path="page-3" element={<Page3 />} />
        </Route>
      </Routes>

    </div>
  )
}

function Layout() {
  return (
    <div>
      <MainMenu />
      <Outlet />
    </div>
  );
}
export default App;
