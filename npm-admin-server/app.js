import Koa from 'koa2';
import Router from 'koa-router';

import Repository from './controller/repository.js'

const app = new Koa();
const router = new Router();

router.get('/getAll', async (ctx, next) => {
	let temp = await Repository.QueryAllRepo();
	ctx.body = temp;
	next();
});

router.get('/', async (ctx, next) => {
	let temp = 'hello npm';
	ctx.body = temp;
	next();
});

app
.use(router.routes())
.use(router.allowedMethods());


app.listen(3000);