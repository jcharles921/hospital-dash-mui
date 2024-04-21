import React from "react";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Title from "./Title";

export default function Balance({
  balance,
  color,
  percentage,
}: {
  balance: string;
  color: string;
  percentage: number;
}) {
  return (
    <div>
      <Title component="h2">Annual Profits</Title>
      <Typography component="h5" variant="h5">
        {balance} RWF
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <Typography component="p" variant="body1" style={{ color: color }}>
          +{percentage}%{" "}
        </Typography>
        <TrendingUpIcon
          sx={{
            color: color,
          }}
        />
      </div>
    </div>
  );
}
