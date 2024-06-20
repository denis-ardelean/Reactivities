import { Container } from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path={"/*"}
        element={
          <>
            <NavBar />
            <Container sx={{ mt: "7em" }}>
              <Routes>
                <Route path="/activities" element={<ActivityDashboard />} />
                <Route path="/activities/:id" element={<ActivityDetails />} />
                {["/createActivity", "/manage/:id"].map((path) => (
                  <Route key={path} path={path} element={<ActivityForm />} />
                ))}
              </Routes>
            </Container>
          </>
        }
      />
    </Routes>
  );
}

export default observer(App);
