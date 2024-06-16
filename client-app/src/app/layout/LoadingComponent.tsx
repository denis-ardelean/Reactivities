import { Box, CircularProgress, Typography } from "@mui/joy";
import { Backdrop } from "@mui/material";

interface Props {
  inverted?: boolean;
  content: string;
}

export default function LoadingComponent({
  inverted = true,
  content = "Loading ...",
}: Props) {
  return (
    <Backdrop open={true} invisible={inverted}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress size="md" />
        <Typography
          level="h4"
          sx={{
            justifyContent: "center",
            position: "fixed",
            top: "55%",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Backdrop>
  );
}
