import * as React from "react";
import Typography from "@mui/material/Typography";

interface TitleProps {
  children?: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  sx?: React.CSSProperties;
}

export default function Title(props: TitleProps) {
  const { component = "h2", variant = "h6", sx } = props;

  return (
    <Typography
      component={component}
      variant={variant}
      color="primary"
      sx={sx}
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
