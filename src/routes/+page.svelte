<script lang="ts">
	let text = '';
	let encoded = '';
	let byte = '';
	let showCopiedMessage = false;

	function encode(): string {
		// ゼロ幅スペースを挿入する関数
		return text.split('').join('\u200b');
	}
	// バイト数を計算
	function countBytes(str: string) {
		byte = `${encodeURI(str).split(/%..|./).length - 1} Bytes`;
	}
	function onClicked() {
		encoded = encode();
		countBytes(encoded);
	}
	function copyToClipboard() {
		navigator.clipboard
			.writeText(encoded)
			.then(() => {
				showCopiedMessage = true;
				setTimeout(() => {
					showCopiedMessage = false;
				}, 2000); // 2秒後にメッセージを消す
			})
			.catch((error) => {
				console.error('コピーに失敗しました: ', error);
			});
	}
</script>

<main class="max-w-lg mx-auto p-4">
	<h1 class="text-3xl font-bold underline text-blue-900 mb-4">検索除けツール</h1>
	<p>ゼロ幅スペース(U+200B zero width space)を使用して検索除け用の文章に変換を行います</p>
	<textarea
		class="w-full p-2 border-2 border-gray-300 rounded shadow-inner resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
		bind:value={text}
		rows="5"
		placeholder="テキストを入力してください"
	></textarea>
	<div class="flex space-x-2 mt-4">
		<button
			class="bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			on:click={onClicked}>変換</button
		>
		<button
			class="bg-indigo-700 text-white py-2 px-4 rounded font-semibold transition duration-300 ease-in-out hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			on:click={copyToClipboard}>コピー</button
		>
	</div>
	<pre
		class="mt-4 p-4 rounded-lg shadow overflow-auto font-mono text-sm leading-normal">{encoded}
	</pre>
	<p>{byte}</p>
	{#if showCopiedMessage}
		<div class="copied-message animate-bounce">コピーしました</div>
	{/if}
</main>

<style>
	:global(body) {
		font-family: 'Noto Sans JP', sans-serif;
		background-color: #f3f4f6;
	}
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
	}
	textarea {
		width: 100%;
		font-size: 1rem;
		border: none;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		margin-bottom: 1rem;
		resize: vertical; /* ユーザーがサイズを調整できるように */
	}
	button {
		margin-right: 0.5rem;
		border: none;
		border-radius: 8px;
		padding: 0.75rem 1.5rem;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}
	button:hover {
		background-color: #5a67d8; /* ホバー時の色変更 */
	}
	pre {
		background-color: #f5f5f5;
		padding: 1rem;
		border-radius: 8px;
		white-space: pre-wrap;
		word-wrap: break-word;
		margin-bottom: 1rem;
	}
	.copied-message {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 10px 20px;
		border-radius: 4px;
		font-size: 14px;
		animation: fadeInOut 4s forwards; /* アニメーションで表示と消去 */
	}
	@keyframes fadeInOut {
		0%,
		100% {
			opacity: 0;
		}
		10%,
		90% {
			opacity: 1;
		}
	}
</style>
