# Masonry layout 📌

Pinterest like Masonry Layout built with React, TypeScript, and CSS

## Masonry Component

The Masonry Component takes in 2 params `data, column`

- Data is required and should be an array of object with `src` inside
- column sets the number of columns you want, you can provide an object with the `xs, sm, md, lg, xl, xxl` and define the number of columns you want in each breakpoint.

### Breakpoints & Width

PS: if the innerWidth of the window is less than `640px` it is `xs`, same for the rest of the values and if the width is great than `1536px`, it is `xxl`.

| breakpoints       | value | width |
| ----------------- | ----- | ----- |
| less than 640     | xs    | 50%   |
| < 768             | sm    | 50%   |
| < 1024            | md    | 40%   |
| < 1280            | lg    | 30%   |
| < 1536            | xl    | 25%   |
| greater than 1536 | xxl   | 25%   |

### Width

### How to use

Provide an object with the number of columns you want to display in each breakpoint.

```jsx
import { Masonry } from '@tx666/masonry';

const Gallery = () => {
  const columns = {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 5,
  };

  const data = [{ src: 'link to your image' }, { src: 'link to your image' }];
  return <Masonry data={data} column={columns} />;
};
```

### TODOs

- find a better way to equally distribute the items in each array

## Issue

If you find any issues or bugs, please report them <a href='https://github.com/realtouseef/masonry-layout/issues'>here</a>.
