<script lang="ts">
	let text = '';
	let encoded = '';
	let showCopiedMessage = false;

	function encode() {
		// ゼロ幅スペースを挿入する関数
		encoded = text.split('').join('\u200b');
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

<main>
	<h1>検索除けツール</h1>
	<textarea bind:value={text} rows="5" placeholder="テキストを入力してください"></textarea>
	<button on:click={encode}>エンコード</button>
	<pre>{encoded}</pre>
	<button on:click={copyToClipboard}>コピー</button>
	{#if showCopiedMessage}
		<div class="copied-message">コピーしました</div>
	{/if}
</main>

<style>
	main {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
	}

	textarea {
		width: 100%;
		font-size: 1rem;
	}

	button {
		margin-right: 0.5rem;
	}

	pre {
		background-color: #f5f5f5;
		padding: 1rem;
		white-space: pre-wrap;
		word-wrap: break-word;
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
	}
</style>
