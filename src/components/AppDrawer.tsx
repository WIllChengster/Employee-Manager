import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
type AppDrawerProps = {
    drawerOpen: boolean,
    drawerWidth: number,
    setDrawerOpen: Function
}

const AppDrawer = ({ drawerOpen, drawerWidth, setDrawerOpen }: AppDrawerProps) => {
    const theme = useTheme()
    const useStyles = makeStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        hide: {
            display: 'none',
        },
        drawerHeader: {
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            margin: theme.spacing(3)
        },
        title: {
            flexGrow: 1,
            textAlign: 'center'
        }
    })

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
                <Typography
                    variant="h6"
                    className={classes.title}
                >
                    e-Manager
                </Typography>
                <IconButton onClick={() => setDrawerOpen()}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider/>
        </Drawer>
    )
}

export default AppDrawer