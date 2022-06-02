import { ReactNode, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  useTheme,
  Grid,
  Box,
  Stack,
  Button,
  Toolbar,
  MenuItem,
  Divider,
  Link,
  AppBar,
  useMediaQuery,
  Drawer,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";

import shiftkey from "./logos/shiftkey.png";
import AccountMenu from "../../custom-components/account-menu";

const Links = [
  {
    name: "START",
    path: "/",
    icon: "house",
  },
  {
    name: "THE TEAM",
    path: "/team/",
    icon: "users",
  },
  {
    name: "WORK WITH US",
    path: "/workwithus/",
    icon: "user-plus",
  },
  {
    name: "CONTACT US",
    path: "/contact-us/",
    icon: "paper-plane",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  const theme = useTheme();

  return (
    <Button
      component={Link}
      href={path}
      sx={{
        px: 2,
        py: 1,
        color: theme.palette.grey[900],
        "&:hover": {
          backgroundColor: theme.palette.grey[400],
        },
      }}
    >
      {children}
    </Button>
  );
};

export default function Navbar() {
  const theme = useTheme();
  const matchesSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const actionButton = (
    <Button
      variant="contained"
      color="secondary"
      // size="small"
      sx={{ mr: 2 }}
      startIcon={"+"}
    >
      Action
    </Button>
  );
  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[200],
        width: "100vw",
        height: { xs: "65px", sm: "75px" },
        px: { xs: 2, sm: 4 },
        zIndex: theme.zIndex.drawer + 1,
      }}
      elevation={menuOpen ? 0 : 3}
    >
      <Grid container justifyContent={"space-between"} alignItems="center">
        {matchesSmallerScreen && (
          <Button
            onClick={handleToggleMenuOpen}
            startIcon={
              <FontAwesomeIcon
                icon={menuOpen ? "x" : "bars"}
                style={{
                  color: "black",
                }}
              />
            }
          >
            {" "}
            Menu
          </Button>
        )}
        <Stack alignItems={"center"} direction="row">
          <Box>
            <Image
              src={shiftkey}
              alt="Picture of the author"
              width={matchesSmallerScreen ? "60px" : "83px"}
              height={matchesSmallerScreen ? "55px" : "75px"}
            />
          </Box>
          {!matchesSmallerScreen && (
            <Toolbar sx={{ pr: 0 }}>
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </Toolbar>
          )}
        </Stack>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          sx={{ width: "fit-content" }}
        >
          {!matchesSmallerScreen && actionButton}
          <AccountMenu tooltip="this is a menu">
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <Divider />
            <MenuItem>Link 3</MenuItem>
          </AccountMenu>
        </Grid>
      </Grid>

      {menuOpen && (
        <Drawer
          anchor="top"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          PaperProps={{
            sx: {
              paddingTop: 8,
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          <List>
            {Links.map(({ name, path, icon }, index) => (
              <>
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={path}
                    onClick={handleToggleMenuOpen}
                  >
                    <ListItemIcon>
                      <FontAwesomeIcon icon={icon} />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
                {index !== Links.length - 1 && <Divider />}
              </>
            ))}
          </List>
          {actionButton}
        </Drawer>
      )}
    </AppBar>
  );
}
