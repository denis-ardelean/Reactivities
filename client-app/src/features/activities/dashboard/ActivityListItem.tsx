import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { useStore } from "../../../app/stores/store";
import { Activity } from "../../../app/models/activity";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PushPin, Schedule } from "@mui/icons-material";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState("");

  function handleActivityDelete(id: string) {
    setTarget(id);
    deleteActivity(id);
  }

  return (
    <>
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent orientation="horizontal">
          <Avatar size="lg" src="/assets/user.pns" />
          <CardContent>
            <Typography
              component={Link}
              to={`/activities/${activity.id}`}
              level="h4"
              sx={{ textDecoration: "none" }}
            >
              {activity.title}
            </Typography>
            <Typography level="body-sm">Hosted by Bob</Typography>
          </CardContent>
        </CardContent>
        <CardContent>
          <Divider inset="context" sx={{ mb: 1 }} />
          <Box display="flex">
            <Typography startDecorator={<Schedule />}>
              {activity.date}
            </Typography>
            <Typography startDecorator={<PushPin />}>
              {activity.venue}
            </Typography>
          </Box>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" sx={{ mb: 1 }} />
          Atendees go here
          <Divider inset="context" sx={{ mt: 1 }} />
        </CardOverflow>
        <CardContent>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <span>{activity.description}</span>
            <Button
              component={Link}
              to={`/activities/${activity.id}`}
              sx={{
                backgroundColor: "teal",
                float: "right",
                width: "auto",
              }}
            >
              View
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
