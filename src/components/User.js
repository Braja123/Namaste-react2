import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  useEffect(() => {}, [count, count2]);
  return (
    <>
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Name: {props.name}</h2>
        <h2>Location: </h2>
      </div>
    </>
  );
};

export default User;
