import { Suspense, useState } from 'react';
import Child from './child';

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Other = () => {
  console.log('Otherコンポーネントがレンダリングされました！');
  const [todosData, setTodosData] = useState<TodoType[] | null>(null);

  const fetchApi = async () => {
    const res = fetch('https://jsonplaceholder.typicode.com/todos');
    const res2 = fetch('https://jsonplaceholder.typicode.com/todos');

    try {
      const [promise, promise2] = await Promise.all([res, res2]);
      const data = await promise.json();
      const data2 = await promise2.json();
      console.log(data, data2);
      setTodosData(data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className='mt-8'>
      <p className='text-center'>イベントハンドラ以外の処理</p>
      <div className='mt-6 text-center'>
        <button
          className='bg-slate-600 text-white py-2 px-5 mt-5'
          onClick={fetchApi}
        >
          API取得
        </button>
        <Suspense fallback={<div>Loading =======</div>}>
          <div className='mt-8'>
            <Child todos={todosData} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Other;
