import Router from 'koa-router';

import Repo from '../controller/repository.js';
console.log(Repo);
const router = app => {
	const router = new Router();

	router.get('/getAll', async (ctx, next) => {
		ctx.body = 'getall';
		next();
	});

	router.get('/', async (ctx, next) => {
		let temp = 'hello npm';
		console.log('repo', Repo);
		ctx.body = temp;
		next();
	});

	 // router.get('/repo', repo.QueryAllRepo);

	app.use(router.routes())
	.use(router.allowedMethods());
}

module.exports = router;