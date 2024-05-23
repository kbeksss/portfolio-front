import { useField } from "formik";

const DateInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  const handleChange = (e) => {
    const date = new Date(e.target.value);
    setValue(date.toISOString());
  };

  return (
    <div>
      <label>{label}</label>
      <input type="date" {...field} {...props} onChange={handleChange} />
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DateInput;
