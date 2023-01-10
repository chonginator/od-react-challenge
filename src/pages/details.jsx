import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { AccessTime, ChatBubble, Favorite } from "@mui/icons-material";

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
        return (
          <Card key={index} sx={{ display: "flex" }}>
            <CardMedia
              image={`/images/${user.photoFilename}`}
              alt={`${user.name}'s profile icon`}
              sx={{ width: 100, height: 100 }}
            />
            <Box>
              <CardContent>
                <Typography component="h2">{user.name}</Typography>
                <Typography component="p">
                  These is very adorable. I am loving this. Sometimes this
                  picture just are beautiful!
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  <AccessTime />
                  <Typography>10 minutes ago</Typography>
                </Box>
                <CardActions>
                  <Button startIcon={<Favorite />}>
                    <Typography>4.5K</Typography>
                  </Button>
                  <Button startIcon={<ChatBubble />}>
                    <Typography>1.1K</Typography>
                  </Button>
                </CardActions>
              </Box>
            </Box>
          </Card>
        );
      })}
    </>
  );
};

export default Details;
