function HigherOrderComponent(props) {
  // children prop (i.e. NewsComponent) we don't have to send it to HigherOrderComponent, it will automatically infer itself.
  const { children, date } = props;

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          margin: "20px",
          background: "orange",
        }}
      >
        <p>Date: {date}</p>
        <p>Author: Kapil Gupta</p>
        {children}
      </div>
    </>
  );
}

export default HigherOrderComponent;
