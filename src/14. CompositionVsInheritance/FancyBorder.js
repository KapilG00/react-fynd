function FancyBorder(props) {
  console.log("props:", props);
  const { color, children } = props;
  return (
    <>
      <div className={"FancyBorder FancyBorder-" + color}>{children}</div>
    </>
  );
}

export default FancyBorder;
