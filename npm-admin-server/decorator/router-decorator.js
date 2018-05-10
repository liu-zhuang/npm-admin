const prefixSymbol = Symbol('prefix');

export function controller (prefix) {
	return target => target.prototype[prefixSymbol] = prefix;
};