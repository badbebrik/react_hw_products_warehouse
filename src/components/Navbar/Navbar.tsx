import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, IconButton, Box, Button, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FaBox from "@mui/icons-material/Inventory2";
import FaWarehouse from "@mui/icons-material/Storefront";
import FaInfoCircle from "@mui/icons-material/Info";
import FaUser from "@mui/icons-material/Person";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface NavbarProps {
  onMenuToggle: () => void;
}

interface NavItem {
  label: string;
  icon: React.ReactElement;
  onClick?: () => void;
}

const Navbar: FC<NavbarProps> = ({ onMenuToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems: NavItem[] = [
    {
      label: "Товары",
      icon: <FaBox />,
      onClick: () => {},
    },
    {
      label: "Склады",
      icon: <FaWarehouse />,
      onClick: () => {},
    },
    {
      label: "О системе",
      icon: <FaInfoCircle />,
      onClick: () => {},
    },
    {
      label: "Личная страница",
      icon: <FaUser />,
      onClick: () => {},
    },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={4}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src="/logo.png"
            alt="Логотип"
            style={{ height: 40, marginRight: 10 }}
          />
          <Typography variant="h6" color="primary">
            MyWarehouse
          </Typography>
        </Box>

        <Box flexGrow={1} />

        <Box display="flex" gap={2} alignItems="center">
          {navItems.map((item) =>
            isMobile ? (
              <Tooltip title={item.label} key={item.label}>
                <IconButton
                  color="inherit"
                  onClick={item.onClick}
                  aria-label={item.label}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>
            ) : (
              <Button
                key={item.label}
                startIcon={item.icon}
                color="inherit"
                onClick={item.onClick}
                sx={{ textTransform: "none" }}
              >
                {item.label}
              </Button>
            )
          )}
        </Box>

        <Box display="flex" alignItems="center" ml={2}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onMenuToggle}
            aria-label="Открыть меню"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
