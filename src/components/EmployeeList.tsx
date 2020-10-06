import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { useQuery, gql } from '@apollo/client'

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
    }
  }
}
`

const EmployeeList = () => {
    const { loading, error, data } = useQuery(ListEmployees);

    const employeeMap = !loading ? data.listEmployees.items.map((employee: any, index: number) => {
        return (
            <div>
                <ListItem key={index} >
                    <ListItemText primary={`${employee.firstname} ${employee.lastname}`} />
                </ListItem>
                <Divider/>
            </div>
        )
    }) : null
    return (
        <List>
            {employeeMap}
        </List>
    )
}

export default EmployeeList