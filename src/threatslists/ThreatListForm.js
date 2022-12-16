import React, { useState, useEffect, Component, StrictMode } from 'react';

// import { person } from '@jsonforms/examples';
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';

import { JsonForms } from '@jsonforms/react';

const schema = {
  type: 'object',
  properties: {
    ID: {
      type: 'integer',
    },
    Title: {
      type: 'string',
    },
    Threat: {
      type: 'string',
    },
    Equipment: {
      type: 'string',
    },
    System_x0020_Type: {
      type: 'string',
    },
    Threat_x0020_Location: {
      type: 'string',
    },
    Latitude: {
      type: 'string',
    },
    Longitude: {
      type: 'string',
    },
    Elevation: {
      type: 'integer',
    },
    Range: {
      type: 'string',
    },
    Bullseye_x0020__x0028_MIZZI_x002: {
      type: 'string',
    },
    Coord_x0020_Source: {
      type: 'string',
    },
    Coord_x0020_Recorded_x0020_Date: {
      type: 'string',
    },
    Accuracy: {
      type: 'string',
    },

    Status: {
      type: 'string',
      enum: ['GREEN', 'AMBER', 'RED', 'N/A'],
    },
    Schedulable: {
      type: 'string',
      minLength: 3,
      description: '',
    },
    Operational: {
      type: 'string',
      minLength: 3,
      description: '',
    },
    Notes: {
      type: 'string',
      minLength: 3,
      description: '',
    },
    Status_x0020_Change_x0020_date: {
      type: 'string',
      minLength: 3,
      description: '',
    },
    ETIC: {
      type: 'string',
      minLength: 3,
      description: '',
    },
  },
  // required: ['occupation', 'nationality'],
};

const uischema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Label',
      text: 'Threat Data',
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/ID',
        },
        {
          type: 'Control',
          scope: '#/properties/Title',
        },
        {
          type: 'Control',
          scope: '#/properties/Threat',
        },
        {
          type: 'Control',
          scope: '#/properties/Equipment',
        },
        {
          type: 'Control',
          scope: '#/properties/System_x0020_Type',
        },
        {
          type: 'Control',
          scope: '#/properties/Threat_x0020_Location',
        },
      ],
    },
    {
      type: 'Label',
      text: 'Geo Location',
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/Latitude',
        },
        {
          type: 'Control',
          scope: '#/properties/Longitude',
        },
        {
          type: 'Control',
          scope: '#/properties/Elevation',
        },
        {
          type: 'Control',
          scope: '#/properties/Range',
        },
        {
          type: 'Control',
          scope: '#/properties/Bullseye_x0020__x0028_MIZZI_x002',
        },
        {
          type: 'Control',
          scope: '#/properties/Coord_x0020_Source',
        },
        {
          type: 'Control',
          scope: '#/properties/Coord_x0020_Recorded_x0020_Date',
        },
        {
          type: 'Control',
          scope: '#/properties/Accuracy',
        },
      ],
    },
    {
      type: 'Label',
      text: 'MX Info',
    },
    {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/Status',
        },
        {
          type: 'Control',
          scope: '#/properties/Schedulable',
        },
        {
          type: 'Control',
          scope: '#/properties/Operational',
        },
        {
          type: 'Control',
          scope: '#/properties/Notes',
        },
        {
          type: 'Control',
          scope: '#/properties/Status_x0020_Change_x0020_date',
        },
        {
          type: 'Control',
          scope: '#/properties/ETIC',
        },
      ],
    },
  ],
};

export default function ThreatsListForm(props) {
  // const schema = person.schema;
  // const uischema = person.uischema;
  // const initialData = person.data;

  // const initialData = {
  //   "name": "John Doe",
  //   "vegetarian": false,
  //   "birthDate": "1985-06-02",
  //   "personalData": {
  //     "age": 34
  //   },
  //   "postalCode": "12345"
  // }

  const selectedThreat = props.jsonData;

  console.log('testing threat selectedThreat', selectedThreat);

  const [data, setData] = useState({});

  useEffect(() => {
    setData(selectedThreat[0]);
  }, [selectedThreat]);

  console.log('testing threat data', data);

  return (
    <>
      {/* <pre style={{ fontSize: 10 }}>{JSON.stringify(selectedThreat[0], null, 4)}</pre> */}

      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
        readonly
      />
    </>
  );
}
