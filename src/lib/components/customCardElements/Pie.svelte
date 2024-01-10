<script lang="ts">
    let size: number = $state(200);
    let percent: number = $state(0);
    let viewBox: string = $state(`0 0 200 200`)
    let radius : number = $derived(getRadius(size));
    let halfCircumference : number = Math.PI * radius;
    let dashArray = `0 ${halfCircumference - size} - ${size}`;
    let bgColor = 'cornflowerblue';
    let fgColor = 'orange';

    function getRadius(size:number)
    {
        return size / 2;
    }
</script>

<svg width=200 height=200 viewBox="0 0 200 200">
<circle r={radius} cx={radius} cy={radius} fill={bgColor} />
 <!-- <circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill={bgColor}
    stroke={fgColor}
    stroke-width={radius}
    stroke-dasharray = {dashArray}
    /> -->
    <circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill={bgColor}
    stroke={fgColor}
    stroke-width={radius}
    stroke-dasharray = {dashArray}
    />
</svg>

