import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import NotFound from './pages/_404';
import { IPOs } from './pages/IPOs';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/features" component={Features} />
      <Route path="/ipos" component={IPOs} />
      <Route path='/*' component={NotFound} />
    </Router>
  );
};

export default App;