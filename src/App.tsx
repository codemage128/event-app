import React, { useState, useCallback, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import useEventsAPI from "./api/event";
import { useDispatch } from "./store";
import { setFilteredEvents } from "./store/slices/app";
function App() {
  const content = useRoutes(routes);
  const eventAPI = useEventsAPI();
  const dispatch = useDispatch();
  
  const getAllEvents = useCallback(async () => {
    const res = await eventAPI.getAll();
    dispatch(setFilteredEvents(res));
  }, []);

  useEffect(() => {
    getAllEvents();
  }, []);

  return <>{content}</>;
}

export default App;
