import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

const Details = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUserData(data.users));
  }, []);

  return (
    <>
      <h1>Details</h1>
      {userData?.map((user, index) => {
        return <UserCard user={user} key={index} />;
      })}
    </>
  );
};

export default Details;
