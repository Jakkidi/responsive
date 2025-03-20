import { Mail, Notifications, ElectricBolt } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <Typography variant="h6" className="hidden sm:block">
            Responsive Design
          </Typography>
          <ElectricBolt className="block sm:hidden" />
        </div>

        <div className="bg-white p-0 px-3 rounded w-2/5">
          <InputBase placeholder="search..." />
        </div>

        <Box className="hidden sm:flex items-center gap-5">
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            className="w-8 h-8 cursor-pointer"
            src="https://images5.alphacoders.com/687/687579.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Box>

        <Box
          className="flex sm:hidden items-center gap-3 cursor-pointer"
          onClick={(e) => setOpen(true)}
        >
          <Avatar
            className="w-8 h-8"
            src="https://images5.alphacoders.com/687/687579.jpg"
          />
          <Typography variant="span">John</Typography>
        </Box>
      </Toolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
