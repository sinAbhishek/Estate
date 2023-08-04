import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import { addDays, differenceInCalendarDays, startOfDay } from "date-fns";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// import "./styles.css";
// const date1=new Date("2023-08-04")

// const tomorrow = addDays(now, 4);
// const in3Days = addDays(now, 3);
// const in5Days = addDays(now, 9);

// const highlightedDates = [date1];

// function isSameDay(a, b) {

//   return differenceInCalendarDays(a, b) === 0;
// }

// export default function App() {
//   function tileClassName({ date, view }) {

//     if (
//       view === "month" &&
//       highlightedDates.find((c) => isSameDay(c, date))
//     ) {
//       return "highlight";
//     }
//   }

//   return <Calendar  tileClassName={tileClassName} />;
// }
