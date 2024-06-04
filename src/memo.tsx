// import { useEffect, useMemo, useState } from 'react';

import React from 'react';

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

const Memo = React.memo((props: { handleClick: () => void }) => {
  // const cal = 1000000000000000000 * 5000000;
  // console.log(cal);

  // const fetchApi = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await res.json();
  //   setTodosData(data);
  // };

  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // const filterd = todosData?.filter((item) => item.id < 10);
  // console.log(filterd);

  return <button onClick={props.handleClick}>Memoaaaaaaaa</button>;
});

export default Memo;
