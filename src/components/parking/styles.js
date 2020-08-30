import { makeStyles } from "@material-ui/styles";


export default makeStyles({

    root: {
        margin: 0,
        padding: 0,
        height: '99vh',
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
});