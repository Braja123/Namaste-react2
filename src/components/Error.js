import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div>Oppss something went wrong...</div>
      <h3>{err.data}</h3>
    </>
  );
};

export default Error;
