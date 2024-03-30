const dontenv = require('dotenv');
dontenv.config();
module.exports={
    PORT:process.env.PORT,
    MONGO_PORT:process.env.MONGO_PORT,
    SALT_ROUND:process.env.SALT_ROUND
}
