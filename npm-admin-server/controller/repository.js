import {queryRepository} from '../service/repositoryService.js';

import {controller, get} from '../decorator/router-decorator.js';

@controller('/api/v0/repo')
export default class RepositoryController {
	@get('/getall')
	async QueryAllRepo (ctx, next) {
		const {keyword, author} = ctx.request.body;
		let temp = await queryRepository({
			keyword: keyword ? keyword : '',
			author: author ? author : ''
		});
		ctx.body = temp;
		next();
	}
}