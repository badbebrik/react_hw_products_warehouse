import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, IconButton, Box, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FaBox from "@mui/icons-material/Inventory2";
import FaWarehouse from "@mui/icons-material/Storefront";
import FaInfoCircle from "@mui/icons-material/Info";
import FaUser from "@mui/icons-material/Person";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img src="/logo.png" alt="Логотип" style={{ height: 40, marginRight: 10 }} />
          <Typography variant="h6" color="primary">
            MyWarehouse
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <Box display={{ xs: "none", md: "flex" }} gap={2}>
          <Tooltip title="Товары">
            <IconButton color="inherit">
              <FaBox />
            </IconButton>
          </Tooltip>
          <Tooltip title="Склады">
            <IconButton color="inherit">
              <FaWarehouse />
            </IconButton>
          </Tooltip>
          <Tooltip title="О системе">
            <IconButton color="inherit">
              <FaInfoCircle />
            </IconButton>
          </Tooltip>
          <Tooltip title="Личная страница">
            <IconButton color="inherit">
              <FaUser />
            </IconButton>
          </Tooltip>
          <Tooltip title="Меню">
            <IconButton edge="end" color="inherit" onClick={onMenuToggle}>
              <MenuIcon />
            </IconButton>
        </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;