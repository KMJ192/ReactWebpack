import React from 'react';

interface Props {
  count: number;
  increase: () => void;
  decrease: () => void;
}

function TestCodeComponent({ count, increase, decrease }: Props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increase} type='button'>
        증가
      </button>
      <button onClick={decrease} type='button'>
        감소
      </button>
    </div>
  );
}

export default TestCodeComponent;
