import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { drawerWidth } from '../App'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { SkillsType } from '../types'
const getEmployee = gql`
    query getEmployee($id: ID!) {
        getEmployee(id: $id) {
            firstname
            lastname
            id
            skills {
                items {
                    skill {
                        name
                    }
                }
            }
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

}))



type DashboardProps = {
    drawerOpen: boolean
}
const EmployeePlaceholder = {
    firstname: '',
    lastname: '',
    id: '',
    skills: {
        items: []
    }
}


const EmployeeProfile = ({ drawerOpen }: DashboardProps) => {
    const classes = useStyles()
    const { id } = useParams() as { id: string }
    const { data, loading } = useQuery(getEmployee, {
        variables: { id }
    })
    const [employee, setEmployee] = useState<any>(EmployeePlaceholder)
    useEffect(() => {
        if (!loading) {
            setEmployee(data.getEmployee)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])
    console.log(employee)
    
    const skillMap = employee.skills.items.map( (skill:any , index:number ) => {
        return (
            <Typography key={index} >
                {skill.skill.name}
            </Typography>
        )
    })

    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: drawerOpen,
            })}
        >
            <div className={classes.drawerHeader} />

            <Typography>
                {employee.firstname} {employee.lastname}
            </Typography>
            {skillMap}

        </div>
    )
}

export default EmployeeProfile