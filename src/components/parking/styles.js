import { makeStyles } from "@material-ui/core/styles";


export default makeStyles(theme => ({

    root: {
        margin: 0,
        padding: 0,
        [theme.breakpoints.up("sm")]: {
            height: '99vh'
        },
        height: '110vh',
        backgroundColor: '#131458'
    },

    cardLayout: {
        display: 'flex',
        padding: '10px'
    },
    cardText: {
        width: '85%'
    },

    cardIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '15%'
    },
    icon: {
        fontSize: 40
    },
}));