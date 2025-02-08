import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';

import { Home } from './pages/Home';
import NotFound from './pages/_404';

const App: Component = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path='/*' component={NotFound} />
    </>
  );
};

export default App;