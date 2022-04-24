import TestCodeComponent from '@src/components/TestCodeComponent';
import React, { useState } from 'react';

function TestCode() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return <TestCodeComponent count={count} increase={increase} decrease={decrease} />;
}

export default TestCode;
