import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export const NavigationMenu = ({ isOpen, onClose }) => (
  <Menu
    anchorOrigin={{ vertical: "top", horizontal: "left" }}
    open={isOpen}
    onClose={onClose}
  >
    <MenuItem>
      <Link to="/gallery">GALLERY</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/addImage">ADD IMAGE</Link>
    </MenuItem>
  </Menu>
);
