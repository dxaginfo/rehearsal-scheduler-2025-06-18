import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';

// Layouts
import Layout from './components/layout/Layout';

// Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import BandsList from './pages/bands/BandsList';
import BandDetails from './pages/bands/BandDetails';
import CreateBand from './pages/bands/CreateBand';
import ScheduleView from './pages/schedule/ScheduleView';
import CreateRehearsal from './pages/rehearsals/CreateRehearsal';
import RehearsalDetails from './pages/rehearsals/RehearsalDetails';
import MyAvailability from './pages/availability/MyAvailability';
import TeamAvailability from './pages/availability/TeamAvailability';
import NotFound from './pages/NotFound';

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  
  // Placeholder for actual authentication check
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Box sx={{ height: '100%' }}>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="bands" element={<BandsList />} />
          <Route path="bands/create" element={<CreateBand />} />
          <Route path="bands/:bandId" element={<BandDetails />} />
          <Route path="schedule" element={<ScheduleView />} />
          <Route path="rehearsals/create" element={<CreateRehearsal />} />
          <Route path="rehearsals/:rehearsalId" element={<RehearsalDetails />} />
          <Route path="availability/me" element={<MyAvailability />} />
          <Route path="availability/team/:bandId" element={<TeamAvailability />} />
        </Route>
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;