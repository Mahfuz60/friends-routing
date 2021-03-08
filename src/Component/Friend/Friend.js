import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  const handleClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url);
  };
  const friendStyle = {
    border: "1px solid tomato",
    borderRadius: "5px",
    textAlign: "center",
    margin: "20px",
    padding: "10px",
    backgroundColor: "silver",
  };

  const mainButton = {
    width: "200px",
    height: "50px",
    backgroundColor: "tomato",
    padding: "5px",
    borderStyle: "none",
    borderRadius: "5px",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  };
  return (
    <div style={friendStyle}>
      <h3>Name:{name}</h3>
      <h4>Email:{email}</h4>
      <button
        style={mainButton}
        onClick={() => {
          handleClick(id);
        }}
      >
        Show Details
      </button>
    </div>
  );
  // {<h5><Link to={`/friend/${id}`}></Link></h5>} =>button use system-1
};

export default Friend;
