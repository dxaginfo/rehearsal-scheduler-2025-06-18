import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  Event as EventIcon,
  Schedule as ScheduleIcon,
  AccessTime as AccessTimeIcon,
  EventAvailable as EventAvailableIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { title: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { title: 'My Bands', path: '/bands', icon: <GroupIcon /> },
  { title: 'Schedule', path: '/schedule', icon: <ScheduleIcon /> },
  { title: 'My Availability', path: '/availability/me', icon: <AccessTimeIcon /> },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };
  
  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/rehearsals/create')}
            >
              <ListItemIcon><EventIcon /></ListItemIcon>
              <ListItemText primary="Schedule Rehearsal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => handleNavigation('/bands/create')}
            >
              <ListItemIcon><EventAvailableIcon /></ListItemIcon>
              <ListItemText primary="Create Band" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
  
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;