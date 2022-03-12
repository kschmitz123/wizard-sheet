interface Props {
  color: string;
  number: number;
}

export const NumberInput = ({ color, number }: Props) => {
  return (
    <input
      name={`${color}${number}`}
      style={{ background: `var(--${color}-gradient)` }}
      type="text"
    />
  );
};
