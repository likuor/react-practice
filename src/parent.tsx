import { useCallback, useMemo, useState } from 'react';
import Memo from './memo';

const Parent = () => {
  const [val, setVal] = useState('');

  const [count, setCount] = useState(0);
  const double = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 3;
  };

  const handleClick = useCallback(() => {
    console.log('eee');
  }, []);

  const doubleCount = useMemo(() => double(count), [count]);

  return (
    <div>
      Parent
      <input onChange={(e) => setVal(e.target.value)} />
      <Memo handleClick={handleClick} />
      <p>
        {count} , {doubleCount}
      </p>
      <button onClick={() => setCount(count + 1)}>button</button>
    </div>
  );
};

export default Parent;
