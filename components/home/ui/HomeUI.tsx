import React from "react";
import Image from "next/image";

import {
  useTheme,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  List,
  ListItemButton,
  ListItem,
  Box,
} from "@mui/material";
import { blue } from "@mui/material/colors";

export default function HomeUI() {
  const theme = useTheme();
  const matchesSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      direction={matchesSmallerScreen ? "column-reverse" : "row"}
      justifyContent="start"
      sx={{ height: "100vh", pt: 9 }}
    >
      <Grid
        p={8}
        container
        alignItems="center"
        justifyContent="flex-end"
        sx={{ width: { xs: "100%", md: "50%" } }}
      >
        <Stack
          sx={{
            maxWidth: { xs: "100%", lg: "80%" },
            m: "auto 0",
            height: "fit-content",
          }}
        >
          <Typography component="h2" variant="h4">
            About
          </Typography>
          <Typography sx={{ color: blue[400] }} component="span" variant="h3">
            Shiftkey People
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "md", lg: "lg" },
              color: theme.palette.grey[500],
            }}
          >
            A lot is happening in both technology and corporate culture today
            and the pace of development is high. We at Shiftkey are digital
            innovators, who like change and are driven by development. With us,
            you will find expertise in IT with a focus on the web.
          </Typography>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            {techStackButton("Front-end developers")}
            {techStackButton("Back-end developers")}
            {techStackButton("Fullstack developers")}
            {techStackButton("QA Testers")}
          </List>
        </Stack>
      </Grid>
      <Grid
        sx={{
          zIndex: -1,
          width: { xs: "100%", md: "50%" },
          height: { xs: "40vh", md: "100vh" },
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: { xs: "relative", md: "static" },
          }}
        >
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            layout="fill"
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Box>
      </Grid>
    </Grid>
  );

  function techStackButton(text: string) {
    return (
      <ListItem
        disablePadding
        sx={{
          width: "fit-content",
          display: "inline",
          marginTop: "10px",
          marginBottom: "15px",
          marginRight: "6px",
        }}
      >
        <ListItemButton
          sx={{
            width: "fit-content",
            display: { xs: "block", md: "inline" },
            backgroundColor: theme.palette.grey[300],
            border: `1px solid ${theme.palette.grey[400]}`,
            borderRadius: "6px",
          }}
        >
          {text}
        </ListItemButton>
      </ListItem>
    );
  }
}
