import {
  Grid,
} from "@mui/joy";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity)
    return <LoadingComponent content={"Loading activity ..."} />;

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <ActivityDetailedHeader activity={activity} />
          <ActivityDetailedInfo />
          <ActivityDetailedChat />
        </Grid>
        <Grid xs={5}>
          <ActivityDetailedSidebar />
        </Grid>
      </Grid>
      {/* <Card
        variant="outlined"
        sx={{ maxHeight: "max-content", maxWidth: "100%", mx: "auto" }}
      >
        <CardOverflow>
          <AspectRatio>
            <img
              src={`${process.env.PUBLIC_URL}/assets/categoryImages/${activity.category}.jpg`}
              loading="lazy"
              alt="something"
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{activity.title}</Typography>
          <Typography level="body-sm">{activity.date}</Typography>
          <Typography level="body-md">{activity.description}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "white" }}>
          <Divider inset="context" />
          <CardActions orientation="horizontal">
            <Button
              component={Link}
              to={`/manage/${activity.id}`}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Edit
            </Button>
            <Button
              component={Link}
              to={`/activities`}
              variant="outlined"
              color="neutral"
              fullWidth
            >
              Cancel
            </Button>
          </CardActions>
        </CardOverflow>
      </Card> */}
    </>
  );
});
