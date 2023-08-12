# Masonry layout

Pinterest like Masonry Layout built with React, TypeScript, Vite, Lodash.chunk, and CSS

## Masonry Component

The Masonry Component takes in 3 params `data, width, column`

- Data is required and should be an array of object with `src` inside
- width sets the the width of the column, defaults to 25%
- column sets the number of columns you want, defaults to 4

### How to use

```jsx
import { Masonry } from '@tx666/masonry'
import '@tx666/masonry/dist/masonry.css'

const Gallery = () => {
  const data = [{ src: 'link to your image' }, { src: 'link to your image' }]
  return <Masonry data={data} column={5} width={30} />
}
```

### Features in mind

When you resize the window, the columns should be adjusted like on sm, md, lg, xl, 2xl they should 2, 3, 4, 5, 6 or however you pass the number of columns you want in respective screens

## Issue

If you find any issues or bugs, please report them <a href='https://github.com/realtouseef/masonry-layout/issues'>here</a>.
