import { Grid } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  onSelectActivity: (id: string) => void;
  onCancelSelectActivity: () => void;
  editMode: boolean;
  onOpenForm: (id: string) => void;
  onCloseForm: () => void;
  onCreateOrEdit: (activity: Activity) => void;
  onDeleteActivity: (id: string) => void;
}

export default function ActivityDashboard({
  activities,
  selectedActivity,
  onSelectActivity,
  onCancelSelectActivity,
  editMode,
  onOpenForm,
  onCloseForm,
  onCreateOrEdit,
  onDeleteActivity,
}: Props) {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={7}>
          <ActivityList
            activities={activities}
            onSelectActivity={onSelectActivity}
            onDeleteActivity={onDeleteActivity}
          />
        </Grid>
        <Grid item xs={5}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              onCancelSelectActivity={onCancelSelectActivity}
              onOpenForm={onOpenForm}
            />
          )}
          {editMode && (
            <ActivityForm
              activity={selectedActivity}
              onCloseForm={onCloseForm}
              onCreateOrEdit={onCreateOrEdit}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
