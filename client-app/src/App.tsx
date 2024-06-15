import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { List, ListItem } from "@mui/material";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);

  return (
    <>
      <List>
        {activities.map((activity: any, activityIndex) => (
          <ListItem key={activityIndex}>{activity.title}</ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
