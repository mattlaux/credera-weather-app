import "./tempToggle.css";

type TempToggleProps = {
  handleToggleTemp: () => void;
  tempIsCelsius: boolean;
};

const TempToggle = (props: TempToggleProps): JSX.Element => {
  return (
    <label className="switch">
      {props.tempIsCelsius ? (
        <label htmlFor="tempToggle" className="sr-only">
          Toggle temperature to Fahrenheit
        </label>
      ) : (
        <label htmlFor="tempToggle" className="sr-only">
          Toggle temperature to Celsius
        </label>
      )}
      <input type="checkbox" onClick={props.handleToggleTemp} id="tempToggle" />
      <span className="slider round">
        <em className="celsius">C°</em>
        <em className="fahrenheit">F°</em>
      </span>
    </label>
  );
};

export default TempToggle;
