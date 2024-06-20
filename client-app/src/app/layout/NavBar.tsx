import { AppBar, Toolbar } from "@mui/material";
import { Box, Typography, Button, Divider } from "@mui/joy";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navStyles = {
    textDecoration: "none",
    width: "auto",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRadius: "sm",
    px: "10px",
    "&:hover": {
      backgroundColor: "hsl(0, 0%, 100%, 0.1)",
    },
    "&.active": {
      backgroundColor: "hsl(0, 0%, 100%, 0.3)",
    },
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Box display="flex" sx={navStyles} component={NavLink} to={"/"}>
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
              Reactivities
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{ mx: "10px", my: "5px", bgcolor: "white" }}
          />
          <Box
            display="flex"
            sx={navStyles}
            component={NavLink}
            to={"/activities"}
          >
            <Typography
              textColor="background.body"
              level="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Activities
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            sx={{ mx: "10px", my: "5px", bgcolor: "white" }}
          />
          <Box display="flex" sx={{ alignItems: "center" }}>
            <Button color="success" component={NavLink} to={"/createActivity"}>
              Create Activity
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
