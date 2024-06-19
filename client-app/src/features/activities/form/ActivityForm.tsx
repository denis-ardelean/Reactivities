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
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    closeForm,
    createActivity,
    updateActivity,
    loading,
  } = activityStore;
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);

  function handleInputChanged(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

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
              <Button onClick={closeForm} color="neutral" sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button
                loading={loading}
                onClick={() => {
                  activity.id
                    ? updateActivity(activity)
                    : createActivity(activity);
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
