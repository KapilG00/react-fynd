const SCALE_NAMES = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  console.log("Start of TEMPERATURE INPUT component!!");
  const { scale, temperature, onTemperatureChange } = props;

  function handleTemperatureChange(event) {
    console.log("Inside handle temperature change handler!!");
    onTemperatureChange(event.target.value);
  }

  return (
    <>
      <h3>Temperature Input!!</h3>

      {console.log("Inside temperature input UI!!")}

      <fieldset>
        <legend>Enter temperature in {SCALE_NAMES[scale]}:</legend>
        <input value={temperature} onChange={handleTemperatureChange} />
      </fieldset>
    </>
  );
}

export default TemperatureInput;
