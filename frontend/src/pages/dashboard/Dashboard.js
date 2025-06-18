import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
} from '@mui/material';
import { 
  MusicNote as MusicNoteIcon, 
  Event as EventIcon,
  AccessTime as AccessTimeIcon,
  Room as RoomIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';

// In a real app, these would be imported from their respective slices
// import { fetchBands } from '../../features/bands/bandsSlice';
// import { fetchUpcomingRehearsals } from '../../features/rehearsals/rehearsalsSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  // This would use actual selectors in a real app
  const { bands, isLoading: bandsLoading } = {
    bands: [
      { id: '1', name: 'The Rockers', description: 'Rock band', memberCount: 4 },
      { id: '2', name: 'Jazz Ensemble', description: 'Jazz group', memberCount: 5 },
      { id: '3', name: 'Symphony Orchestra', description: 'Classical ensemble', memberCount: 25 },
    ],
    isLoading: false,
  };
  
  const { upcomingRehearsals, isLoading: rehearsalsLoading } = {
    upcomingRehearsals: [
      { 
        id: '1', 
        title: 'Weekly Practice', 
        band: { id: '1', name: 'The Rockers' },
        startDatetime: '2025-06-20T18:00:00Z', 
        endDatetime: '2025-06-20T20:00:00Z',
        location: 'Studio A',
        confirmedCount: 3,
        totalCount: 4,
      },
      {
        id: '2',
        title: 'Jazz Session',
        band: { id: '2', name: 'Jazz Ensemble' },
        startDatetime: '2025-06-21T19:00:00Z',
        endDatetime: '2025-06-21T21:30:00Z',
        location: 'Jazz Club',
        confirmedCount: 4,
        totalCount: 5,
      },
    ],
    isLoading: false,
  };
  
  useEffect(() => {
    // In a real app, these actions would be dispatched to fetch data
    // dispatch(fetchBands());
    // dispatch(fetchUpcomingRehearsals());
  }, [dispatch]);
  
  const formatDate = (dateString) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };
  
  const formatTime = (dateString) => {
    return format(new Date(dateString), 'h:mm a');
  };
  
  if (bandsLoading || rehearsalsLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }
  
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {user?.firstName || 'Musician'}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Here's what's happening with your bands
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Upcoming Rehearsals */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                Upcoming Rehearsals
              </Typography>
              
              {upcomingRehearsals.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  You don't have any upcoming rehearsals.
                </Typography>
              ) : (
                <List sx={{ width: '100%' }}>
                  {upcomingRehearsals.map((rehearsal) => (
                    <React.Fragment key={rehearsal.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            <EventIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" component="div">
                              {rehearsal.title}
                            </Typography>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" component="span" color="text.primary">
                                {rehearsal.band.name}
                              </Typography>
                              <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                  <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                  <Typography variant="body2">
                                    {formatDate(rehearsal.startDatetime)} · {formatTime(rehearsal.startDatetime)} - {formatTime(rehearsal.endDatetime)}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <RoomIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                  <Typography variant="body2">{rehearsal.location}</Typography>
                                </Box>
                              </Box>
                            </Box>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              )}
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                onClick={() => navigate('/schedule')}
              >
                View All Rehearsals
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/* My Bands */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                My Bands
              </Typography>
              
              {bands.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  You don't have any bands yet.
                </Typography>
              ) : (
                <List sx={{ width: '100%' }}>
                  {bands.map((band) => (
                    <React.Fragment key={band.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            <MusicNoteIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1" component="div">
                              {band.name}
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary">
                              {band.memberCount} {band.memberCount === 1 ? 'member' : 'members'}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              )}
            </CardContent>
            <CardActions>
              <Button 
                size="small" 
                onClick={() => navigate('/bands')}
              >
                View All Bands
              </Button>
              <Button 
                size="small" 
                color="primary" 
                onClick={() => navigate('/bands/create')}
              >
                Create Band
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;