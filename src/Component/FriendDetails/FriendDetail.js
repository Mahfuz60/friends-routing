import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  // const {name,email,phone,website}=props.friend;

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  const friendDetailStyle = {
    border: "3px solid tomato",
    width: "300px",
    textAlign: "center",
    marginLeft: "200px",
    padding: "10px",
    margin: "20px",
    backgroundColor: "silver",
  };

  return (
    <div style={friendDetailStyle}>
      <h3>This is Friend Details:{friendId}</h3>
      <h3>Name:{friend.name}</h3>
      <h5>Email:{friend.email}</h5>
      <h5>Phone:{friend.phone}</h5>
      <h5>Company:{friend.website}</h5>
    </div>
  );
};

export default FriendDetail;
