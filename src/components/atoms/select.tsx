type IOptions = {
  name: string;
  value: string;
};
interface ISelect {
  id?: string;
  options?: IOptions[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}
const SelectComponent: React.FC<ISelect> = ({
  id,
  value,
  options,
  onChange,
}) => {
  return (
    <div>
      <select id={id} value={value} onChange={onChange}>
        {options &&
          options.map((item, i) => {
            return (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectComponent;
