export function tryConvert(temperature, convert) {
  console.log("Temperature:", temperature);
  console.log("Convert function:", convert);
  console.log("INSIDE TRY CONVERT!!");
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) {
    console.log("INSIDE IF OF TRY CONVERT!!");
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export function toCelsius(fahrenheit) {
  console.log("INSIDE TO CELSIUS helper function!!");
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  console.log("INSIDE TO FAHRENHEIT helper function!!");
  return (celsius * 9) / 5 + 32;
}
