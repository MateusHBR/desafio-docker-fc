const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'dbmysql',
  user: 'root',
  password: 'mysecretpass',
  database: 'fullcycledb',
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const createTableScript = 'CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255) not null, primary key (id));'
connection.query(createTableScript)


app.get('/', (req, res) => {
  const insertScript = 'INSERT INTO people(name) values("Mateus");'
  connection.query(insertScript)

  const selectPeopleScript = 'SELECT name FROM people'
  connection.query(selectPeopleScript, (error, results) => {
    if (error) res.send(error.message)

    const names = results.map((p) => p.name).join(", ");

    res.send(`
      <h1> Full cycle </h1>
      Resultados: ${names}
    `)
  })
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
}).on("close", () => connection.end());