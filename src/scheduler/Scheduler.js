//import React, { Component } from 'react';
//import React, { StrictMode } from 'react';
import React, { useState, useEffect, Component, StrictMode } from 'react';
//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material';
import Grid from '@mui/material/Grid';

import ListDisplay from '../components/list/ListDisplay.js';
import Calendar from '../components/calendar/Calendar.js';

import SPGet from '../components/rest/SPGet.js';

import GlobalState from '../global/GlobalState.js';

import SchedulerUserForm from './SchedulerUserForm.js';
import SchedulerTimesForm from './SchedulerTimesForm.js';

import SchedulerForm from './SchedulerForm.js';

// openlayers
import GeoJSON from 'ol/format/GeoJSON';

import KML from 'ol/format/KML';
import Feature from 'ol/Feature';

import MapWrapper from '../components/openLayers/MapWrapper.js';

import threatTester from '../components/rest/tester.json';

export default function Scheduler() {
  //This will be the global variable
  // Define as many global variables as your app needs, and hooks
  // to set the state of the variable.
  const [selectedThreats, setselectedThreats] = useState([]);
  const [selectedThreatsKML, setselectedThreatsKML] = useState('');
  // const [setting2value, setSetting2value] = useState(false);

  const [selectedTimes, setselectedTimes] = useState([]);
  const [selectedUserDetails, setselectedUserDetails] = useState([]);

  const [selectedWeek, setselectedWeek] = useState([]);

  // For each global variable, define a function for updating it.
  // In the case of settingSelectedThreats, we’ll just use setsettingSelectedThreats.

  // If we want to toggle setting2value, we can create a function to do so...

  const selectedSettings = {
    selectedThreatsName: selectedThreats,
    selectedTimesName: selectedTimes,
    selectedTimesName: selectedTimes,
    selectedUserName: selectedUserDetails,
    selectedWeekName: selectedWeek,
    // setting2name: setting2value,
    setselectedThreats,
    setselectedTimes,
    setselectedUserDetails,
    setselectedWeek,
    // toggleSetting2,
  };

  // useEffect(() => {
  //   // toggleSetting2("test");
  //   setselectedThreats('test123');
  // }, []); // <-- empty dependency array

  //This will be the global variable

  // console.log(selectedThreats);

  useEffect(() => {
    //let status = '#redStyle';
    //console.log('scheduler log', selectedThreats);
    let kmlContent = '';
    selectedThreats.map(
      (selected) =>
        (kmlContent +=
          '<Placemark>' +
          '<name>' +
          selected.Equipment_x002f_Threat +
          // '\n' +
          // selected.serial +
          '/' +
          selected.Equipment_x002f_Threat +
          '</name>' +
          '<styleUrl>#' +
          selected.Status +
          '</styleUrl>' +
          '<Point>' +
          '<coordinates>' +
          parseFloat(selected.Lon_x0020_DD) +
          ',' +
          parseFloat(selected.Lat_x0020_DD) +
          ',0</coordinates>' +
          '</Point>' +
          '</Placemark>')
    );

    let kmlStart = `<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>JESTR Export 2022-05-29</name><Camera><longitude>-144.6115629357254</longitude><latitude>62.90816645843766</latitude><altitude>491799.148906222</altitude><heading>-4.73536142512005</heading><tilt>18.30903346303281</tilt><roll>0.7595612705727459</roll><gx:altitudeMode>relativeToSeaFloor</gx:altitudeMode></Camera><Style id="NA"><IconStyle><scale>0.5</scale><Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon></IconStyle></Style><Style id="GREEN"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconGreenCrossHair.svg</href></Icon></IconStyle></Style><Style id="AMBER"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconYellowCrossHair.svg</href></Icon></IconStyle></Style><Style id="RED"><IconStyle><scale>0.09</scale><Icon><href>/sites/354RANS/JESTR2/app/icons/iconRedCrossHair.svg</href></Icon></IconStyle></Style>${kmlContent}</Document></kml>`;

    setselectedThreatsKML(kmlStart);
  }, [selectedThreats]); // <-- empty dependency ar

  // set intial state
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // fetch('/mock-geojson-api.json')
    // .then((response) => response.json())
    // .then((fetchedFeatures) => {
    // parse fetched geojson into OpenLayers features
    //  use options to convert feature from EPSG:4326 to EPSG:3857
    const wktOptions = {
      dataProjection: 'EPSG:4326',
      featureProjection: 'EPSG:3857',
    };
    const parsedFeatures = new KML().readFeatures(
      selectedThreatsKML,
      wktOptions
    );
    //console.log('selected Threats', selectedThreatsKML);
    // console.log('Parsed Features', parsedFeatures);

    // set features into state (which will be passed into OpenLayers
    //  map component as props)
    setFeatures(parsedFeatures);
    // });
  }, [selectedThreatsKML]);

  const columns = [
    // { field: 'ID', headerName: 'ID'},
    {
      field: 'Equipment_x002f_Threat',
      headerName: 'Equip Threat',
      width: 130,
    },
    {
      field: 'System_x0020_Type',
      headerName: 'System Type',
      width: 130,
    },
    { field: 'ETIC', headerName: 'ETIC', width: 130 },
    { field: 'Operational', headerName: 'Operational', width: 130 },
    { field: 'Schedulable', headerName: 'Schedulable', width: 130 },
    { field: 'Status', headerName: 'Status', width: 130 },

    { field: 'Title', headerName: 'location', width: 130 },
    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const [threatsList, setThreatsList] = useState([]);

  useEffect(() => {
    SPGet(
      "https://intelshare.intelink.gov/sites/354RANS/JESTR2/_api/web/lists/GetByTitle('JPARC%20Threats')/items"
    ) //--> fetch data when component is mounted
      .then((response) => setThreatsList(response))
      .catch((error) => {
        console.log('Running Threast tester due to error', threatTester);
        setThreatsList(threatTester);
      });

    setThreatsList(threatTester);
  }, []);
  //...

  return (
    <Box className="App">
      <GlobalState.Provider value={selectedSettings}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    Threat Data
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
            <Box>
              <ListDisplay
                jsonData={threatsList}
                columnData={columns}
                multiSelect={true}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    Map
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>

            <MapWrapper features={features} />
          </Grid>

          <Grid xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    Selected Items
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
          </Grid>

          <Grid xs={6}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    User Form
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
            <Box>
              <SchedulerUserForm />
            </Box>
          </Grid>
          <Grid xs={6}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    VUL Times
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>

            <Box>
              <SchedulerTimesForm />
            </Box>
          </Grid>

          <Grid xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography
                    variant="h6"
                    color="inherit"
                    component="div"
                    className="app-label"
                  >
                    Schedule Form
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>

            <SchedulerForm
              threatData={selectedThreats}
              timeData={selectedTimes}
              userData={selectedUserDetails}
              weekData={selectedWeek}
            />
          </Grid>
        </Grid>
      </GlobalState.Provider>
    </Box>
  );
}
