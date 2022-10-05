import "./tempToggle.css";

interface Props {
  handleToggleTemp: () => void;
}

const TempToggle = (props: Props): JSX.Element => {
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
