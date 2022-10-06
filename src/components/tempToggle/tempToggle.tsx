import "./tempToggle.css";

type TempToggleProps = {
  handleToggleTemp: () => void;
};

const TempToggle = (props: TempToggleProps): JSX.Element => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={props.handleToggleTemp} />
      <span className="slider round">
        <em className="celsius">C°</em>
        <em className="fahrenheit">F°</em>
      </span>
    </label>
  );
};

export default TempToggle;
