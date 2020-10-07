import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import TopAppBar from './components/TopAppBar'
import AppDrawer from './components/AppDrawer'
import Theming from './components/Theming'
import { Route } from 'react-router-dom'
import Employees from './components/Employees'
import Skills from './components/Skills'
import EmployeeProfile from './components/EmployeeProfile'
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
        {/* <Route exact path='/' component={() => <Dashboard drawerOpen={drawerOpen} />} /> */}
        <Route exact path='/' component={() => <Employees drawerOpen={drawerOpen} />} />
        <Route path='/employees/:id' component={() => <EmployeeProfile drawerOpen={drawerOpen} />} />
        <Route path='/skills' component={() => <Skills drawerOpen={drawerOpen} />} />
        </div>
        </CssBaseline>
    </Theming>
  );
}

export default App;
