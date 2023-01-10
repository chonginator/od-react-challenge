import { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const Details = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>Details</h1>
      {data?.users?.map((user, index) => {
        return (
          <Card key={index} sx={{ display: "flex" }}>
            <CardMedia
              image={`/images/${user.photoFilename}`}
              alt={`${user.name}'s profile icon`}
              sx={{ width: 100, height: 100 }}
            />
            <CardContent>
              <Typography component="h2">{user.name}</Typography>
              <Typography component="p">
                These is very adorable. I am loving this. Sometimes this picture
                just are beautiful!
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default Details;
