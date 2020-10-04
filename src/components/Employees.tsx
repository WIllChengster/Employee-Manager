import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { drawerWidth } from '../App'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    content: {
        // backgroundColor: theme.palette.text.secondary,
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
    heading: {
        textAlign: 'center',
    },
    paper: {
        width: '70%',
        margin: 'auto',
    }

}))

type EmployeesProps = {
    drawerOpen: boolean
}
const Employees = ({ drawerOpen }: EmployeesProps) => {
    const classes = useStyles()
    const [employees, setEmployees] = useState<any[]>([])

    return (
        <Container
            className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography className={classes.heading} variant='h6'>
                Employees
            </Typography>
            
            <Paper className={classes.paper} >
                <form>
                    <TextField id="firstname" label="First Name"/>
                    <TextField id="lastname" label="Last Name"/>
                    <Button variant="contained" color="default" >Create Employee</Button>
                </form>

            </Paper>
            
        </Container>
    )
}

export default Employees