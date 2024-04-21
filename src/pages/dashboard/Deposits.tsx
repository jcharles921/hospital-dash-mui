import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import Title from "./Title";

export default function Deposits() {
  const data = [
    { id: 0, value: 11, label: "Others ..." },
    { id: 1, value: 15, label: "Radiology" },
    { id: 2, value: 20, label: "Pharmacy" },
    { id: 3, value: 24, label: "Laboratory" },
    { id: 4, value: 30, label: "General Consultation" },
  ];
  return (
    <React.Fragment>
      <Title
        sx={{
          marginTop: "15px",
          marginLeft: "15px",
        }}
        variant="h6"
      >
        Service frequentation
      </Title>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -20, color: "gray" },
          },
        ]}
        slotProps={{
          legend: {
            hidden: true,
          },
        }}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        height={200}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          marginTop: "5px",
          marginBottom: "5px",
          marginLeft: "15px",
          gap: "10px",
          height: "30px",
        }}
      >
                <EmojiEventsOutlinedIcon
          sx={{
            color: "#147e7e",
          }}
        />
 <h4 style={{
  fontWeight: "normal",
  color: "#147e7e",
 }}>
  Leading :
 </h4>
        <p
          style={{
            fontSize: "12px",
          }}
        >
          General Consultation
        </p>

      </div>
    </React.Fragment>
  );
}
