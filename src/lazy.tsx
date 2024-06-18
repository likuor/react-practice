type Props = {
  markdown: string;
};

const Lazy = ({ markdown }: Props) => {
  return <div>Lazy{markdown}</div>;
};

export default Lazy;
