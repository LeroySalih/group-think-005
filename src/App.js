import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuestionCard from './components/question-card';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              <Link to="/make-x-the-subject">Make x the subject</Link>
            </li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              <Link to="/change-the-denominator">Change the Denominator</Link>
            </li>
            <li>&nbsp;|&nbsp;</li>
            <li>
              <Link to="/sim-equations">Sim Equations</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/make-x-the-subject" element={<QuestionCard type={'make-x-the-subject'}/>}/>
          <Route path="/change-the-denominator" element={<QuestionCard type={'change-the-denominator'}/>}/>
          <Route path="/sim-equations" element={<QuestionCard type={'sim-equ'}/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <style jsx>{`
        nav, ul, li {
          display: inline;
        }
      `}</style>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}