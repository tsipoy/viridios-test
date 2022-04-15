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
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
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
