import {
  Box,
  Button,
  Card,
  CardContent,
  Input,
  Stack,
  Textarea,
} from "@mui/joy";
import { CardActions, FormControl } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

export default observer(function ActivityForm() {
  const navigate = useNavigate();
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();

  const [activity, setActivity] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    console.log(`Inside useEffect`);
    if (id) {
      console.log(`Inside if`);
      loadActivity(id).then((activity) => {
        setActivity(activity!);
      });
    }

    return () => {
      setActivity({
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      });
    };
  }, [id, loadActivity]);

  function handleInputChanged(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  function handleSubmit() {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        navigate(`/activities/${newActivity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        navigate(`/activities/${activity.id}`)
      );
    }
  }

  if (loadingInitial)
    return <LoadingComponent content="Loading activity ..." />;

  return (
    <>
      <Card
        variant="outlined"
        sx={{ maxHeight: "max-content", maxWidth: "100%" }}
      >
        <CardContent>
          <FormControl sx={{ mb: 1 }}>
            <Stack spacing={1}>
              <Input
                placeholder="Title"
                value={activity.title}
                name="title"
                onChange={handleInputChanged}
              />
              <Textarea
                placeholder="Description"
                minRows={3}
                maxRows={3}
                value={activity.description}
                name="description"
                onChange={handleInputChanged}
              />
              <Input
                placeholder="Category"
                value={activity.category}
                name="category"
                onChange={handleInputChanged}
              />
              <Input
                type="date"
                placeholder="Date"
                value={activity.date}
                name="date"
                onChange={handleInputChanged}
              />
              <Input
                placeholder="City"
                value={activity.city}
                name="city"
                onChange={handleInputChanged}
              />
              <Input
                placeholder="Venue"
                value={activity.venue}
                name="venue"
                onChange={handleInputChanged}
              />
            </Stack>
          </FormControl>
          <CardActions sx={{ margin: 0, px: 0 }}>
            <Box sx={{ ml: "auto", mr: 0 }}>
              <Button component={Link} to="/activities" color="neutral" sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button
                loading={loading}
                onClick={() => {
                  handleSubmit();
                }}
                color="success"
              >
                Submit
              </Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
});
