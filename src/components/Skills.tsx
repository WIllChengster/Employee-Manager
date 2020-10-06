
import React, { useState } from 'react';
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { drawerWidth } from '../App'
import SkillAutoComplete from './SkillAutocomplete'
import { SkillsType, EmployeeType } from '../types'
import Divider from '@material-ui/core/Divider'
import { gql, useQuery } from '@apollo/client'

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
    hidden:{
        display: 'none',
    },
    error: {
        color: theme.palette.error.main
    },
    avatar: {
        width: 40,
        height: 40,
        border: '1px solid black',
        borderRadius: '50%',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

}))

const getEmployees = gql`
    query getEmployeeSkills {
        listEmployeeSkills {
            items {
                id
                skill {
                    id
            }
            employee {
                firstname
                lastname
                id
            }
        }
    }
}
`


type SkillProps = {
    drawerOpen: boolean
}
const Skills = ({ drawerOpen }: SkillProps) => {
    const classes = useStyles()
    const [skills, setSkills] = useState<SkillsType[]>([{ id: '', name: '' }])
    const [emptyError, setEmptyError] = useState<Boolean>(false)
    const { data, loading } = useQuery(getEmployees)
    const [employees, setEmployees] = useState<any[]>([])
    const handleSkills = (skills: SkillsType[]) => {
        setSkills(prevState => skills)
    }
    // useEffect( () => {
    //     if(!loading){
    //         const filteredEmployees = []
    //         const items = data.listEmployeeSkills.items

    //         for(let i = 0; i < items.length; i++){
    //             for(let j = 0; j < skills.length; j++){
    //                 if(items[i].skill.id === skills[j].id){
    //                     filteredEmployees.push(items[i].employee)
    //                 }
    //             }

    //         }
    //         console.log(filteredEmployees)
    //         // setEmployees(prevState => data)
    //     }
    // }, [loading] )

    const handleButton = () => {
        if(skills.length === 0){
            setEmptyError(true)
        } else if(!loading){

            const filteredEmployees:EmployeeType[] = []
            const items = data.listEmployeeSkills.items

            for(let i = 0; i < items.length; i++){
                for(let j = 0; j < skills.length; j++){
                    let isDuplicate = false
                    for( let k = 0; k < filteredEmployees.length && !isDuplicate; k++){
                        if(filteredEmployees[k].id === items[i].employee.id ){
                            isDuplicate = true
                        }
                    }
                    if(items[i].skill.id === skills[j].id && !isDuplicate){
                        filteredEmployees.push(items[i].employee)
                    }
                }

            }
            setEmptyError(false)
            setEmployees(prevState => filteredEmployees)
        }
    }

    const employeeMap = employees.map((employee: any, index: number) => {
        let initials = employee.firstname[0].toUpperCase() + employee.lastname[0].toUpperCase()
        return (
            <div key={index} >
                <ListItem>
                    <ListItemAvatar>
                        <Typography className={classes.avatar}>
                            {initials}
                        </Typography>
                    </ListItemAvatar>
                    <ListItemText primary={`${employee.firstname} ${employee.lastname}`} />
                </ListItem>
                <Divider />
            </div>
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
                Search for employees who match your desired skillset
            </Typography>
            <SkillAutoComplete handleSkills={handleSkills} />
            <Button onClick={handleButton} variant="contained">Search</Button>
            <Typography 
                className={clsx(classes.error, {
                    [classes.hidden]: !emptyError
                })} 
            >
                Please enter a skill to search
            </Typography>

            <List>
                {employeeMap}
            </List>
        </div>
    )
}

export default Skills
