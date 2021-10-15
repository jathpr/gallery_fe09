import { signOut } from "../../firebase/auth";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

export const UserMenu = ({ isOpen, onClose }) => (
  <Menu
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={isOpen}
    onClose={onClose}
  >
    <MenuItem>
      <Link to="/editUser" onClick={onClose}>
        User Profile
      </Link>
    </MenuItem>
    <MenuItem>
      <Button onClick={signOut}>Sign Out</Button>
    </MenuItem>
  </Menu>
);
