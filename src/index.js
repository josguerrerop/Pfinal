  require('./database')
  const app = require('./app');
  const server = app.listen(app.get('port'));
  const fs = require('fs');
  const { watch } = require('gulp');
  const io = require('socket.io')(server, {
      cors: {
          origin: "http://localhost:4200",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true
      }
  });

  console.log("server on port ", app.get('port'));


  const k = './matpower7.1/pruebas/JSON/Documento2.json'
  const k2 = './matpower7.1/pruebas/JSON/generarP.json'
  const watcher = watch([k]);



  io.on('connection', function(socket) {
      console.log('new client')
      watcher.on('change', () => {
          const data = fs.readFileSync(k, { encoding: 'utf8', flag: 'r' });
          x = JSON.parse(data);
          socket.emit('test event', x);
      });
  });