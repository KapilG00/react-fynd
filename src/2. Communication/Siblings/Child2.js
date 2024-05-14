function Child2(props) {
  const { child1Marks } = props;

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
        <h3>Child2!!</h3>
        {child1Marks}
      </div>
    </>
  );
}

export default Child2;
