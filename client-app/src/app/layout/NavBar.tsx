import { AppBar, Toolbar } from "@mui/material";
import { Box, Typography, Button, Divider } from "@mui/joy";

interface Props {
  onOpenForm: () => void;
}

export default function NavBar({ onOpenForm }: Props) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Box display="flex" sx={{ alignItems: "center" }}>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ height: "2rem", marginRight: "10px" }}
            />
            <Typography
              textColor="background.body"
              level="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              News
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ ml: "10px", mr: "10px", bgcolor: "white" }}
            />
          </Box>
          <Box display="flex" sx={{ alignItems: "center" }}>
            <Typography
              textColor="background.body"
              level="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Activities
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ ml: "10px", mr: "10px", bgcolor: "white" }}
            />
          </Box>
          <Box display="flex" sx={{ alignItems: "center" }}>
            <Button color="success" onClick={onOpenForm}>Create Activity</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
