import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
const DrawerList = () => {
    const links = [
        {
            text: 'Dashboard',
            link: '/',
        },
        {
            text: 'Employees',
            link: '/employees',
        },
        {
            text: 'Skills',
            link: '/skills',
        }
    ]

    const linkMap = links.map( (item, index) => {
        return (
            <ListItem button key={index} >
                <ListItemText primary={item.text} />
            </ListItem>
        )
    })
    return (
        <List>
            {linkMap}
        </List>
    )
}

export default DrawerList