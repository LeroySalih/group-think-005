import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import QuestionCard from './components/question-card';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;
 
export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h4" noWrap component="div">
            Maths Flash Card ⚡
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[['Make x the subject','/make-x-the-subject'], 
              ['change the denominator','/change-the-denominator'], 
              ['Simultaneous equations','/sim-equations']].map((text, index) => (
              <ListItem button key={text[0]}>
                <ListItemIcon>
                  <InboxIcon /> 
                </ListItemIcon>
                <Link to={text[1]}>{text[0]}</Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </Box>
      </Drawer>
         
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/make-x-the-subject" element={<QuestionCard type={'make-x-the-subject'}/>}/>
          <Route path="/change-the-denominator" element={<QuestionCard type={'change-the-denominator'}/>}/>
          <Route path="/sim-equations" element={<QuestionCard type={'sim-equ'}/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <style jsx>{`
        nav, ul, li {
          display: inline;
        }
      `}</style>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}