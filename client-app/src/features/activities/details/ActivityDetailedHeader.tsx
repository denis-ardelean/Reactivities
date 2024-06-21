import { LocationOnRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardCover,
  Typography,
} from "@mui/joy";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityDetailedHeader({ activity }: Props) {
  return (
    <>
      <Card sx={{ minHeight: "280px" }}>
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
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#fff">
            {activity.title}
          </Typography>
          <Typography textColor="neutral.300">{activity.date}</Typography>
          <Typography startDecorator={<LocationOnRounded />} textColor="#fff">
            {activity.venue}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
