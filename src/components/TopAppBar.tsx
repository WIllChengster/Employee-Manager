import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerWidth } from '../App'
import logo from '../assets/transparent-logo.png'


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
    toolbar: {
        display: 'flex',
        alignItems:'center',
        justifyContent: 'flex-start'
    },
    hide: {
        display: 'none',
    },
    logo: {
        height: '2rem',
        color: 'white',
        margin: '0 1rem',
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
            <Toolbar className={classes.toolbar} >
                <IconButton 
                    className={clsx(classes.menuButton, {
                        [classes.hide]: drawerOpen
                    })} 
                    color="inherit" 
                    onClick={() => setDrawerOpen()}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} className={classes.logo}/>

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