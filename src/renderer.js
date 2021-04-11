function log(){
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if (login=="admin" && password=="5677"){
        document.location.href='menu.html';
    }
    else
    {
        document.location.href='index.html';
    }
}
function onworker(){
    document.location.href='addworker.html'
}
const { build } = require('electron-builder');
const sqlite = require('sqlite3');
async function main () {
    console.log('Start');
    let db = await new Promise((resolve, rejectc) =>{
        let db = new sqlite.Database('avto', (err) => {
            if (err) {
              return rejectc(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
            resolve(db);
            
        })
    });
    db.run("CREATE TABLE worker(\
        id_worker INTEGER PRIMARY KEY AUTOINCREMENT, \
        name_worker TEXT NOT NULL, \
        surname_worker TEXT NOT NULL, \
        patronomic TEXT NULL, \
        phonenum INTEGER NOT NULL, \
        passnum INTEGER NOT NULL, \
        passser INTEGER NOT NULL)");
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
      console.log('finish cmd');
    };
    
async function main2 () {
    console.log('start');
    let db = new sqlite.Database('avto');
    console.log('Connected to the in-memory SQlite database.');
    db.run("CREATE TABLE worker(\
        id_worker INTEGER PRIMARY KEY AUTOINCREMENT, \
        name_worker TEXT NOT NULL, \
        surname_worker TEXT NOT NULL, \
        patronomic TEXT NULL, \
        phonenum INTEGER NOT NULL, \
        passnum INTEGER NOT NULL, \
        passser INTEGER NOT NULL)");
    db.close();
    console.log('end')   
}
main();
