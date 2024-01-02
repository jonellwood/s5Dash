<script lang="ts">
	import Theme from './theme/+page.svelte';
	$effect(() => {
		const savedTheme = localStorage.getItem('theme');
		savedTheme && (theme = JSON.parse(savedTheme));
		// console.log(savedTheme);
	});
	let theme = $state<Theme[]>([]);
	type Todo = {
		text: string;
		done: boolean;
	};
	type Filters = 'all' | 'active' | 'completed';

	let todos = $state<Todo[]>([]);
	let filter = $state<Filters>('all');
	let filteredTodos = $derived(filterTodos());

	$effect(() => {
		const savedTodos = localStorage.getItem('todos');
		savedTodos && (todos = JSON.parse(savedTodos));
	});
	$effect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	function addTodo(event: KeyboardEvent) {
		if (event.key !== 'Enter') return;

		const todoEl = event.target as HTMLInputElement;
		// const id = window.crypto.randomUUID()
		const text = todoEl.value;
		const done = false;

		todos = [...todos, { text, done }];
		todoEl.value = '';
	}
	function editTodo(event: Event) {
		const inputEl = event.target as HTMLInputElement;
		const index = inputEl.dataset.index;
		todos[index].text = inputEl.value;
	}
	function toggleTodo(event: Event) {
		const inputEl = event.target as HTMLInputElement;
		const index = inputEl.dataset.index;
		todos[index].done = !todos[index].done;
	}
	function setFilter(newFilter: Filters) {
		filter = newFilter;
	}

	function filterTodos() {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => !todo.done);
			case 'completed':
				return todos.filter((todo) => todo.done);
		}
	}

	function remaining() {
		return todos.filter((todo) => !todo.done).length;
	}
</script>

<div class="container" style="background-color: {theme[6]}">
	<input onkeydown={addTodo} type="text" placeholder="Add todo" />
	<div class="todos">
		{#each filteredTodos as { text, done }, i}
			<div class="todo" class:completed={done}>
				<input oninput={editTodo} data-index={i} value={text} type="text" />
				<input onchange={toggleTodo} data-index={i} checked={done} type="checkbox" />
			</div>
		{/each}
	</div>
	<div class="filters">
		<!-- {#each ['All', 'Active', 'Completed'] as filter}
            <button onclick={() => setFilter(filter)}>{filter}</button>
            {/each} -->

		<button onclick={() => setFilter('all')}> All </button>
		<button onclick={() => setFilter('active')}> Active </button>
		<button onclick={() => setFilter('completed')}> Completed </button>
	</div>
	<p>{remaining()} remaining todo's</p>
</div>

<style>
	.container {
		width: 75%;
		margin-left: 10%;
		margin-right: 10%;
		margin-top: 5%;
	}
	.todos {
		display: grid;
		gap: 1rem;
		margin-block-start: 1rem;
		width: 60%;
	}
	.todo {
		position: relative;
		transition: opacity 0.3s;
	}
	.completed {
		opacity: 0.4;
	}
	input[type='text'] {
		width: 100%;
		padding: 1rem;
	}
	input[type='checkbox'] {
		position: absolute;
		right: 4%;
		top: 50%;
		translate: 0% -50%;
	}

	.filters {
		margin-block: 1rem;
	}
</style>
