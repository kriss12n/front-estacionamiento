import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { DriveEta, PowerSettingsNew } from "@material-ui/icons";
import { Avatar, Button, InputLabel, MenuItem, Select } from "@material-ui/core";
import Style from "./styles";
import {routes} from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import {selectedNav} from '../../actions/ui';
import {Collapse} from '@material-ui/core'


console.log(routes);

export default function Sidebar(props) {
    const { children } = props;
    const { container } = props;
    const classes = Style();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const dispatch = useDispatch();   

    const history = useHistory();

    const handleLogout = () =>{

        history.push('/login');

    }


    const handleSelected  = (id) =>{

        dispatch(selectedNav(id));

    }

    const {indexSelected} = useSelector(state => state.ui);

    const drawer = (
        <div className={classes.sidebar}>
            <div className={classes.toolbar} >
                <Typography variant="h5"align="center" style={{marginTop:'15px',color:'white'}}> <DriveEta style={{ fontSize: 20 }}/>Parking App</Typography>
            </div>

            <div className={classes.toolbarItems}>
                <List>
                    {routes.map(ruta => (
                        <ListItem
                            className={indexSelected === ruta.id ? classes.selected : classes.noSelected}
                            button
                            key={ruta.id}
                            component={ Link }
                            to={ruta.link}
                            onClick={()=>handleSelected(ruta.id)}
                        >
                            <ListItemIcon>
                                <Icon className={classes.icon} >{ruta.icon}</Icon>
                            </ListItemIcon>
                            <ListItemText primary={ruta.nav} />
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" color="secondary" onClick={handleLogout} className={classes.buttonLogout}>
                          <PowerSettingsNew style={{ marginRight:'8px' }} />   Cerrar sesion
                </Button>
               
            </div>
            
        </div>
    );

    return (
        <div className={`${classes.root} animate__animated animate__fadeIn`}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.navbarItems}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <Icon>reorder</Icon>
                        </IconButton>
                    
                    <div className={classes.avatar} >
                    <IconButton aria-label="notificaciones"  >
                         <Icon style={{color:'white'}} >notifications</Icon>
                    </IconButton>
                      <Avatar>C</Avatar>
                    </div>
                    </Toolbar>
                </AppBar>
          
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}> {children}</main>
        </div>
    );
}