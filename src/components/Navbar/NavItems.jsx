import Link from "next/link";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";

const NavItems = () => {
  return (
    <List>
      <ListItem>
        <ListItemButton>
          <Link href="/">
            <ListItemText>Gallery</ListItemText>
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <Link href="/details">
            <ListItemText>Details</ListItemText>
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default NavItems;
