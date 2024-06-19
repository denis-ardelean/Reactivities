import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <ActivityList />
        </Grid>
        <Grid item xs={5}>
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Grid>
      </Grid>
    </>
  );
});
