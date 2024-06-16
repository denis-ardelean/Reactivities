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
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  onSelectActivity: (id: string) => void;
  onDeleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  onSelectActivity,
  onDeleteActivity,
}: Props) {
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
        {activities.map((activity) => (
          <>
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
                        onClick={() => onSelectActivity(activity.id)}
                        sx={{ mr: 1 }}
                      >
                        View
                      </Button>
                      <Button
                        onClick={() => onDeleteActivity(activity.id)}
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
          </>
        ))}
      </List>
    </>
  );
}
