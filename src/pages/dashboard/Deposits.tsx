import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title component="h2">Recent Deposits</Title>
      <Typography component="p" variant="h5">
        40,000 RWF
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 21 April, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          See history
        </Link>
      </div>
    </React.Fragment>
  );
}
