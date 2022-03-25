import { makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SubjectIcon from "@material-ui/icons/Subject";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useHistory, useLocation } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { compareAsc, format } from "date-fns";
import Avatar from "@material-ui/core/Avatar";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: 20,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    title: {
      padding: 16,
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(8),
    },
    display: {
      flexGrow: 1,
    },
    avtar: {
      marginLeft: 20,
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const usehistry = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectIcon color="Primary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineIcon color="Primary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.display}>
            Today is the {format(new Date(), "do-MMMM-Y")}
          </Typography>
          <Typography>Deepanshu</Typography>
          <Avatar
            className={classes.avtar}
            aria-label="recipe"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG9Jn2tcpBT9A/profile-displayphoto-shrink_400_400/0/1613406079537?e=1632960000&v=beta&t=XYDwC1pt33h6U54R238tK5qoAL7cH4krY54MI6yr778"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>
        <Divider />
        <List>
          {menuItems.map((menuItem) => {
            return (
              <ListItem
                button
                key={menuItem.text}
                onClick={() => usehistry.push(menuItem.path)}
                className={
                  location.pathname == menuItem.path ? classes.active : null
                }
              >
                {console.log(location.pathname)}
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <div className={classes.page}>{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
