import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Box, Grid, Stack, styled, Typography } from "@mui/material";

const Teampage = () => {
  const boxRef = useRef<HTMLDivElement>();

  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    getBoxWidth();
    return () => {
      setBoxWidth(0);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getBoxWidth);
  }, [boxRef]);

  const getBoxWidth = () => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        sx={{
          px: { xs: 3, sm: 10, md: 22 },
          pt: 22,
          pb: 15,
          maxWidth: "1300px",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ mb: 3 }}>
          Teamet<span style={{ color: "lightseagreen" }}>.</span>
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "2" }}>
          Vi är ett företag med goda utvecklingsmöjligheter som strävar efter
          att du ska få nå din fulla potential. Vi vill att varje medarbetares
          kompetens och egenskaper skall tas tillvara på bästa möjliga vis. Hos
          oss får du möjlighet att utvecklas, ta ansvar och egna initiativ.
        </Typography>
      </Grid>
      <Stack direction="row" sx={{ flexWrap: "wrap", mb: 12 }}>
        <Box
          ref={boxRef}
          sx={{
            flexGrow: 1,
            height: boxWidth,
            minWidth: "250px",
            position: "relative",
          }}
        >
          <Image
            src="https://shiftkey.se/wp-content/uploads/2019/08/Marcus2_kvadrat.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: boxWidth,
            minWidth: "250px",
            position: "relative",
          }}
        >
          <Image
            src="https://shiftkey.se/wp-content/uploads/2019/08/Sebastian1_kvadrat-1-e1568279446373.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: boxWidth,
            minWidth: "250px",
            position: "relative",
          }}
        >
          <Image
            src="https://shiftkey.se/wp-content/uploads/2019/08/Iggy_kvadrat-1.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: boxWidth,
            minWidth: "250px",
            position: "relative",
          }}
        >
          <Image
            src="https://shiftkey.se/wp-content/uploads/2019/10/stani_kvadrat_mini.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Stack>
    </>
  );
};

export default Teampage;
