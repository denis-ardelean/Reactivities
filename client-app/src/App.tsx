import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { CardHeader, List, ListItem } from "@mui/material";

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
