<script lang="ts">
    let size: number = $state(200);
    let percent: number = $state(10);
    let viewBox: string = $state(`0 0 200 200`)
    let radius : number = $derived(getRadius(size));
    let halfCircumference : number = $derived(Math.PI * radius);
    let pieSize : number = $derived(halfCircumference * (percent / 100));
    // let dashArray = $derived(0 (halfCircumference - pieSize) - pieSize);
    let bgColor = 'cornflowerblue';
    let fgColor = 'orange';

    function getRadius(size:number)
    {
        return size / 2;
    }
</script>

<svg width=200 height=200 viewBox="0 0 200 200">
<circle r={radius} cx={radius} cy={radius} fill={bgColor} />
 <circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill={bgColor}
    stroke={fgColor}
    stroke-width={radius}
    stroke-dasharray = '0 280.6174230741916 33.54184228478773'
    />
    <!-- <circle
    r={radius / 2}
    cx={radius}
    cy={radius}
    fill={bgColor}
    stroke={fgColor}
    stroke-width={radius}
    /> -->
</svg>
<!-- 
stroke-dasharray = {dashArray}
stroke-dasharray = {dashArray} 
0 280.6174230741916 33.54184228478773

-->
