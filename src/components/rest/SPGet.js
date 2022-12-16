import React from 'react';
import tester from '../rest/tester.json';

export const SPGet = async (url) => {
  const payload = {
    method: 'GET',
    headers: { Accept: 'application/json; odata=verbose' },
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json;odata=verbose;charset=utf-8',
    'X-FRAME-OPTIONS': 'SAMEORIGIN',
    //crede1ntials: 'same-origin'    // or credentials: 'include'
    // credentials: 'include'    // or credentials: 'include'
  };

  return fetch(url, payload)
    .then((response) => response.json())
    .then((result) => result.d.results) //--> data
    .catch(tester);
};

export default SPGet;
