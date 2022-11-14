const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');


const getRoute = require('./routes/get');
const postRoute = require('./routes/post');
const putRoute = require('./routes/put');
const deleteRoute = require('./routes/delete');


const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUiExpress = require('swagger-ui-express');


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title : 'NodeJSMVCMySQL',
            description : 'NodeJs MVC MySql',
            contact : {
                name : 'Soumabha'
            },
            servers : ["http:\\localhost:8083"]
        }
    },
    apis: ["./routes/*.js"] 
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/NodeJSMVCMySQL/swagger-ui.html',swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/NodeJSMVCMySQL/get',getRoute);
app.use('/NodeJSMVCMySQL/post',postRoute);
app.use('/NodeJSMVCMySQL/put',putRoute);
app.use('/NodeJSMVCMySQL/delete',deleteRoute);


app.set('view engine','ejs');
app.set('views','views');

app.listen(8082);