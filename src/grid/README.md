### To include a grid component:

1. Create a `<div>` element with the `.grid` class

```html
<div class="grid">
</div>
```

2. For each cell, create an inner `<div>` element

```html
<div class="grid">
    <div>Grid cell</div>
    <div>Grid cell</div>
    <div>Grid cell</div>
</div>
```

3. Add a `.grid-SIZE-WIDTH` class, where `SIZE` specifies which **device size** this rule should be applied to, and `WIDTH`
specifies the **percentage width** of the cell.

```html
<div class="grid">
    <div class="grid-md-25">Grid cell</div>
    <div class="grid-md-50">Grid cell</div>
    <div class="grid-md-25">Grid cell</div>
</div>
```

The grid component is ready to use.

#### Examples

A grid with gutters between cells

```html
<div class="grid grid-gutters">
    <div class="grid-md-25">Grid cell</div>
    <div class="grid-md-50">Grid cell</div>
    <div class="grid-md-25">Grid cell</div>
</div>
```

---

Five evenly distributed columns

```html
<div class="grid">
    <div class="grid-lg-auto">1</div>
    <div class="grid-lg-auto">2</div>
    <div class="grid-lg-auto">3</div>
    <div class="grid-lg-auto">4</div>
    <div class="grid-lg-auto">5</div>
</div>
```

---

A grid with three columns: the first column has a width of 16%, the third column has a fixed width of 300px for an ad,
and the second column fills the remaining space

```html
<div class="grid grid-gutters">
    <div class="grid-md-16">16% width</div>
    <div class="grid-md-auto">Fluid, fills remaining space</div>
    <div class="grid-md-ad-300">Ad</div>
</div>
```

---

A grid that resizes its columns when the screen size drops from a large device to a medium device

```html
<div class="grid grid-gutters">
    <div class="grid-lg-25 grid-md-50">Content</div>
    <div class="grid-lg-25 grid-md-50">Content</div>
    <div class="grid-lg-25 grid-md-50">Content</div>
    <div class="grid-lg-25 grid-md-50">Content</div>
</div>
```

---

A grid that hides its first column when dropping into an extra small device size

```html
<div class="grid grid-gutters">
    <div class="grid-sm-33 xs-hidden">Content, but I'm hidden on extra small</div>
    <div class="grid-sm-33 grid-xs-50">Content</div>
    <div class="grid-sm-33 grid-xs-50">Content</div>
</div>
```

#### Configuration options

Class | Effect | Comments
--- | --- | ---
`.grid` | Defines a container as a grid component | Required on "outer" div element
`.grid-gutters` | Modifies the grid cells to have space between them | Optional on "outer" element
`.grid-gutter-bottom` | Modifies the grid cells to have space beneath them | Optional on "outer" element
`.grid-gutter-right` | Modifies the grid cells to have space to the right of them | Optional on "outer" element
`.grid-S-N` | Defines a container as a grid cell | At least one of this type, or offset, is required on "inner" elements
`.grid-S-offset-N` | Offsets the container by N width on S device | Optional on "inner" elements
`.grid-xs-N` | Sets the width N on an extra small device | Optional on "inner" elements
`.grid-sm-N` | Sets the width N on a small device | Optional on "inner" elements
`.grid-md-N` | Sets the width N on a medium device | Optional on "inner" elements
`.grid-lg-N` | Sets the width N on a large device | Optional on "inner" elements
`.grid-S-auto` | Sets the width to automatically fill any remaining space on S device | Optional on "inner" elements
`.grid-S-fit` | Sets the width fit the content of the cell exactly on S device | Optional on "inner" elements
`.grid-S-16` | Sets the width to 16% of the parent container on S device | Optional on "inner" elements
`.grid-S-20` | Sets the width to 20% of the parent container on S device | Optional on "inner" elements
`.grid-S-25` | Sets the width to 25% of the parent container on S device | Optional on "inner" elements
`.grid-S-33` | Sets the width to 33% of the parent container on S device | Optional on "inner" elements
`.grid-S-50` | Sets the width to 50% of the parent container on S device | Optional on "inner" elements
`.grid-S-66` | Sets the width to 66% of the parent container on S device | Optional on "inner" elements
`.grid-S-75` | Sets the width to 75% of the parent container on S device | Optional on "inner" elements
`.grid-S-80` | Sets the width to 80% of the parent container on S device | Optional on "inner" elements
`.grid-S-100` | Sets the width to 100% of the parent container on S device | Optional on "inner" elements
`.grid-S-ad-160` | Sets the width to exactly fit a 160px wide ad on S device | Optional on "inner" elements
`.grid-S-ad-200` | Sets the width to exactly fit a 200px wide ad on S device | Optional on "inner" elements
`.grid-S-ad-300` | Sets the width to exactly fit a 300px wide ad on S device | Optional on "inner" elements
`.S-hidden` | Hides the cell on S device | Optional on "inner" elements
`.S-visible` | Displays the cell on S device | Optional on "inner" elements
