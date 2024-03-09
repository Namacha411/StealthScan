

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dpqlscKG.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.NjQNrUhK.js","_app/immutable/chunks/entry.CDnWi__X.js"];
export const stylesheets = [];
export const fonts = [];
