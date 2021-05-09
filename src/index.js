  require('./database')
  const app = require('./app');
  const server = app.listen(app.get('port'));
  const fs = require('fs');
  const { watch } = require('gulp');
  const io = require('socket.io')(server);

  console.log("server on port ", app.get('port'));


  const k = './matpower7.1/pruebas/JSON/Documento2.json'
  const k2 = './matpower7.1/pruebas/JSON/generarP.json'
  const watcher = watch([k]);


  /*
    watcher.on('change', () => {
        const data = fs.readFileSync(k, { encoding: 'utf8', flag: 'r' });
        x = JSON.parse(data);
    });
  */



  io.on('connection', function(socket) {
      socket.emit("hola");
  });