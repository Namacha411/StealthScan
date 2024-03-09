import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const css = {
  code: "body{font-family:'Noto Sans JP', sans-serif;background-color:#f3f4f6}main.svelte-1fniv23{max-width:600px;margin:0 auto;padding:2rem}textarea.svelte-1fniv23{width:100%;font-size:1rem;border:none;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);padding:1rem;margin-bottom:1rem;resize:vertical}button.svelte-1fniv23{margin-right:0.5rem;border:none;border-radius:8px;padding:0.75rem 1.5rem;cursor:pointer;transition:background-color 0.3s ease}button.svelte-1fniv23:hover{background-color:#5a67d8}pre.svelte-1fniv23{background-color:#f5f5f5;padding:1rem;border-radius:8px;white-space:pre-wrap;word-wrap:break-word;margin-bottom:1rem}.copied-message.svelte-1fniv23{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background-color:rgba(0, 0, 0, 0.8);color:white;padding:10px 20px;border-radius:4px;font-size:14px;animation:svelte-1fniv23-fadeInOut 4s forwards}@keyframes svelte-1fniv23-fadeInOut{0%,100%{opacity:0}10%,90%{opacity:1}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let encoded = "";
  $$result.css.add(css);
  return `<main class="max-w-lg mx-auto p-4 svelte-1fniv23"><h1 class="text-3xl font-bold underline text-blue-900 mb-4" data-svelte-h="svelte-vgupbt">検索除けツール</h1> <textarea class="w-full p-2 border-2 border-gray-300 rounded shadow-inner resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23" rows="5" placeholder="テキストを入力してください">${escape("")}</textarea> <div class="flex space-x-2 mt-4"><button class="bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23" data-svelte-h="svelte-1fmruzf">変換</button> <button class="bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 svelte-1fniv23" data-svelte-h="svelte-15b9na">コピー</button></div> <pre class="mt-4 p-4 rounded-lg shadow overflow-auto font-mono text-sm leading-normal svelte-1fniv23">${escape(encoded)}
	</pre> ${``} </main>`;
});
export {
  Page as default
};
