import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, axisClasses } from "@mui/x-charts";
import { ChartsTextStyle } from "@mui/x-charts/ChartsText";
import Title from "./Title";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Generate Patient Visits Data with some variation for a specific month
function generateMonthlyData(month: number): { day: string; visits: number }[] {
  const daysInMonth = new Date(2024, month, 0).getDate(); // Get the number of days in the selected month
  return Array.from({ length: daysInMonth }, (_, index) => ({
    day: (index + 1).toString(),
    visits: Math.floor(Math.random() * 50) + 100, // Random visits between 100 to 150 for each day
  }));
}

export default function PatientChart() {
  const theme = useTheme();
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const data = generateMonthlyData(selectedMonth);

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <Title>Patient Visits Over a Month</Title>
        <div style={{ marginLeft: "10px", alignSelf: "flex-end" }}>
          Select Month:
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            style={{ marginLeft: "10px" }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {new Date(2024, index, 1).toLocaleDateString("en-US", {
                  month: "long",
                })}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <div style={{ width: "100%", flexGrow: 1, overflow: "auto" }}>
        <LineChart
          dataset={data}
          margin={{
            top: 16,
            right: 20,
            left: 70,
            bottom: 30,
          }}
          xAxis={[
            {
              scaleType: "point",
              dataKey: "day",
              tickNumber: 7, // Show ticks for each week
              tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
            },
          ]}
          yAxis={[
            {
              label: "Number of Patients",
              labelStyle: {
                ...(theme.typography.body1 as ChartsTextStyle),
                fill: theme.palette.text.primary,
              },
              tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
              tickNumber: 6, // Show 6 ticks
            },
          ]}
          series={[
            {
              dataKey: "visits",
              showMark: false,
              color: theme.palette.primary.light,
            },
          ]}
          sx={{
            [`.${axisClasses.root} line`]: {
              stroke: theme.palette.text.secondary,
            },
            [`.${axisClasses.root} text`]: {
              fill: theme.palette.text.secondary,
            },
            [`& .${axisClasses.left} .${axisClasses.label}`]: {
              transform: "translateX(-25px)",
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
