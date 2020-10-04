import React from 'react';
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { drawerWidth } from '../App'

const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: theme.palette.text.secondary,
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

}))

type DashboardProps = {
    drawerOpen: boolean
}
const Dashboard = ({ drawerOpen }: DashboardProps) => {
    const theme = useTheme()
    const classes = useStyles()
    return (
        <Container
            className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit, rem quibusdam perferendis sapiente hic alias? Labore, accusantium commodi. Enim doloremque, ex similique voluptates necessitatibus distinctio totam voluptas hic rerum.
            </Typography>
        </Container>
    )
}

export default Dashboard