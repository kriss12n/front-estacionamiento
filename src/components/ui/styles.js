import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export default makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {

        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: '#131458'
        }
    },
    menuButton: {

        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,

    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#131458'
    },
    content: {

        flexGrow: 1,
        paddingTop: 80,
        padding: '20px',
        backgroundColor: "#131458"
    },
    toolbarItems: {
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    buttonLogout: {
        width: '90%',
        margin: '8px'
    },
    noSelected: {
        borderRadius: '7px',
        color: 'white',
        margin: '8px',
        width: '90%',
        '&:hover': {
            color: 'white',
            backgroundColor: "#f50057",

        }
    },
    selected: {
        borderRadius: '7px',
        color: 'white',
        backgroundColor: "#4052B5",
        margin: '8px',
        width: '90%',

        '&:hover': {
            color: 'white',
            backgroundColor: "#f50057",

        }

    },

    sidebar: {
        height: '100vh',
        backgroundColor: '#292B67',
    },
    icon: {
        color: 'white'
    }

}));