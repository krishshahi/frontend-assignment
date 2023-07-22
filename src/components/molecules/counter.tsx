import AddCart from "../organisms/addCart";
interface IProps {
  increment: any;
  decrement: any;
  count: number;
}
const CounterComponent: React.FC<IProps> = ({
  increment,
  decrement,
  count,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex w-1/2 items-center py-8">
        <button
          onClick={increment}
          className="border border-solid border-gray-300 px-4 text-2xl text-green-600"
        >
          +
        </button>
        <p className="border-t border-b  border-solid border-gray-300 px-4 text-xl leading-8">
          {count}
        </p>
        <button
          onClick={decrement}
          className="border border-solid border-gray-300 px-4 text-2xl text-red-600"
        >
          -
        </button>
      </div>
      <AddCart />
    </div>
  );
};

export default CounterComponent;
