import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    text: {
        color: theme.palette.secondary.light
    }
}))
const DrawerList = () => {
    const classes = useStyles()
    const history = useHistory()
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
            <ListItem onClick={() => history.push(item.link)} button key={index} >
                <ListItemText className={classes.text} primary={item.text} />
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