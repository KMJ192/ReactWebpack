import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <h1>
        <Link to='test-page-a'>test page a</Link>
      </h1>
      <h1>
        <Link to='test-page-b'>test page b</Link>
      </h1>
      <h1>
        <Link to='test-code'>test code</Link>
      </h1>
    </div>
  );
}

export default MainPage;
