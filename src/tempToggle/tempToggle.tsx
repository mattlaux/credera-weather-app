import "./tempToggle.css";

interface Props {
  toggleTemp: () => void;
}

const TempToggle = (props: Props): JSX.Element => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={props.toggleTemp} />
      <span className="slider round">
        <em className="celsius">C°</em>
        <em className="fahrenheit">F°</em>
      </span>
    </label>
  );
};

export default TempToggle;
