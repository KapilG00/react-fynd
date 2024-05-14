function Child(props) {
  const { childCommunicator } = props;

  return (
    <>
      <h3>Child!!</h3>
      <button
        onClick={() => {
          childCommunicator("Hey parent, i am fine!!");
        }}
      >
        Communication Device
      </button>
    </>
  );
}

export default Child;
