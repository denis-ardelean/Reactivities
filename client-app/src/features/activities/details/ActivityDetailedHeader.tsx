import { LocationOnRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardCover,
  CardOverflow,
  Typography,
} from "@mui/joy";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityDetailedHeader({ activity }: Props) {
  return (
    <>
      <Card>
        <CardOverflow sx={{ minHeight: "280px" }}>
          <CardCover>
            <img
              src={`${process.env.PUBLIC_URL}/assets/categoryImages/${activity.category}.jpg`}
              loading="lazy"
              alt={activity.category}
            />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              border: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#fff">
              {activity.title}
            </Typography>
            <Typography textColor="neutral.300">{activity.date}</Typography>
            <Typography textColor="#fff">{activity.description}</Typography>
            {/* <Typography startDecorator={<LocationOnRounded />} textColor="#fff">
              {activity.venue}
            </Typography> */}
          </CardContent>
        </CardOverflow>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Button
                sx={{
                  width: "auto",
                  mr: 1,
                }}
              >
                Join Activity
              </Button>
              <Button
                color="neutral"
                variant="soft"
                sx={{
                  width: "auto",
                }}
              >
                Cancel Attendance
              </Button>
            </Box>
            <Button
              color="warning"
              sx={{
                float: "right",
                width: "auto",
                mr: 1,
              }}
            >
              Manage Event
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
