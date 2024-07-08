const express = require('express');
const { serverConfig , logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

console.log('on index.js');


app.listen( serverConfig.PORT, () => {
    console.log(`Server is running on port ${serverConfig.PORT}`);
    logger.info("successfull started the servver",{})
});
