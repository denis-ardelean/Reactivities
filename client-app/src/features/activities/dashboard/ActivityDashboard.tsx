import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Typography } from "@mui/joy";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry, loadActivities]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities ..." />;

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <ActivityList />
        </Grid>
        <Grid item xs={5}>
          <Typography level="h2"> Activity Filters </Typography>
        </Grid>
      </Grid>
    </>
  );
});
