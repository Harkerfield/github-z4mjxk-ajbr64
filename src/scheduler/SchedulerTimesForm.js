import React, { useState, useEffect, Component, StrictMode } from 'react';

import { useContext } from 'react';
import GlobalState from '../global/GlobalState.js';

import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import { JsonForms } from '@jsonforms/react';

const schema = {
  type: 'object',
  properties: {
    timeData: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          startTime: {
            type: 'string',
            description: '',
            format: 'time',
          },
          endTime: {
            type: 'string',
            description: '',
            format: 'time',
          },
        },
      },
    },
  },
};

const uischema = {
  type: 'ListWithDetail',
  scope: '#/properties/timeData',
  options: {
    detail: {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/startTime',
          label: 'Start Time',
        },
        {
          type: 'Control',
          scope: '#/properties/endTime',
          label: 'End Time',
        },
      ],
    },
  },
};

export default function SchedulerTimesForm() {
  const selectedTimes = {
    timeData: [
      {
        startTime: '10:00:00',
        endTime: '11:00:00',
      },
      {
        startTime: '13:00:00',
        endTime: '14:00:00',
      },
    ],
  };

  const myContext = useContext(GlobalState);

  const [data, setData] = useState(selectedTimes);

  useEffect(() => {
    myContext.setselectedTimes(data.timeData);
  }, [data]);

  // console.log('testing time data from STF', selectedTimes);

  return (
    <>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </>
  );
}
