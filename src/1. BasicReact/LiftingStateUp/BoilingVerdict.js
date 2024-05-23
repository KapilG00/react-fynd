function BoilingVerdict(props) {
  console.log("Start of BOILING VERDICT component!!");
  const { celsius } = props;

  return (
    <>
      <h3>Boiling Verdict!!</h3>

      {console.log("Inside boiling verdict UI!!")}

      {celsius >= 100 ? (
        <p>The water would boil.</p>
      ) : (
        <p>The water would not boil.</p>
      )}
    </>
  );
}

export default BoilingVerdict;
