export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bg87hbqW.js","app":"_app/immutable/entry/app.BJEM38Mb.js","imports":["_app/immutable/entry/start.Bg87hbqW.js","_app/immutable/chunks/entry.CDnWi__X.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/entry/app.BJEM38Mb.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.NjQNrUhK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
