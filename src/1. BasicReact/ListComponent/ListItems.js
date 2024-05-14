function ListItems(props) {
  const { student } = props;
  const { id, name, age } = student;

  return (
    <>
      <div
        // Here, "key" is used by React and it is not a part of HTML, React use it just for performance.
        key={id}
        style={{
          display: "flex",
          padding: "20px",
          border: "1px solid black",
          gap: "20px",
          margin: "10px",
          background: "orange",
        }}
      >
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
}

export default ListItems;
