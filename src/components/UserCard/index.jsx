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

const UserCard = (props) => {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        image={`/images/${props.user.photoFilename}`}
        alt={`${props.user.name}'s profile icon`}
        sx={{ width: 100, height: 100 }}
      />
      <Box>
        <CardContent>
          <Typography component="h2">{props.user.name}</Typography>
          <Typography component="p">
            These is very adorable. I am loving this. Sometimes this picture
            just are beautiful!
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
};

export default UserCard;
