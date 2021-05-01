require('./database')
const app = require('./app');
const server = app.listen(app.get('port'));
//enviroment variables

//https://stackoverflow.com/questions/34829490/socket-io-io-use-fails-typeerror-io-use-is-not-a-function
console.log("server on port ", app.get('port'));

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.emit("hola");
});


/*
io.on('connection', function(socket) {
    fs.watch('data', function(event, filename) {
        fs.readFile('data/' + filename, function(err, data) {
            if (!err) {
                try {
                    
                    var x = JSON.parse(data);
                    console.log(data);
                  
                    socket.emit('updated', x);

                 
                    
                    var savingData = new appData({
                        clock: x.clock,
                        hours: x.hours,
                        minutes: x.minutes,
                        seconds: x.seconds
                    });

                    savingData.save(function(error, savedData) {
                        if (error) {
                            console.log("error in saving");
                        }
                        console.log(savedData);
                    });
                    

                } catch (e) {
                    console.log('malformed data');
                }


            }
        })
    });
});
*/