import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListDivider,
  ListItem,
  Sheet,
  Typography,
} from "@mui/joy";
import { Fragment, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;
  const [target, setTarget] = useState("");

  function handleActivityDelete(id: string) {
    setTarget(id);
    deleteActivity(id);
  }

  return (
    <>
      <List
        variant="outlined"
        sx={{
          borderRadius: "sm",
          backgroundColor: "white",
          display: "flex",
          flex: "1",
        }}
      >
        {activitiesByDate.map((activity) => (
          <Fragment key={activity.id}>
            <ListItem key={activity.id}>
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: "transparent",
                  border: 0,
                }}
              >
                <CardContent sx={{ margin: 0, padding: 0 }}>
                  <Typography level="title-md">{activity.title}</Typography>
                  <Typography level="body-sm" color="neutral">
                    {activity.date}
                  </Typography>
                  <Typography level="body-md">
                    {activity.description}
                  </Typography>
                  <Typography level="body-md" sx={{ mt: "2px" }}>
                    {activity.city}, {activity.venue}
                  </Typography>
                </CardContent>
                <CardActions sx={{ margin: 0, padding: 0 }}>
                  <Box
                    display="flex"
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Sheet variant="outlined" sx={{ borderRadius: "sm" }}>
                      <Typography sx={{ flexGrow: 1, margin: 0.5 }}>
                        {activity.category}
                      </Typography>
                    </Sheet>
                    <Box>
                      <Button
                        component={NavLink}
                        to={`/activities/${activity.id}`}
                        sx={{ mr: 1 }}
                      >
                        View
                      </Button>
                      <Button
                        loading={loading && target === activity.id}
                        onClick={() => handleActivityDelete(activity.id)}
                        color="danger"
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </ListItem>
            <ListDivider inset="gutter" />
          </Fragment>
        ))}
      </List>
    </>
  );
});
