import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import TopAppBar from './components/TopAppBar'
import AppDrawer from './components/AppDrawer'
import Theming from './components/Theming'

const drawerWidth = 200

const App = () => {

  const [drawerOpen, setDrawerOpen] = useState<boolean>(true)
  const handleSetDrawerOpen = () => setDrawerOpen(prevState => !prevState )

  return (
    <Theming>
      <Container>
        <TopAppBar 
          drawerOpen={drawerOpen} 
          drawerWidth={drawerWidth} 
          setDrawerOpen={handleSetDrawerOpen}
        />
        <AppDrawer 
          drawerOpen={drawerOpen} 
          drawerWidth={drawerWidth} 
          setDrawerOpen={handleSetDrawerOpen}
        />
      </Container>
    </Theming>
  );
}

export default App;
