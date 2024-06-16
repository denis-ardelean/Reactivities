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
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
  onCancelSelectActivity: () => void;
  onOpenForm: (id: string) => void;
}

export default function ActivityDetails({
  activity,
  onCancelSelectActivity,
  onOpenForm
}: Props) {
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
            <Button onClick={() => onOpenForm(activity.id)} variant="outlined" color="primary" fullWidth>
              Edit
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              fullWidth
              onClick={onCancelSelectActivity}
            >
              Cancel
            </Button>
          </CardActions>
        </CardOverflow>
      </Card>
    </>
  );
}
