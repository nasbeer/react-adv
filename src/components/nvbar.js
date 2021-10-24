import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {Link} from "react-router-dom";
import TrafficIcon from '@material-ui/icons/Traffic';
// import campaigns from '/icons/campaign.svg';
// import logo from './icons/logo512.png';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  linkstyle:{
    textDecoration: 'none',
    color: 'inherit'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



const items = [
  {
    href: '/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  }
];




function ResponsiveNavbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [selectedIndex,setselectedIndex]=React.useState(false);

  const handleListItemClick= (event,index) =>{
    setselectedIndex(index);
  }

  const handleClick = (event,variablename) => {
    switch(variablename){
      case 'open1':
          setOpen1(!open1);
          setOpen2(false);
          setOpen3(false);
          setOpen4(false);
          break;
      case 'open2':
          setOpen1(false);
          setOpen2(!open2);
          setOpen3(false);
          setOpen4(false);
          break;
      case 'open3':
          setOpen1(false);
          setOpen2(false);
          setOpen3(!open3);
          setOpen4(false);
          break;
      case 'open4':
          setOpen1(false);
          setOpen2(false);
          setOpen3(false);
          setOpen4(!open4);
          break;
      default :
          break;
    }
    setselectedIndex(false);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    <img src="img/jubna_orange_logo.svg" alt="image" width="215" height="57" />
      <div className="" />
      <Divider />
      <List>
      <Link to='/dashboard' className={classes.linkstyle} >
      <ListItem button 
        selected={selectedIndex===1}
        onClick={(event)=>handleListItemClick(event,1)} >
        <ListItemIcon>
        <img src="jubna_icons/dashboard.svg" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
      </Link>

      <Divider />

      <Link to='/campaign' className={classes.linkstyle} >
      <ListItem button 
        selected={selectedIndex===2}
        onClick={(event)=>handleListItemClick(event,2)}>
        <ListItemIcon>
        <img src="jubna_icons/campaigns.svg" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Campaigns" />
      </ListItem>
      </Link>

      <Divider />

      <Link to='/article' className={classes.linkstyle} >
      <ListItem button
        selected={selectedIndex===3}
        onClick={(event)=>handleListItemClick(event,3)}
        >
        <ListItemIcon>
        <img src="jubna_icons/articles.png" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Ads" />
      </ListItem>
      </Link>

      <Divider />

      <ListItem button onClick={(event)=>handleClick(event,'open1')}>
        <ListItemIcon>
        <img src="jubna_icons/traffic.png" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Traffic Insights" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="" 
          selected={selectedIndex===4}
          onClick={(event)=>handleListItemClick(event,4)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem>
            <Divider />
          <ListItem button className="" 
          selected={selectedIndex===5}
          onClick={(event)=>handleListItemClick(event,5)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Locations" />
          </ListItem>
            <Divider />
          <ListItem button className="" 
          selected={selectedIndex===6}
          onClick={(event)=>handleListItemClick(event,6)}
          >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Operating Systems" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

      <ListItem button onClick={(event)=>handleClick(event,'open2')}>
        <ListItemIcon>
        <img src="jubna_icons/sources.svg" alt="image" width="20" height="20"/>
        
        </ListItemIcon>
        <ListItemText primary="Sources" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="" 
          selected={selectedIndex===7}
          onClick={(event)=>handleListItemClick(event,7)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Manage Sources" />
          </ListItem>
            <Divider />
          <ListItem button className="" 
          selected={selectedIndex===8}
          onClick={(event)=>handleListItemClick(event,8)}
          >
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Bulk Block" />
          </ListItem>

          
        </List>
      </Collapse>
      <Divider />

      <ListItem button onClick={(event)=>handleClick(event,'open3')}>
        <ListItemIcon>
        <img src="jubna_icons/conversions.svg" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Conversions" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="" 
          selected={selectedIndex===9}
        onClick={(event)=>handleListItemClick(event,9)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Conversions Report" />
          </ListItem>
            <Divider />
          <ListItem button className="" 
          selected={selectedIndex===10}
        onClick={(event)=>handleListItemClick(event,10)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Tracking" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />

      <ListItem button selected={selectedIndex===11}
        onClick={(event)=>handleListItemClick(event,11)}>
        <ListItemIcon>
        <img src="jubna_icons/media.png" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Media Libarry" />
      </ListItem>
        <Divider />
      <ListItem button selected={selectedIndex===12}
        onClick={(event)=>handleListItemClick(event,12)}>
        <ListItemIcon>
        <img src="jubna_icons/reports.svg" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
        <Divider />
      <ListItem button selected={selectedIndex===13}
        onClick={(event)=>handleListItemClick(event,13)}>
        <ListItemIcon>
        <img src="jubna_icons/funds.svg" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Billings" />
      </ListItem>
        <Divider />
      <ListItem button onClick={(event)=>handleClick(event,'open4')}>
        <ListItemIcon>
        <img src="jubna_icons/support.png" alt="image" width="20" height="20"/>
        </ListItemIcon>
        <ListItemText primary="Supports" />

      {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="" 
          selected={selectedIndex===14}
          onClick={(event)=>handleListItemClick(event,14)}>
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText primary="All Tickets" />
          </ListItem>
            <Divider />
          <ListItem button className="" 
          selected={selectedIndex===15}
          onClick={(event)=>handleListItemClick(event,15)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Open New Ticket" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />


    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}

ResponsiveNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveNavbar;
