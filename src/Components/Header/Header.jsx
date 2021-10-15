import styled from "@emotion/styled";
import {
  AppBar,
  Button,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import { NavigationMenu } from "./NavigationMenu";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          <MenuIcon />
        </IconButton>
        <Title variant="h6">Gallery</Title>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsOpenUser(!isOpenNav)}
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>

      <NavigationMenu isOpen={isOpenNav} onClose={() => setIsOpenNav(false)} />
      <UserMenu isOpen={isOpenUser} onClose={() => setIsOpenUser(false)} />
    </AppBar>
  );
};

const Title = styled(Typography)`
  flex-grow: 1;
`;
