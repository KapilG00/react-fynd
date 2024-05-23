import { useState } from "react";
import TemperatureInput from "./TemperatureInput ";
import BoilingVerdict from "./BoilingVerdict";
import { tryConvert, toCelsius, toFahrenheit } from "./helperFunctions";

function Calculator() {
  const [scale, setScale] = useState("c");
  const [temperature, setTemperature] = useState("");

  console.log("Start of CALCULATOR component!!");

  function handleCelsiusChange(temperature) {
    setScale("c");
    console.log("Setting scale inside celsius change handler!!");
    setTemperature(temperature);
    console.log("Setting temperature inside celsius change handler!!");
  }

  function handleFahrenheitChange(temperature) {
    setScale("f");
    console.log("Setting scale inside fahrenheit change handler!!");
    setTemperature(temperature);
    console.log("Setting temperature inside fahrenheit change handler!!");
  }

  console.log("Scale:", scale);

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  console.log("celsius:", celsius);
  console.log("fahrenheit:", fahrenheit);

  return (
    <>
      <h3>Calculator!!</h3>

      {console.log("Inside calculator component UI")}

      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    </>
  );
}

export default Calculator;
