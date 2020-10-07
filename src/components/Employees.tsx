import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { drawerWidth } from '../App'
import EmployeeList from './EmployeeList'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import SkillAutoComplete from './SkillAutocomplete'
import { useMutation, gql } from '@apollo/client'
import { SkillsType } from '../types'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    content: {
        backgroundColor: theme.palette.secondary.light,
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
        padding: theme.spacing(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    nameContainer: {
        display: 'flex',
        
    },
    name: {
        margin: `${theme.spacing(5)}px ${theme.spacing(2)}px`
    },
    button: {
        marginTop: theme.spacing(6)
    }

}))

type EmployeesProps = {
    drawerOpen: boolean
}

const CreateEmployee = gql`
  mutation CreateEmployee($firstname: String!, $lastname: String!) {
    createEmployee(input: {firstname: $firstname, lastname: $lastname}) {
      id
    }
  }
`;

const CreateEmployeeSkill = gql`
   mutation CreateEmployeeSkill($employeeId: ID!, $skillId: ID!) {
           createEmployeeSkill( input: {employeeSkillEmployeeId: $employeeId, employeeSkillSkillId: $skillId} ) {
               id
           }
       }
`

const Employees = ({ drawerOpen }: EmployeesProps) => {
    const history = useHistory()
    const classes = useStyles()
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [skills, setSkills] = useState<SkillsType[]>([])
    const [addEmployee] = useMutation(CreateEmployee)
    const [addEmployeeSkill] = useMutation(CreateEmployeeSkill)
    const [btnDisable, setBtnDisable] = useState<boolean>(true)

    useEffect( () => {
        if(!!firstname && !!lastname && !!skills.length ){
            setBtnDisable( prevState => false)
        } else {
            setBtnDisable( prevState => true)
        }
    }, [firstname, lastname, skills] )

    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.currentTarget.value)
    }

    const handleLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.currentTarget.value)
    }


    const handleSkills = (skills: SkillsType[]) => {
        setSkills(prevState => skills)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addEmployee({ variables: { firstname, lastname } }).then(res => {
            const employeeId = res.data.createEmployee.id
            for(let i = 0; i < skills.length; i++){
                AsyncAddEmployeeSkill(employeeId, skills[i].id)
            }
            history.push(`/employees/${employeeId}`)
        })
    }

    const AsyncAddEmployeeSkill = async (employeeId: String, skillId:String) => {
        const response = addEmployeeSkill({ variables: { employeeId, skillId } })
        const data = await response
        return data
    }

    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />
            <Typography className={classes.heading} variant='h6'>
                Employees
            </Typography>

            <Paper className={classes.paper} >
                <form className={classes.form} >
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
                    <Typography>Skills</Typography>
                    <SkillAutoComplete handleSkills={handleSkills} />
                    <Button
                        disabled={btnDisable}
                        className={classes.button}
                        variant="contained"
                        color="default"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Create Employee
                    </Button>
                </form>

            </Paper>

            <EmployeeList/>
        </div>
    )
}

export default Employees