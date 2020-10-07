import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../App'
import { gql, useQuery, useMutation } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import AddBoxIcon from '@material-ui/icons/AddBox'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline'
import SkillAutocomplete from './SkillAutocomplete'
import { SkillsType } from '../types'
import Button from '@material-ui/core/Button'

const getEmployeeQuery = gql`
    query getEmployee($id: ID!) {
        getEmployee(id: $id) {
            createdAt
            firstname
            lastname
            id
            skills {
                items {
                    id
                    skill {
                        name
                    }
                }
            }
        }
    }
`
const CreateEmployeeSkill = gql`
   mutation CreateEmployeeSkill($employeeId: ID!, $skillId: ID!) {
           createEmployeeSkill( input: {employeeSkillEmployeeId: $employeeId, employeeSkillSkillId: $skillId} ) {
               id
           }
       }
`

const deleteSkillQuery = gql`
    mutation deleteSkill($id: ID!) {
        deleteEmployeeSkill(input: {id: $id}){
            id
        }
    }
`

const useStyles = makeStyles(theme => ({
    content: {
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
    avatar: {
        height: '150px',
        width: '150px',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10%'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skill: {
        backgroundColor: theme.palette.secondary.light,
        margin: theme.spacing(2),
        borderRadius: '10%'
    },
    inline: {
        display: 'inline'
    },
    hidden: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(6)
    }

}))



type DashboardProps = {
    drawerOpen: boolean
}
const EmployeePlaceholder = {
    firstname: '?',
    lastname: '?',
    id: '',
    skills: {
        items: []
    }
}


const EmployeeProfile = ({ drawerOpen }: DashboardProps) => {
    const classes = useStyles()
    const { id } = useParams() as { id: string }
    const { data, loading, refetch } = useQuery(getEmployeeQuery, { variables: { id } })
    const [addEmployeeSkill] = useMutation(CreateEmployeeSkill)
    const [deleteSkill] = useMutation(deleteSkillQuery)
    const [employee, setEmployee] = useState<any>(EmployeePlaceholder)
    const [adding, setAdding] = useState<boolean>(false);
    const [skillsInput, setSkillsInput] = useState<SkillsType[]>([])

    useEffect(() => {
        if (!loading) {
            setEmployee((prevState: any) => data.getEmployee)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const removeSkill = (skillId: string) => {
        deleteSkill({ variables: { id: skillId } }).then(res => {
            refetch().then(res => {
                setEmployee((prevState: any) => res.data.getEmployee)
            })
        })
    }

    const handleSkills = (skills: SkillsType[]) => {
        setSkillsInput(prevState => skills)
    }

    const submitSkills = () => {
        for (let i = 0; i < skillsInput.length; i++) {
            AsyncAddEmployeeSkill(employee.id, skillsInput[i].id)
        }
        refetch().then(res => {
            setEmployee((prevState: any) => res.data.getEmployee)
        })
    }

    const AsyncAddEmployeeSkill = async (employeeId: String, skillId: String) => {
        const response = addEmployeeSkill({ variables: { employeeId, skillId } })
        const data = await response
        return data
    }

    const skillMap = employee.skills.items.map((skill: any, index: number) => {
        return (
            <Grid item className={classes.skill} key={index} onClick={() => removeSkill(skill.id)} >
                <Typography className={classes.inline}>
                    {skill.skill.name}
                </Typography>
                <IconButton className={classes.inline} >
                    <RemoveCircleOutlineIcon />
                </IconButton>
            </Grid>
        )
    })

    let initials = employee.firstname[0].toUpperCase() + employee.lastname[0].toUpperCase()
    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />


            <Paper className={classes.paper} >
                <Grid container>
                    <Grid item xs={6}>
                        <div className={classes.avatar} >
                            <Typography variant='h1'>{initials}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} className={classes.center} >
                        <Typography> Employee Since: {employee.createdAt}</Typography>
                    </Grid>
                    <Typography variant="h6">
                        {employee.firstname} {employee.lastname}
                    </Typography>

                    <Grid container spacing={3} alignItems="center" >
                        <Typography variant="body1">Skills:</Typography>
                        {skillMap}
                        <IconButton onClick={() => setAdding(prevVal => !prevVal)} >
                            <AddBoxIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
            <Paper
                className={clsx(classes.paper, {
                    [classes.hidden]: !adding
                })} >
                <Typography>Enter desired skills</Typography>
                <SkillAutocomplete handleSkills={handleSkills} />
                <Button variant="contained" onClick={submitSkills}>Submit</Button>
            </Paper>
        </div>
    )
}

export default EmployeeProfile