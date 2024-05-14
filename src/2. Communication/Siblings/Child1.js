function Child1(props) {
  const { childCommunicator } = props;

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "10px",
          background: "orange",
        }}
      >
        <h3>Child1!!</h3>
        <button
          onClick={() => {
            childCommunicator("Hey parent, i am fine!!", 32);
          }}
        >
          Communication Device
        </button>
      </div>
    </>
  );
}

export default Child1;
