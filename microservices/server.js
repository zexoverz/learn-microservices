const path = require('path');
const gateway = require('express-gateway');

import './services/user';
import './services/music';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
