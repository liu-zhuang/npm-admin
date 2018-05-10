import {queryRepository} from '../service/repositoryService.js';

import {controller} from '../decorator/router-decorator.js';


// @controller('/api/v0')
class RepositoryController {

	async QueryAllRepo (ctx, next) {
		const {keyword, author} = ctx.request.body;
		let temp = await queryRepository({
			keyword,
			author
		});
		ctx.body = temp;
		next();
	}
}

export default RepositoryController;