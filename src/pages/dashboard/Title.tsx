import * as React from "react";
import Typography from "@mui/material/Typography";

interface TitleProps {
  children?: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Title(props: TitleProps) {
  const { component = "h2", variant = "h6" } = props;

  return (
    <Typography
      component={component}
      variant={variant}
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
