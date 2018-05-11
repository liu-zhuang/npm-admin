import path from 'path';
import Router from 'koa-router';
import glob from 'glob';
import R from 'ramda';

const pathPrefix = Symbol('pathPrefix')

export const controller = prefix => target=> {
	target.prototype[pathPrefix] = prefix;
};

let routeMap = new Map();

const normalizePath = path => path.startsWith('/') ? path : `${path}`;

const setRouter = method => path => (target, name, descriptor) => {
	routeMap.set({
		target,
		method,
		path
	}, target[name]);
};


export const get = setRouter('get');




export class Route {
	constructor (app, routeFolderPath) {
		this.app = app;
		this.router = new Router();
		this.folder = routeFolderPath;
	}

	init ()  {
		const {app, router, folder} = this;

		glob.sync(path.resolve(folder, './**/*.js')).forEach(require);

		R.forEach(() => {

		})(routeMap);
	}
}