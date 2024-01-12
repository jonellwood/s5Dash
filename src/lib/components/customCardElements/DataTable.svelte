<script lang="ts">
    let data = [
    { id: 1, name: 'Cassian Andor', affiliation: 'Rebel Alliance' },
    { id: 2, name: 'Ezra Bridger', affiliation: 'Jedi Order' },
    { id: 3, name: 'Mon Mothma', affiliation: 'New Republic' },
    { id: 4, name: 'Jyn Erso', affiliation: 'Rebel Alliance' },
    { id: 5, name: 'Poe Dameron', affiliation: 'New Republic' },
  ];
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Affiliation</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row (row.id)}
        <tr>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.affiliation}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>


<style>
    table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>