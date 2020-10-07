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
    const { data, loading, refetch } = useQuery(getEmployeeQuery, {
        variables: { id }
    })
    const [deleteSkill] = useMutation(deleteSkillQuery)
    const [employee, setEmployee] = useState<any>(EmployeePlaceholder)
    const [editing, setEditing] = useState<Boolean>(false);
    console.log(data)
    useEffect(() => {
        if (!loading) {
            setEmployee(data.getEmployee)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const removeSkill = (skillId: string) => {
        deleteSkill({variables: {id: skillId}}).then( res => {
            refetch()
        })
    }

    const skillMap = employee.skills.items.map((skill: any, index: number) => {
        console.log(skill)
        return (
            <Grid item className={classes.skill} key={index} onClick={() => removeSkill(skill.id)} >
                <Typography className={classes.inline}>
                    {skill.skill.name}
                </Typography>
                <IconButton className={classes.inline} >
                    <RemoveCircleOutlineIcon/>
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
            <Paper>
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
                        <IconButton onClick={() => setEditing(prevVal => !prevVal)} >
                            <AddBoxIcon/>
                        </IconButton>
                    </Grid>
                </Grid>

            </Paper>


        </div>
    )
}

export default EmployeeProfile