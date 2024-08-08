const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/providers');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
