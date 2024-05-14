import ListItems from "./ListItems";

function ListComponent(props) {
  const { students } = props;

  return (
    <>
      <h1>List Component!!</h1>

      {students.map((student) => {
        return <ListItems student={student} />;
      })}
    </>
  );
}

export default ListComponent;
