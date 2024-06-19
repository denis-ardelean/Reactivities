import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent content={""} />;

  return (
    <>
      <Card
        variant="outlined"
        sx={{ maxHeight: "max-content", maxWidth: "100%", mx: "auto" }}
      >
        <CardOverflow>
          <AspectRatio>
            <img
              src={`./assets/categoryImages/${activity.category}.jpg`}
              loading="lazy"
              alt=""
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
              onClick={() => openForm(activity.id)}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              onClick={cancelSelectedActivity}
            >
              Cancel
            </Button>
          </CardActions>
        </CardOverflow>
      </Card>
    </>
  );
}
