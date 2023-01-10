import { useRouter } from "next/router";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Menu, Favorite, ChatBubble } from "@mui/icons-material";
import NavItems from "./NavItems";

const Navbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const NavbarDetails = () => {
    return (
      <Box>
        <Box>
          <Typography component="h1">
            Lost on the Road to the mountains
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box>
            <Box display="flex">
              <Typography>By: Alan Tiger</Typography>
              <Typography>At: Paris, France</Typography>
            </Box>
            <Typography>On: March 31st, 2016</Typography>
          </Box>
          <Box>
            <Button startIcon={<Favorite />} color="inherit">
              4.5K
            </Button>
            <Button startIcon={<ChatBubble />} color="inherit">
              1.1K
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {router.pathname === "/details" && <NavbarDetails />}

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <NavItems />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
