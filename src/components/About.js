import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");

    return (
      <>
        <div>About us page</div>
        <UserClass name={"Gopal"} location={"Odisha"} />
        {/* <UserClass name={"Elon"} location={"US"} /> */}
      </>
    );
  }
}

export default About;
