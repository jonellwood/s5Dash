<script lang="ts">
    type Birthday = {
        id: number;
        date: string;
        employee: string;
        department: string;
    };

    import data from '../../data/birthdayData.json';
    // import createDateObjectFromMonthDay from '$lib/functions/createDateObjectFromMonthDay';
    import filterEntriesWithinNextWeek from '$lib/functions/filterEntriesWithinNextWeek';
    import filterBirthdaysWithCurrentWeek from '$lib/functions/filterBirthdaysWithinCurrentWeek';


    const weeksBirthdays = filterBirthdaysWithCurrentWeek(data);
    const nextWeeksBirthdays = filterEntriesWithinNextWeek(data);
</script>
<div>
    <table>
        <thead>

            <tr>
                <th>This week</th>
                <th />
            </tr>
        </thead>
        <tbody>

            {#each weeksBirthdays as { employee, date }, index}
            <tr>
                <td>{employee}</td>
                <td>{date}</td>
            </tr>
            {/each}
        </tbody>
        </table>

    <table>
        <thead>
            <tr>
                <th>Next Week</th>
                <th />
            </tr>
        </thead>
        <tbody>
            {#each nextWeeksBirthdays as { employee, date }, index}
            <tr>
                <td>{employee}</td>
                <td>{date}</td>
            </tr>
            {/each}
        </tbody>
        </table>
</div>

