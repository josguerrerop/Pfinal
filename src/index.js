require('./database')
const app = require('./app');
app.listen(app.get('port'));
//enviroment variables


console.log("server on port ", app.get('port'));