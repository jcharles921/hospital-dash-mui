import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaClipboardList, FaBriefcaseMedical } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";

const linkStyles = {
  textDecoration: "none",
  color: "#147e7e"
};

export const mainListItems = (
  <React.Fragment>
    <Link to="/" style={linkStyles}>
      <ListItemButton>
        <ListItemIcon>
          <MdDashboard />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link to="/doctors" style={linkStyles}>
      <ListItemButton>
        <ListItemIcon>
          <FaUserDoctor />
        </ListItemIcon>
        <ListItemText primary="Doctors" />
      </ListItemButton>
    </Link>
    <Link to="/patients" style={linkStyles}>
      <ListItemButton>
        <ListItemIcon>
          <FaBriefcaseMedical />
        </ListItemIcon>
        <ListItemText primary="Patients" />
      </ListItemButton>
    </Link>
    <Link to="/prescriptions" style={linkStyles}>
      <ListItemButton>
        <ListItemIcon>
          <FaClipboardList />
        </ListItemIcon>
        <ListItemText primary="Prescriptions" />
      </ListItemButton>
    </Link>
    <Link to="/users-roles" style={linkStyles}>
      <ListItemButton>
        <ListItemIcon>
          <IoMdPeople />
        </ListItemIcon>
        <ListItemText primary="Users and Roles" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
