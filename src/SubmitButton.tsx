import { forwardRef } from 'react';

type Props = {
  props: { text: string };
};

export const SubmitButton = forwardRef(function SubmitButton(
  { props }: Props,
  ref
) {
  const { text } = props;

  return (
    <div>
      <button onClick={() => console.log(ref)}>{text}</button>
    </div>
  );
});
