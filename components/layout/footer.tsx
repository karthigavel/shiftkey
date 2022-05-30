import Image from "next/image";

import {
  useTheme,
  Grid,
  Box,
  Typography,
  useMediaQuery,
  Stack,
  styled,
  IconButton,
} from "@mui/material";

const StyledBox = styled(Box)`
  max-width: 450px;
  min-width: 300px;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const StyledTypography = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.grey[300]};
    margin-top: 4px;
`
);

export const Footer = () => {
  const theme = useTheme();
  const matchesSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.grey[900],
        px: 3,
        color: theme.palette.common.white,
      }}
      alignItems="center"
    >
      <Stack
        direction={matchesSmallerScreen ? "column" : "row"}
        justifyContent="space-evenly"
        sx={{
          maxWidth: "1300px",
          minHeight: "300px",
          width: "100vw",
          pt: "95px",
          pb: "20px",
          margin: "0 auto",
        }}
      >
        <StyledBox>
          <Image
            alt={"Shiftkey logo"}
            src={
              "https://shiftkey.se/wp-content/uploads/2019/08/SK_MHE_1_white-280x300.png"
            }
            width={120}
            height={128}
          />
        </StyledBox>
        <StyledBox>
          <StyledTypography>Shiftkey People AB</StyledTypography>
          <StyledTypography>Isafjordsgatan 19</StyledTypography>
          <StyledTypography>16440 Kista</StyledTypography>
        </StyledBox>
        <StyledBox>
          <Typography
            component="h2"
            variant="h6"
            sx={{ fontWeight: "700", pb: 3 }}
          >
            Uppdrag?
          </Typography>
          <StyledTypography>Har du ett uppdrag åt oss?</StyledTypography>
          <StyledTypography>
            Kontakta Thomas Berglund VD Shiftkey
          </StyledTypography>
        </StyledBox>
      </Stack>
      <Grid width={"100vw"} justifyContent="flex-end">
        <IconButton
          //   color={theme.palette.grey[600]}
          size="medium"
          sx={{
            float: "right",
            color: theme.palette.common.white,
            p: 3,
          }}
        >
          up
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Footer;
