import { createSlice } from "@reduxjs/toolkit";

const exampleUnit = {
  name: "Classlytics",
  type: "Full-time",
  start: "Dec 2018",
  end: "Feb 2019",
  img: "/projects/classlytics.jpg",
  bgColor: "#145C9E",
  textColor: "#fff",
};

const initialState = [];

const projectsModel = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: {},
});

const projectsActions = projectsModel.actions;

export { projectsActions };

export default projectsModel.reducer;
