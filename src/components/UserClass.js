import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        // name: "Dummy",
        // location: "Default",
        // avatar_url: "https://dummy.png",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Braja123");
    const json = await data.json(data);
    this.setState({
      userInfo: json,
    });
    // console.log(json);
    console.log(this.props.name + "Child componentDidMount");

    this.timer = setInterval(() => {
      console.log("namaste React");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("inside componentWillUnmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <>
        <div className="user-card">
          <img src={avatar_url} alt="avatar" />
          <h2>Name: {name}</h2>
          <h2>Location: {location}</h2>
        </div>
      </>
    );
  }
}

export default UserClass;
