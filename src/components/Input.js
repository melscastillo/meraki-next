import { Input } from "antd";

const InputGeneral = (props) => {
  const { name, value, type, callback } = props;

  const handlerInput = ({ target: { value, name } }) => {
    callback(name, value);
  };

  return (
    <Input
      type={type ? type : "text"}
      name={name}
      value={value}
      onChange={handlerInput}
    />
  );
};

export default InputGeneral;
