const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'hello_world_db',
 'root',
 '315138',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);


sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

 
sequelize.query(
    'SELECT * FROM students WHERE student_id = ?',
    {
      replacements: [1],
      type: sequelize.QueryTypes.SELECT
    }
).then(result => {
    console.log(result);
}).catch((error) => {
    console.error('Failed to insert data : ', error);
});