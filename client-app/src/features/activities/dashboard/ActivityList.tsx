import { Typography } from "@mui/joy";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Box } from "@mui/material";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Box key={group} sx={{ my: 2 }}>
          <Typography level="title-sm" sx={{ color: "teal", mb: 0.5, ml: 1 }}>
            {group}
          </Typography>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Box>
      ))}
    </>
  );
});
