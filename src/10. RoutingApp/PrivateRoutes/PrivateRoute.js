function PrivateRoute(props) {
  const { children } = props;

  const isAuthenticated = true;
  return (
    <>
      {!isAuthenticated && <div>Not Authenticated!!</div>}
      {isAuthenticated && <div>{children}</div>}
    </>
  );
}

export default PrivateRoute;
