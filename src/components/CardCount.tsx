
type CardCountProps = {
  label: string,
  counter: number
}

const CardCount = ({label, counter}: CardCountProps) => {
  return (
    <div className="flex-1 flex justify-between py-10 px-4  rounded-md border shadow-sm">
      <span className="flex-1 text-lg text-black font-bold leading-5 ">
        {label}
      </span>
      <span className="text-primary text-2xl font-bold">{counter}</span>
    </div>
  );
};

export default CardCount;
