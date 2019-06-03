const path = require('path')
module.exports={
    port:process.env.PORT || 8081,
    db:{
        database:process.env.DB_NAME || 'vueproject',
        user:process.env.DB_USER || 'vueuser',
        password:process.env.DB_PASS || 'pass',
        options:{
         dialect:process.env.DIALECT || 'sqlite',
            host:process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../vueproject.sqlite')           
        }
    },
    authentication:{
        jwtSceret:process.env.JWT_SCERET || 'sceret'
    }
}