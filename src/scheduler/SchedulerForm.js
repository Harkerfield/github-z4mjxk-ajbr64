import React, { useState, useEffect, Component, StrictMode } from 'react';

// import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import { JsonForms } from '@jsonforms/react';

export default function SchedulerForm(props) {
  const [data, setData] = useState([]);
   
  const [timeDataMod, setTimeDataMod] = useState([]);

  const selectedThreat = props.threatData;
  const selectedTimes = props.timeData;
  const selectedUserDetails = props.userData;
  const selectedWeek = props.weekData;

  //woirking item 7-12-22

  useEffect(() => {
    setData({ threatForm: selectedThreat });
  }, [selectedThreat]);

  const schemaProp = {
    type: 'object',
    properties: {
      threatForm: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            Title: {
              type: 'string',
              readOnly: true,
              
            },
            mon: {
              title: 'M: 10-5-2020',
              type: 'string',
              readOnly: true,
            },
            tue: {
              type: 'string',
              readOnly: true,
            },
            wed: {
              type: 'string',
              readOnly: true,
            },
            thu: {
              type: 'string',
              readOnly: true,
            },
            fri: {
              type: 'string',
              readOnly: true,
            },
            sat: {
              type: 'string',
              readOnly: true,
            },
            sun: {
              type: 'string',
              readOnly: true,
            },
          },
        },
      },
    },
    // required: ['occupation', 'nationality'],
  };

  const [schema, setSchema] = useState(schemaProp);

  // useEffect(() => {
  //   //const [schema, setSchema] = useState(schemaProp);
  // }, [schemaProp]);

  useEffect(() => {
    const arrayitems = [];
    selectedTimes.map((element) => {
      // schema.properties.threatForm.items.push({ const: 'test', title: 'test' });

      // var sTime = element.startTime.replace(/(:\d{2})$/, '');
      // var eTime = element.endTime.replace(/(:\d{2})$/, '');
      if (element.startTime && element.endTime) {
        var sTime = element.startTime;
        var eTime = element.endTime;
        arrayitems.push(sTime + '-' + eTime);
      }
    });

    setTimeDataMod(arrayitems);
  }, [selectedTimes]);

  // useEffect(() => {
  //   //schema.properties.threatForm.items.properties
  // }, [timeDataMod]);

  console.log('testing Time Data mod', timeDataMod);

  console.log('testing SCHEMA', schema.properties.threatForm.items.properties);

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/threatForm',
      },
    ],
  };

  // const schema = person.schema;
  // const uischema = person.uischema;
  // const initialData = person.data;

  // const initialData = {
  //   threatForm: [
  //     {
  //       Title: 'John Doe',
  //     },
  //     {
  //       Title: 'John Does',
  //     },
  //   ],
  // };

  return (
    <>
      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(timeDataMod, null, 4)}</pre>
      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedUserDetails, null, 4)}
      </pre>

      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(data, null, 4)}
      </pre> */}

      <pre style={{ fontSize: 10 }}>
        {JSON.stringify(selectedWeek, null, 4)}
      </pre>

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
