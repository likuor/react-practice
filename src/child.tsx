type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
} | null;

type ChildProps = {
  todos: TodoType[] | null;
};
const Child = ({ todos }: ChildProps) => {
  return (
    <div className='mt-8'>
      {todos?.map(
        (todo) =>
          todo && (
            <p key={todo.id} className='p-2'>
              {todo.title}
            </p>
          )
      )}
    </div>
  );
};

export default Child;
