const express = require('express');
const app = express();

const routesReport = require('rowdy-logger').begin(app);

app.use(require('morgan')('tiny'));
app.use(require('cors')());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);

app.listen(3001, () => {
  routesReport.print();
});
