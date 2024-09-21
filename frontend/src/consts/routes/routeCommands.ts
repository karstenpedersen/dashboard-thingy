import { addCommand } from "@/store/commandsSlice";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { getRoutes } from "./routes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export default function loadRouteCommands() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  getRoutes().forEach((route) => {
    dispatch(
      addCommand({
        title: `Navigate to ${route.title}`,
        id: `route:${route.path}`,
        description: route.description,
        icon: route.icon,
        scope: "all",
        function: () => {},
      })
    );
  });
}
