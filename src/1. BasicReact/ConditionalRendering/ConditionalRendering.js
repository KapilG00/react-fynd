import { useState } from "react";

function ConditionalRendering() {
  const [isDay, setDay] = useState(false);

  function toggleDayNight() {
    setDay((oldState) => !oldState);
  }

  return (
    <>
      <h1>Conditional Rendering!!</h1>

      {isDay ? (
        <div>Currently is day time.</div>
      ) : (
        <div>Currently is night time.</div>
      )}

      <button onClick={toggleDayNight}>Toggle Day & Night</button>
    </>
  );
}

export default ConditionalRendering;
