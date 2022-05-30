import { ReactNode, useEffect, useState } from "react";

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
} from "@mui/material";

import Image from "next/image";
import shiftkey from "./logos/shiftkey.png";
import AccountMenu from "../../custom-components/account-menu";

const Links = [
  {
    name: "START",
    path: "/",
  },
  {
    name: "THE TEAM",
    path: "/team/",
  },
  {
    name: "WORK WITH US",
    path: "/workwithus/",
  },
  {
    name: "CONTACT US",
    path: "/contact-us/",
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

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    return () => {};
  }, [isOpen]);
  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.grey[200],
        width: "100vw",
        height: "75px",
        px: 4,
      }}
    >
      <Grid container justifyContent={"space-between"}>
        {/* <IconButton
          size="medium"
          // icon={isOpen ? "close" : "open"}
          aria-label={"Open Menu"}
          sx={{ md: "none" }}
          // onClick={() => setIsOpen(!isOpen)}
        >
          menu
        </IconButton> */}
        <Stack alignItems={"center"} direction="row">
          <Box>
            <Image
              src={shiftkey}
              alt="Picture of the author"
              width="90px"
              height="70px"
            />
          </Box>
          <Toolbar sx={{ pr: 0 }}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Toolbar>
        </Stack>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          sx={{ width: "fit-content" }}
        >
          <Button
            variant="contained"
            color="secondary"
            // size="small"
            sx={{ mr: 2 }}
            startIcon={"+"}
          >
            Action
          </Button>
          <AccountMenu tooltip="this is a menu">
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <Divider />
            <MenuItem>Link 3</MenuItem>
          </AccountMenu>
        </Grid>
      </Grid>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack component={"nav"} spacing={4}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </AppBar>
  );
}
