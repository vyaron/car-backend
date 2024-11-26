export default {
  dbURL: process.env.MONGO_URL || 'mongodb+srv://puki:puki1234@mycluster.hipy1.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster',
  dbName : process.env.DB_NAME || 'app_db'
}
