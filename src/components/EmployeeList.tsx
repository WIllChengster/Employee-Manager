import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery, gql } from '@apollo/client'
import { useHistory } from 'react-router-dom'

const ListEmployees = gql` query ListEmployees{
  listEmployees {
    items {
      firstname
      lastname
      skills {
        items {
          skill {
            name
          }
        }
      }
      id
    }
  }
}
`

const useStyles = makeStyles(theme => ({
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
    paper: {
        margin: `${theme.spacing(3)}px auto`,
        width: '95%'
    },
    cursor: {
        cursor: 'pointer'
    }
}))


const EmployeeList = () => {
    const history = useHistory()
    const { loading, data } = useQuery(ListEmployees)
    const classes = useStyles()
    const employeeMap = !loading ? data.listEmployees.items.map((employee: any, index: number) => {
        let initials = employee.firstname[0].toUpperCase() + employee.lastname[0].toUpperCase()
        return (
            <div key={index} >
                <ListItem className={classes.cursor} onClick={() => history.push(`/employees/${employee.id}`)} >
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
    }) : null
    return (
        <Paper className={classes.paper} >
            <List>
                {employeeMap}
            </List>
        </Paper>
    )
}

export default EmployeeList