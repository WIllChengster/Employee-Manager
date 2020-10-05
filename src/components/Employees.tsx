import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { drawerWidth } from '../App'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import SkillAutoComplete from './SkillAutocomplete'
import { useMutation, gql } from '@apollo/client'

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
    },
    form: {
        padding: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nameContainer: {
        display: 'flex',
    },
    name: {
        margin: `0 ${theme.spacing(2)}px`
    },
    button: {
        marginTop: theme.spacing(6)
    }

}))

type EmployeesProps = {
    drawerOpen: boolean
}

const CREATE_EMPLOYEE = gql`
  mutation CREATE_EMPLOYEE($firstname: String!, $lastname: String!, $skills: [String]!) {
    createEmployee(input: {firstname: $firstname, lastname: $lastname, skills: $skill}) {
      affected_rows
    }
  }
`;

const Employees = ({ drawerOpen }: EmployeesProps) => {
    const classes = useStyles()
    const [employees, setEmployees] = useState<any[]>([])
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [skills, setSkills] = useState<any[]>([])
    const [addEmployee, { loading, error }]= useMutation(CREATE_EMPLOYEE)

    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.currentTarget.value)
    }

    const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.currentTarget.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addEmployee({variables: {firstname, lastname, skills: ['asd']}})
    }

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
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.nameContainer} >
                        <TextField 
                        id="firstname"
                            className={classes.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFirstname(e)}
                            value={firstname}
                            label="First Name"
                            variant="outlined"
                        />
                        <TextField 
                        id="lastname"
                            className={classes.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleLastname(e)}
                            value={lastname}
                            label="Last Name"
                            variant='outlined'
                        />
                    </div>
                    <SkillAutoComplete/>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="default"
                        type="submit"
                    >
                        Create Employee
                    </Button>
                </form>

            </Paper>

        </Container>
    )
}

export default Employees