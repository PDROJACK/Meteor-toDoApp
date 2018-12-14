import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import "./main.html";
import App from '../imports/ui/app.js';

Meteor.startup(()=>{
  render(<App />, document.getElementById('render-target'));
});

