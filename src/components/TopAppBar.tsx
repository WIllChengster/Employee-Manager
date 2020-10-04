import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerWidth } from '../App'


type TopAppBarProps = {
    drawerOpen: boolean,
    setDrawerOpen: Function,
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    }
}))

const TopAppBar = ({ drawerOpen, setDrawerOpen }: TopAppBarProps) => {
    const classes = useStyles()
    return (
        <AppBar 
            className={clsx(classes.appBar, {
                [classes.appBarShift]: drawerOpen,
            })} 
            position= 'fixed'
        >
            <Toolbar>
                <IconButton 
                    className={clsx(classes.menuButton, {
                        [classes.hide]: drawerOpen
                    })} 
                    color="inherit" 
                    onClick={() => setDrawerOpen()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6" 
                    className={classes.title} 
                >
                    e-Manager
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default TopAppBar