import Koa from 'koa2';
const app = new Koa();

import {Repository} from './schema/repository.js';

app.use(async (ctx, next) => {
	let temp = await Repository.findAll();

	ctx.body = temp;
	next();
});

app.listen(3000);