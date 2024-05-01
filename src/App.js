import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatePresence } from 'framer-motion';
import { Scrollbar } from 'smooth-scrollbar-react';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Scrollbar
          plugins={{
            overscroll: {
              effect: 'glow',
            },
          }}
          damping={0.1}
        >
          <AnimatePresence mode="wait">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/projects/:projectName" component={ProjectDetail} />
              <Route path="/projects">
                <Projects />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
          <Footer />
        </Scrollbar>
      </Router>
    </>
  );
}
