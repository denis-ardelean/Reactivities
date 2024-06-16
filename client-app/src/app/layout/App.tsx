import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter(
            (uneditedActivity) => uneditedActivity.id !== activity.id
          ),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter((activity) => activity.id !== id)]);
  }

  return (
    <>
      <NavBar onOpenForm={handleFormOpen} />
      <Container sx={{ mt: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          onSelectActivity={handleSelectActivity}
          onCancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          onOpenForm={handleFormOpen}
          onCloseForm={handleFormClose}
          onCreateOrEdit={handleCreateOrEditActivity}
          onDeleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
