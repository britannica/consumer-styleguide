## Grid

### To include a grid component:

&nbsp;1. Create a `<div>` element with the `.grid` class

```html
<div class="grid">
</div>
```

&nbsp;2. For each cell, create an inner `<div>` element

```html
<div class="grid">
    <div></div>
    <div></div>
    <div></div>
</div>
```

&nbsp;3. Add a `.grid-SIZE-WIDTH` class, where `SIZE` specifies which **device size** this rule should be applied to, and `WIDTH`
specifies the **percentage width** of the cell.

```html
<div class="grid">
    <div class="grid-md-25"></div>
    <div class="grid-md-50"></div>
    <div class="grid-md-25"></div>
</div>
```

The grid component is ready to use.

### Configuration options

Class | Effect | Comments
--- | --- | ---
`.grid` | Defines a container as a grid component | Required
`.no-gutters` | Removes space between cells | Optional on `.grid` element
`.grid-S-N` | Defines a container as a grid cell | Required. Possible values for `S`: xs, sm, md, lg. Possible values for `N`: Intervals of 5 from 5-100, 33, 66
`.grid-S-offset-N` | Offsets the cell | Optional. Possible values for `N`: Intervals of 5 from 5-95, 33, 66
`.grid-S` | Sets width to automatically fill remaining space | Optional
`.grid-S-shrink` | Shrinks cell to fit content inside | Optional
`.grid-S-ad-N` | Sets width to fit common ad sizes | Optional. Possible values for `N`: 160, 200, 300

### To-do

Hook up to html examples