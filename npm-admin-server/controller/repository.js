import * as repositoryService from '../service/repositoryService.js';

class Repository {
	constructor (code, name, type, git, desc, author) {
		this.RepoCode = code;
		this.RepoName = name;
		this.RepoType = type;
		this.RepoGit = git;
		this.RepoDesc = desc;
		this.RepoAuthor = author;
	}

	CreateRepo () {
	}

	static async QueryAllRepo () {
		let temp = await repositoryService.queryRepository({
			keyword: 't',
			author: 'z'
		});
		return temp;
	}
}

export default Repository;