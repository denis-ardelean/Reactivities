import { Typography } from "@mui/joy";
import { Link } from "react-router-dom";

export default function HomePare() {
  return (
    <>
      <Typography level="h1" sx={{ mt: "7em" }}>
        Home Page
      </Typography>
      <Typography level="h3">
        Go to <Link to="/activities">Activities</Link>
      </Typography>
    </>
  );
}
