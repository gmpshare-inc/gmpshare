import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import NotFound from './pages/_404';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path='/*' component={NotFound} />
    </Router>
  );
};

export default App;