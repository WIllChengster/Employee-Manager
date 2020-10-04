import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopAppBar from './components/TopAppBar'
import AppDrawer from './components/AppDrawer'
import Theming from './components/Theming'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Employees from './components/Employees'

export const drawerWidth = 250
const useStyles = makeStyles({
  root: {
    display: 'flex',
  }
})

const App = () => {
  const classes = useStyles()
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true)
  const handleSetDrawerOpen = () => setDrawerOpen(prevState => !prevState )

  return (
    <Theming>
      <CssBaseline>
      <div className={classes.root} >
        <TopAppBar 
          drawerOpen={drawerOpen} 
          setDrawerOpen={handleSetDrawerOpen}
        />
        <AppDrawer 
          drawerOpen={drawerOpen} 
          setDrawerOpen={handleSetDrawerOpen}
        />
        <Route exact path='/' component={() => <Dashboard drawerOpen={drawerOpen} />} />
        <Route path='/employees' component={() => <Employees drawerOpen={drawerOpen} />} />

        </div>
        </CssBaseline>
    </Theming>
  );
}

export default App;
