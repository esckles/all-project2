import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../page/Home/HomeScreen";
import Test from "../justTest/Test";
import SearchTest from "../justTest/SearchTest";
import StateTest from "../justTest/StateTest";
import Mode from "../justTest/Mode";
import Any from "../justTest/Any";
import ModeSwitch from "../justTest/ModeSwitch";
import AllTogether from "../justTest/AllTogether";
import TVid from "../justTest/TVid";
import Screen from "../RedoCard/Screen";
import Calendar from "../justTest/Calender";
import Rain from "../justTest/RainFall";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/Calender",
    element: <Calendar />,
  },
  {
    path: "/searchtest",
    element: <SearchTest />,
  },
  {
    path: "/state",
    element: <StateTest />,
  },
  {
    path: "/mode",
    element: <Mode />,
  },
  {
    path: "/Any",
    element: <Any />,
  },
  {
    path: "/Switch",
    element: <ModeSwitch />,
  },
  {
    path: "/All",
    element: <AllTogether />,
  },
  {
    path: "/tv",
    element: <TVid />,
  },
  {
    path: "/Screen",
    element: <Screen />,
  },
  {
    path: "/rain",
    element: <Rain />,
  },
]);
