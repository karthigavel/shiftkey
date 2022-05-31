import React from "react";
import Image from "next/image";

import { useTheme, Grid, useMediaQuery, Box } from "@mui/material";

interface ISectionImageRightProps {
  textSection: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export default function SectionImageRight(props: ISectionImageRightProps) {
  const { textSection, imageSrc, imageAlt } = props;
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
        {textSection}
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
            alt={imageAlt}
            objectFit={"cover"}
            layout="fill"
            src={imageSrc}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
