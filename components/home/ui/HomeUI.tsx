import React from "react";

import {
  useTheme,
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItem,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import SectionImageRight from "../../section-containers/section-image-right";

export default function HomeUI() {
  const theme = useTheme();

  return (
    <SectionImageRight
      textSection={
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
      }
      imageAlt="Login Image"
      imageSrc="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
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
