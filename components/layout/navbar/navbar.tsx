import { ReactNode, useEffect, useState } from "react";

import {
  useTheme,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Stack,
  styled,
  IconButton,
  Button,
  Toolbar,
  List,
  MenuItem,
  Divider,
  Avatar,
} from "@mui/material";

import Link from "next/link";
import Image from "next/image";
import shiftkey from "./logos/shiftkey.png";
// const Links = ["Dashboard", "Projects", "Team"];
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
    <Box
      px={2}
      py={1}
      sx={{
        "&:hover": {
          backgroundColor: theme.palette.grey[400],
        },
      }}
    >
      <Link href={path}>{children}</Link>
    </Box>
  );
};

// interface INavbarProps {
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
// }

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = props;

  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
    return () => {};
  }, [isOpen]);
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[200],
        width: "100vw",
        height: "fit-content",
      }}
      px={4}
    >
      <Grid
        container
        sx={{ height: 16 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <IconButton
          size="medium"
          // icon={isOpen ? "close" : "open"}
          aria-label={"Open Menu"}
          sx={{ md: "none" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          menu
        </IconButton>
        <Stack spacing={3} alignItems={"center"} direction="row">
          <Box>
            <Image
              src={shiftkey}
              alt="Picture of the author"
              width="90px"
              height="70px"
            />
          </Box>
          <Stack
            component={"nav"}
            spacing={4}
            direction="row"
            display={{ base: "none", md: "flex" }}
          >
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Stack>
        <Grid alignItems={"center"}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ mr: 4 }}
            // leftIcon={<AddIcon />}
          >
            Action
          </Button>
          <Toolbar>
            <Button>
              <Avatar
                sx={{ width: 34, height: 34 }}
                src={
                  "https://www.istockphoto.com/foto/developers-at-work-gm636609180-113033579"
                }
              />
            </Button>
            <List>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <Divider />
              <MenuItem>Link 3</MenuItem>
            </List>
          </Toolbar>
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
    </Box>
  );
}
