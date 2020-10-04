import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import DrawerList from './DrawerList'
import { drawerWidth } from '../App'

type AppDrawerProps = {
    drawerOpen: boolean,
    setDrawerOpen: Function
}

const useStyles = makeStyles( theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.light
    },
    hide: {
        display: 'none',
    },
    drawerHeader: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: theme.spacing(3)
    },
    white: {
        color: 'white'
    }
}))


const AppDrawer = ({ drawerOpen, setDrawerOpen }: AppDrawerProps) => {
    const theme = useTheme()

    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor="left"
            open={drawerOpen}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton className={classes.white} onClick={() => setDrawerOpen()}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider/>
            <DrawerList/>
        </Drawer>
    )
}

export default AppDrawer