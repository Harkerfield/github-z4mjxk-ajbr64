import React, { useState, useEffect, Component, StrictMode } from 'react';

import { useContext } from 'react';
import GlobalState from '../global/GlobalState.js';

// import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import { JsonForms } from '@jsonforms/react';

import dayjs from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const schema = {
  type: 'object',
  properties: {
    squadron: {
      type: 'string',
      enum: ['Demons', 'Falcons', 'Other'],
    },
    poc: {
      type: 'string',
    },
    dsn: {
      type: 'string',
    },
  },
  required: ['squadron'],
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Select Squadron',
      scope: '#/properties/squadron',
    },
    {
      type: 'Control',
      label: 'Squadron (If Other) / POC Name',
      scope: '#/properties/poc',
    },
    {
      type: 'Control',
      label: 'DSN/Contact info',
      scope: '#/properties/dsn',
    },
  ],
};

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));

export default function SchedulerUserForm() {
  const selectedUserDetails = {
    squadron: 'Other',
    poc: '/',
    dsn: '(907) 377-XXXX',
  };

  const myContext = useContext(GlobalState);

  const [data, setData] = useState(selectedUserDetails);

  useEffect(() => {
    myContext.setselectedUserDetails(data);
  }, [data]);

  let today = new Date().toLocaleDateString();
  const [valueWeek, setValueWeek] = React.useState(dayjs(today));

  const [valueWeekStart, setValueWeekStart] = React.useState([]);

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!valueWeek) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = valueWeek.startOf('week');
    const end = valueWeek.endOf('week');

    const startWeek = start.$d;
    console.log(
      startWeek.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    );

    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  useEffect(() => {
    myContext.setselectedWeek(valueWeekStart);
  }, [valueWeekStart]);

  return (
    <>
      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(data, null, 4)}</pre> */}
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
      Select a Week...
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          label="Week picker"
          value={valueWeek}
          onChange={(newValue) => {
            setValueWeek(newValue);
          }}
          renderDay={renderWeekPickerDay}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="'Week of' MMM d"
        />
      </LocalizationProvider>
    </>
  );
}
