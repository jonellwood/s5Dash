<script lang="ts">
	type Theme = [
		{
			name: string;
			cardBgColor: string;
			mainTextColor: string;
			borderWidth: string;
			borderColor: string;
			shadowColor: string;
			bodyBgColor: string;
			fontSizeBase: string;
			headlineTextColor: string;
			shadowLength: string;
		}
	];
	let theme = $state<Theme[]>([]);

	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		savedTheme && (theme = JSON.parse(savedTheme));
		console.log(savedTheme);
	});

	$effect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	});

	const defaultValues = {
		name: 'Default Theme',
		cardBgColor: '#ffffff',
		mainTextColor: '#000000',
		borderWidth: '4',
		borderColor: '#2f4f4f',
		shadowColor: '#808080',
		bodyBgColor: '#dddddd',
		fontSizeBase: '16',
		headlineTextColor: '#000000',
		shadowLength: '20'
	};

	const berkThemeValues = {
		name: 'Berkeley Theme',
		cardBgColor: '#005677',
		mainTextColor: '#000000',
		borderWidth: '4',
		borderColor: '#286142',
		shadowColor: '#789b48',
		bodyBgColor: '#cbc8c720',
		fontSizeBase: '16',
		headlineTextColor: '#cbc8c7',
		shadowLength: '10'
	};

	const googleThemeValues = {
		name: 'Google Theme',
		cardBgColor: '#4285f4',
		mainTextColor: '#ffffff',
		borderWidth: '2',
		borderColor: '#ea4335',
		shadowColor: '#fbbc05',
		bodyBgColor: '#ffffff',
		fontSizeBase: '16',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};

	const fallThemeValues = {
		name: 'Fall Theme',
		cardBgColor: '#336b87',
		mainTextColor: '#90Afc5',
		borderWidth: '2',
		borderColor: '#763626',
		shadowColor: '#2A3132',
		bodyBgColor: '#90AFC5',
		fontSizeBase: '16',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const springThemeValues = {
		name: 'Spring Theme',
		cardBgColor: '#80bd9e',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#FF420E',
		shadowColor: '#89DA59',
		bodyBgColor: '#FF420E50',
		fontSizeBase: '14',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const natureThemeValues = {
		name: 'Nature Theme',
		cardBgColor: '#598123',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#505160',
		shadowColor: '#505160',
		bodyBgColor: '#68829E',
		fontSizeBase: '14',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const vibrantThemeValues = {
		name: 'Vibrant Theme',
		cardBgColor: '#375e97',
		mainTextColor: '#ffffff',
		borderWidth: '4',
		borderColor: '#ffffff',
		shadowColor: '#3f681C',
		bodyBgColor: '#FFBB00',
		fontSizeBase: '14',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const basicThemeValues = {
		name: 'Basic Theme',
		cardBgColor: '#edb83d',
		mainTextColor: '#050505',
		borderWidth: '4',
		borderColor: '#D70026',
		shadowColor: '#000B29',
		bodyBgColor: '#000B2940',
		fontSizeBase: '16',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const highContrastTheme = {
		name: 'High Contrast Light',
		cardBgColor: '#ffffff',
		mainTextColor: '#000000',
		borderWidth: '3',
		borderColor: '#000000',
		shadowColor: '#ffffff',
		bodyBgColor: '#ffffff',
		fontSizeBase: '16',
		headlineTextColor: '#32CD32',
		shadowLength: '10'
	};
	const highContrastThemeDark = {
		name: 'High Contrast Dark',
		cardBgColor: '#000000',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#ffffff',
		shadowColor: '#000000',
		bodyBgColor: '#000000',
		fontSizeBase: '16',
		headlineTextColor: '#32CD32',
		shadowLength: '10'
	};
	const gryffindoreTheme = {
		name: 'Gryffindore Theme',
		cardBgColor: '#eeba30',
		mainTextColor: '#000000',
		borderWidth: '3',
		borderColor: '#ae0001',
		shadowColor: '#ededed',
		bodyBgColor: '#740001',
		fontSizeBase: '14',
		headlineTextColor: '#000000',
		shadowLength: '10'
	};
	const slytherinTheme = {
		name: 'Slytherin Theme',
		cardBgColor: '#2a6e29',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#000000',
		shadowColor: '#aaaaaa',
		bodyBgColor: '#003407',
		fontSizeBase: '14',
		headlineTextColor: '#ffffff',
		shadowLength: '10'
	};
	const ravenclawTheme = {
		name: 'Ravenclaw Theme',
		cardBgColor: '#222f5b',
		mainTextColor: '#ffffff',
		borderWidth: '3',
		borderColor: '#5d5d5d',
		shadowColor: '#946b2d',
		bodyBgColor: '#0e1a40',
		fontSizeBase: '14',
		headlineTextColor: '#ffffff',
		shadowLength: '10'
	};
	const hufflepuffTheme = {
		name: 'Hufflepuff Theme',
		cardBgColor: '#f0c75e',
		mainTextColor: '#372e29',
		borderWidth: '4',
		borderColor: '#5d5d5d',
		shadowColor: '#eed800',
		bodyBgColor: '#726355',
		fontSizeBase: '14',
		headlineTextColor: '#372e29',
		shadowLength: '10'
	};
	function randomThemeValues() {
		// console.log('Setting to random');
		const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

		return {
			name: 'Random Theme',
			cardBgColor: getRandomColor(),
			mainTextColor: getRandomColor(),
			borderWidth: Math.floor(Math.random() * 8) + 1,
			borderColor: getRandomColor(),
			shadowColor: getRandomColor(),
			bodyBgColor: getRandomColor(),
			fontSizeBase: Math.floor(Math.random() * 10) + 12,
			headlineTextColor: getRandomColor(),
			shadowLength: Math.floor(Math.random() * 8) + 1
		};
	}
	function setToRandom() {
		// console.log(randomThemeValues());
		const name = 'Random Theme';
		const cardBgColor = randomThemeValues().bodyBgColor;
		const mainTextColor = randomThemeValues().mainTextColor;
		const borderWidth = randomThemeValues().borderWidth;
		const borderColor = randomThemeValues().borderColor;
		const shadowColor = randomThemeValues().shadowColor;
		const bodyBgColor = randomThemeValues().bodyBgColor;
		const fontSizeBase = randomThemeValues().fontSizeBase;
		const headlineTextColor = randomThemeValues().headlineTextColor;
		const shadowLength = randomThemeValues().shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToDefault() {
		const name = defaultValues.name;
		const cardBgColor = defaultValues.cardBgColor;
		const mainTextColor = defaultValues.mainTextColor;
		const borderWidth = defaultValues.borderWidth;
		const borderColor = defaultValues.borderColor;
		const shadowColor = defaultValues.shadowColor;
		const bodyBgColor = defaultValues.bodyBgColor;
		const fontSizeBase = defaultValues.fontSizeBase;
		const headlineTextColor = defaultValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}

	function setToBerk() {
		console.log('setting to Berkley');

		const name = berkThemeValues.name;
		const cardBgColor = berkThemeValues.cardBgColor;
		const mainTextColor = berkThemeValues.mainTextColor;
		const borderWidth = berkThemeValues.borderWidth;
		const borderColor = berkThemeValues.borderColor;
		const shadowColor = berkThemeValues.shadowColor;
		const bodyBgColor = berkThemeValues.bodyBgColor;
		const fontSizeBase = berkThemeValues.fontSizeBase;
		const headlineTextColor = berkThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToGoogle() {
		console.log('setting to Google');

		const name = googleThemeValues.name;
		const cardBgColor = googleThemeValues.cardBgColor;
		const mainTextColor = googleThemeValues.mainTextColor;
		const borderWidth = googleThemeValues.borderWidth;
		const borderColor = googleThemeValues.borderColor;
		const shadowColor = googleThemeValues.shadowColor;
		const bodyBgColor = googleThemeValues.bodyBgColor;
		const fontSizeBase = googleThemeValues.fontSizeBase;
		const headlineTextColor = googleThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToFall() {
		console.log('setting to Fall');

		const name = fallThemeValues.name;
		const cardBgColor = fallThemeValues.cardBgColor;
		const mainTextColor = fallThemeValues.mainTextColor;
		const borderWidth = fallThemeValues.borderWidth;
		const borderColor = fallThemeValues.borderColor;
		const shadowColor = fallThemeValues.shadowColor;
		const bodyBgColor = fallThemeValues.bodyBgColor;
		const fontSizeBase = fallThemeValues.fontSizeBase;
		const headlineTextColor = fallThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToSpring() {
		console.log('setting to Spring');

		const name = springThemeValues.name;
		const cardBgColor = springThemeValues.cardBgColor;
		const mainTextColor = springThemeValues.mainTextColor;
		const borderWidth = springThemeValues.borderWidth;
		const borderColor = springThemeValues.borderColor;
		const shadowColor = springThemeValues.shadowColor;
		const bodyBgColor = springThemeValues.bodyBgColor;
		const fontSizeBase = springThemeValues.fontSizeBase;
		const headlineTextColor = springThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToNature() {
		console.log('setting to Nature');

		const name = natureThemeValues.name;
		const cardBgColor = natureThemeValues.cardBgColor;
		const mainTextColor = natureThemeValues.mainTextColor;
		const borderWidth = natureThemeValues.borderWidth;
		const borderColor = natureThemeValues.borderColor;
		const shadowColor = natureThemeValues.shadowColor;
		const bodyBgColor = natureThemeValues.bodyBgColor;
		const fontSizeBase = natureThemeValues.fontSizeBase;
		const headlineTextColor = natureThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToVibrant() {
		console.log('setting to Vibrant');

		const name = vibrantThemeValues.name;
		const cardBgColor = vibrantThemeValues.cardBgColor;
		const mainTextColor = vibrantThemeValues.mainTextColor;
		const borderWidth = vibrantThemeValues.borderWidth;
		const borderColor = vibrantThemeValues.borderColor;
		const shadowColor = vibrantThemeValues.shadowColor;
		const bodyBgColor = vibrantThemeValues.bodyBgColor;
		const fontSizeBase = vibrantThemeValues.fontSizeBase;
		const headlineTextColor = vibrantThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToBasic() {
		console.log('setting to Basic');

		const name = basicThemeValues.name;
		const cardBgColor = basicThemeValues.cardBgColor;
		const mainTextColor = basicThemeValues.mainTextColor;
		const borderWidth = basicThemeValues.borderWidth;
		const borderColor = basicThemeValues.borderColor;
		const shadowColor = basicThemeValues.shadowColor;
		const bodyBgColor = basicThemeValues.bodyBgColor;
		const fontSizeBase = basicThemeValues.fontSizeBase;
		const headlineTextColor = basicThemeValues.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToHighContrast() {
		console.log('setting to High Contrast');

		const name = highContrastTheme.name;
		const cardBgColor = highContrastTheme.cardBgColor;
		const mainTextColor = highContrastTheme.mainTextColor;
		const borderWidth = highContrastTheme.borderWidth;
		const borderColor = highContrastTheme.borderColor;
		const shadowColor = highContrastTheme.shadowColor;
		const bodyBgColor = highContrastTheme.bodyBgColor;
		const fontSizeBase = highContrastTheme.fontSizeBase;
		const headlineTextColor = highContrastTheme.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToHighContrastDark() {
		console.log('setting to High Contrast Dark');

		const name = highContrastThemeDark.name;
		const cardBgColor = highContrastThemeDark.cardBgColor;
		const mainTextColor = highContrastThemeDark.mainTextColor;
		const borderWidth = highContrastThemeDark.borderWidth;
		const borderColor = highContrastThemeDark.borderColor;
		const shadowColor = highContrastThemeDark.shadowColor;
		const bodyBgColor = highContrastThemeDark.bodyBgColor;
		const fontSizeBase = highContrastThemeDark.fontSizeBase;
		const headlineTextColor = highContrastThemeDark.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToGryffindor() {
		console.log('setting to Gryffindor');

		const name = gryffindoreTheme.name;
		const cardBgColor = gryffindoreTheme.cardBgColor;
		const mainTextColor = gryffindoreTheme.mainTextColor;
		const borderWidth = gryffindoreTheme.borderWidth;
		const borderColor = gryffindoreTheme.borderColor;
		const shadowColor = gryffindoreTheme.shadowColor;
		const bodyBgColor = gryffindoreTheme.bodyBgColor;
		const fontSizeBase = gryffindoreTheme.fontSizeBase;
		const headlineTextColor = gryffindoreTheme.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToSlytherin() {
		console.log('setting to Slytherin');

		const name = slytherinTheme.name;
		const cardBgColor = slytherinTheme.cardBgColor;
		const mainTextColor = slytherinTheme.mainTextColor;
		const borderWidth = slytherinTheme.borderWidth;
		const borderColor = slytherinTheme.borderColor;
		const shadowColor = slytherinTheme.shadowColor;
		const bodyBgColor = slytherinTheme.bodyBgColor;
		const fontSizeBase = slytherinTheme.fontSizeBase;
		const headlineTextColor = slytherinTheme.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToRavenclaw() {
		console.log('setting to Ravenclaw');

		const name = ravenclawTheme.name;
		const cardBgColor = ravenclawTheme.cardBgColor;
		const mainTextColor = ravenclawTheme.mainTextColor;
		const borderWidth = ravenclawTheme.borderWidth;
		const borderColor = ravenclawTheme.borderColor;
		const shadowColor = ravenclawTheme.shadowColor;
		const bodyBgColor = ravenclawTheme.bodyBgColor;
		const fontSizeBase = ravenclawTheme.fontSizeBase;
		const headlineTextColor = ravenclawTheme.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}
	function setToHufflepuff() {
		console.log('setting to Hufflepuff');
		const name = hufflepuffTheme.name;
		const cardBgColor = hufflepuffTheme.cardBgColor;
		const mainTextColor = hufflepuffTheme.mainTextColor;
		const borderWidth = hufflepuffTheme.borderWidth;
		const borderColor = hufflepuffTheme.borderColor;
		const shadowColor = hufflepuffTheme.shadowColor;
		const bodyBgColor = hufflepuffTheme.bodyBgColor;
		const fontSizeBase = hufflepuffTheme.fontSizeBase;
		const headlineTextColor = hufflepuffTheme.headlineTextColor;
		const shadowLength = defaultValues.shadowLength;
		theme = [
			name,
			cardBgColor,
			mainTextColor,
			borderWidth,
			borderColor,
			shadowColor,
			bodyBgColor,
			fontSizeBase,
			headlineTextColor,
			shadowLength
		];
	}

	let cardStyle = $state();

	$effect(() => {
		cardStyle = `
	        background-color: ${theme[1]};
            color: ${theme[2]};
            border: ${theme[3]}px solid ${theme[4]};
            box-shadow: ${theme[9]}px ${theme[9]}px ${theme[9]}px 1px ${theme[5]}px
            font-size: ${theme[7]}px
            h2 {
                color: ${theme[8]}
            }
	    `;
		// console.log(cardStyle);
	});
	function handleColorChange(event: Event) {
		const inputEl = event.target as HTMLInputElement;
		const index = inputEl.dataset.index;
		theme[index] = inputEl.value;
	}
</script>

<div class="body" style="background-color: {theme[6]};">
	<div class="left">
		<div
			style="background-color: {theme[1]}; color: {theme[2]}; border: {theme[3]}px solid {theme[4]}; box-shadow: 0px {theme[9]}px {theme[9] *
				2}px 0px {theme[5]}; font-size: {theme[7]}px;"
			class="card"
		>
			<div>
				<h1 style="border-bottom: {theme[3]}px solid {theme[4]}; color: {theme[8]};">{theme[0]}</h1>
				<p class="sample-text">This is sample card text.</p>
			</div>
		</div>
		<div class="button-holder">
			<button onclick={() => setToDefault()} style={cardStyle}>Set Default </button>
			<button onclick={() => setToBerk()} style={cardStyle}>Berkeley Theme </button>
			<button onclick={() => setToGoogle()} style={cardStyle}>Google Theme </button>
			<button onclick={() => setToFall()} style={cardStyle}>Fall Theme </button>
			<button onclick={() => setToNature()} style={cardStyle}>Nature Theme </button>
			<button onclick={() => setToVibrant()} style={cardStyle}>Vibrant Theme </button>
			<button onclick={() => setToBasic()} style={cardStyle}>Basic Theme </button>
			<button onclick={() => setToHighContrast()} style={cardStyle}>High Contrast Light</button>
			<button onclick={() => setToHighContrastDark()} style={cardStyle}>High Contrast Dark</button>
			<button onclick={() => setToGryffindor()} style={cardStyle}>Gryffindor Theme </button>
			<button onclick={() => setToSlytherin()} style={cardStyle}>Slytherin Theme </button>
			<button onclick={() => setToRavenclaw()} style={cardStyle}>Ravenclaw Theme </button>
			<button onclick={() => setToHufflepuff()} style={cardStyle}>Hufflepuff Theme </button>
			<button onclick={() => setToRandom()} style={cardStyle}>Random Theme </button>
		</div>
	</div>
	<div class="right" id="right" style="color: {theme[8]}">
		<h2>Tweek settings here</h2>
		<div class="options-holder">
			<label for="themeName">Theme Name: {theme[0]}</label>
			<input
				bind:value={theme[0]}
				type="text"
				oninput={handleColorChange}
				id="themeName"
				data-name={'name'}
				data-index={0}
			/>
			<label for="cardBgColor">Card Background Color: {theme[1]}</label>
			<input
				bind:value={theme[1]}
				type="color"
				oninput={handleColorChange}
				id="cardBgColor"
				data-name={'cardBgColor'}
				data-index={1}
			/>
			<label for="mainTextColor">Main Text Color: {theme[2]}</label>
			<input
				bind:value={theme[2]}
				type="color"
				oninput={handleColorChange}
				id="mainTextColor"
				data-name={'mainTextColor'}
				data-index={2}
			/>
			<label for="borderWidth">Border Width: {theme[3]}px</label>
			<input
				bind:value={theme[3]}
				type="range"
				min="0"
				max="10"
				oninput={handleColorChange}
				id="borderWidth"
				data-name={'borderWidth'}
				data-index={'3'}
			/>

			<label for="borderColor">Border Color: {theme[4]}</label>
			<input
				bind:value={theme[4]}
				type="color"
				oninput={handleColorChange}
				id="borderColor"
				data-name={'borderColor'}
				data-index={'4'}
			/>

			<label for="shadowColor">Shadow Color: {theme[5]}</label>
			<input
				bind:value={theme[5]}
				type="color"
				oninput={handleColorChange}
				id="shadowColor"
				data-name={'shadowColor'}
				data-index={'5'}
			/>
			<label for="shadowSize">Shadow Size: {theme[9]}</label>
			<input
				bind:value={theme[9]}
				type="range"
				min="0"
				max="30"
				oninput={handleColorChange}
				id="shadowSize"
				data-name={'shadowSize'}
				data-index={'9'}
			/>

			<label for="bodyBgColor">Body Background Color: {theme[6]} </label>
			<input
				bind:value={theme[6]}
				type="color"
				oninput={handleColorChange}
				id="bodyBgColor"
				data-name={'bodyBgColor'}
				data-index={'6'}
			/>

			<label for="fontSizeBase">Base Font Size: {theme[7]}px</label>
			<input
				bind:value={theme[7]}
				type="range"
				min="8"
				max="24"
				oninput={handleColorChange}
				id="fontSizeBase"
				data-name={'fontSizeBase'}
				data-index={'7'}
			/>

			<label for="headlineTextColor">Headline Text Color</label>
			<input
				bind:value={theme[8]}
				type="color"
				oninput={handleColorChange}
				id="headlineTextColor"
				data-name={'headlineTextColor'}
				data-index={'8'}
			/>

		</div>
	</div>
</div>

<style>
	.body {
		height: 100%;
		width: 100%;
		padding: 20px;
		position: absolute;
		top: 20%;
		left: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
	.card {
		width: 300px;
		height: 300px;
		padding: 20px;
		margin: 20px;
		margin-top: 100px;
		border-radius: 4px;
	}
	h1 {
		margin-left: 20px;
	}
	button {
		padding: 5px;
		margin: 5px;
		border-radius: 4px;
	}
	.button-holder {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		justify-content: center;
		flex-wrap: wrap;
		margin: 15px;
		margin-right: 20%;
	}
	.options-holder {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: fit-content;
		gap: 20px;
		padding: 20px;
	}
	.sample-text {
		padding-left: 20px;
	}
</style>
