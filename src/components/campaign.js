import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { orange, green, red } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import 'fontsource-roboto';
// import { Bar, PolarArea, Radar, Line, Pie, Doughnut } from 'react-chartjs-2';
import Apbar from './appbar.js'
import Nvbar from './nvbar.js'
import CampaignChart from './campaigns/campaignChart.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, 
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  cardm: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  linechart:{
    fontSize:'15px',
    textAlign:'left',
        // lineHeight:'25px',  
        marginBottom: '0px',
        color: '#f0933d',
        fontWeight:'bold'
        // height: '330px !important'
  },
  smallbox:{
    display: 'flex'
  },
  boxstyle:{
    margin:'4px',
    width: '100%',
    height: '90px',
    fontSize:'12px',
    borderTop:'2px solid blue',
  },
  cardcontentcls:{
    padding: '9px',
    paddingBottom: '0px !important'
  }
}));

const theme=createMuiTheme({
  typography:{
    h2: {
        // fontSize:30,
        // marginBottom:10
    }
  },
  palette:{ 
    primary:{
      main:green[500],
    },
    secondary:{
      main:orange[500],
    }
  }
})

const columns = [
  { field: 'id', headerName: 'ID' },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'impr',
    headerName: 'Impr',
    width: 130,
    editable: true,
  },
  {
    field: 'clicks',
    headerName: 'Clicks',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: 'ctr',
    headerName: 'CTR',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'conv',
    headerName: 'Conv',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'cvr',
    headerName: 'CVR',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'cpl',
    headerName: 'CPL',
    type: 'number',
    width: 10,
    editable: true,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    type: 'number',
    width: 110,
    editable: true,
  },
  
];

const rows = [
  { id: 1, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 2, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 3, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 4, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 5, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 6, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 7, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 8, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
  { id: 9, name: 'Advertise Here JO', impr: '82.74K', clicks: '15,381', ctr:'0.289%',conv:'0',cvr:'0%',cpl:'$0',cost:'$307.62' },
];

function Campaigns(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <Apbar />
      <Nvbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid item xs={12} md={12} sm={12} style={{borderBottom: '1px solid',display: 'flex'}}> 
                
                      <Typography  paragraph >
                        Add Filter 
                      </Typography>
                      <Typography  paragraph>
                        Campaign All 
                      </Typography>
                      <Typography  paragraph>
                        Date Range
                      </Typography>
               
              </Grid>

          <Grid container spacing={1}>
              <Grid item xs={12} md={12} sm={12} > 
                <Card className="">
                    <CardContent>
                      <Typography className={classes.linechart} >
                        <CampaignChart />
                      </Typography>
                    </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} sm={12} > 
                <Card className="">
                  <CardContent>
                      <Typography className={classes.linechart} >
                        My campaigns
                      </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={12} sm={12} > 
                <Card className="">
                      <Typography className={classes.linechart} >
                      <div style={{ height: 360, width: '100%' }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          pageSize={5}
                          
                          disableSelectionOnClick
                        />
                        </div>
                      </Typography>
                </Card>
              </Grid>
          </Grid>
          <Divider />
      </main>
    </div>
    </ThemeProvider>
  );
}

Campaigns.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Campaigns;
