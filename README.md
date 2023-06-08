## Installation

To install `@prismaui/react`, you can use npm or yarn:

```bash
npm install @prismaui/react
```

or

```bash
yarn add @prismaui/react
```

## Usage

To use `@prismaui/react`, follow the steps below:

1. Import the desired components from `@prismaui/react` in your React component file (e.g., `App.js`):

```jsx
'use client'
import { defineCustomElements, PrmButton } from '@prismaui/react'

defineCustomElements()

function App() {
  return (
    <div>
      <PrmButton round="lg" variant="primary">Click Me</PrmButton>
    </div>
  );
}

export default App;
```

2. You can now use the Prisma UI components like the `PrmButton` component in your React application.

To add the custom color variables to your CSS file, you can follow these steps:

1. Open your CSS file (e.g., `global.css`).

2. Add the following CSS code to your global CSS Variables:

```css
:root {
  /* Primary Colors */
  --primary: #1E3A8A;
  --primary-light: #4A5A99;
  --primary-dark: #0F2658;

  /* Secondary Colors */
  --secondary: #9F38B4;
  --secondary-light: #D275DF;
  --secondary-dark: #6D0E82;

  /* Success Colors */
  --success: #10B981;
  --success-light: #43D2A9;
  --success-dark: #0E7D58;

  /* Warning Colors */
  --warning: #F59E0B;
  --warning-light: #FFC94D;
  --warning-dark: #D9820E;

  /* Danger Colors */
  --danger: #EF4444;
  --danger-light: #F48080;
  --danger-dark: #BE2E2E;

  /* Info Colors */
  --info: #3B82F6;
  --info-light: #6696F6;
  --info-dark: #1D4ED8;

  /* Neutral Colors */
  --lightest: #F3F4F6;
  --lighter: #FFFFFF;
  --light: #D1D5DB;
  --dark: #1F2937;
  --darker: #6B7280;
  --darkest: #111827;
}
```

Now, the custom color variables are defined and can be used throughout your React application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/prismaui/prismaui).

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Installation

```shell
npm i @prismaui/vue
```

## Configuration

Update your generated `vite.config.ts` file as follows:

```diff
export default defineConfig({
  plugins: [
-    vue(),
-    vueJsx(),
+    vue({
+      template: {
+        compilerOptions: {
+          // Treat all tags with a dash as custom elements
+          isCustomElement: (tag) => tag.includes('-'),
+        },
+      },
+    }),
+    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

```

Update your `main.ts` and add Prisma UI Components in the `use()` wrapper:

```diff
import './assets/main.css'
import { PrmButton } from '@prismaui/vue';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(PrmButton).mount('#app')

```

## Custom CSS Variables

Update your `base.css` file to include the following CSS variables:

```css
:root {
  /* Primary Colors */
  --primary: #1E3A8A;
  --primary-light: #4A5A99;
  --primary-dark: #0F2658;

  /* Secondary Colors */
  --secondary: #9F38B4;
  --secondary-light: #D275DF;
  --secondary-dark: #6D0E82;

  /* Success Colors */
  --success: #10B981;
  --success-light: #43D2A9;
  --success-dark: #0E7D58;

  /* Warning Colors */
  --warning: #F59E0B;
  --warning-light: #FFC94D;
  --warning-dark: #D9820E;

  /* Danger Colors */
  --danger: #EF4444;
  --danger-light: #F48080;
  --danger-dark: #BE2E2E;

  /* Info Colors */
  --info: #3B82F6;
  --info-light: #6696F6;
  --info-dark: #1D4ED8;

  /* Neutral Colors */
  --lightest: #F3F4F6;
  --lighter: #FFFFFF;
  --light: #D1D5DB;
  --dark: #1F2937;
  --darker: #6B7280;
  --darkest: #111827;
}
```

## Usage

In your Vue pages, you can now use the components from `@prismaui/vue`. 

```vue
<script setup lang="ts">
import { PrmButton } from '@prismaui/vue';
</script>

<template>
  <PrmButton variant="info">test</PrmButton>
</template>
```

Make sure to import the required components and use them accordingly in your Vue files.


# @prismaui/angular

This is the documentation for the npm package `@prismaui/angular`. This package provides Angular components and functionality for the Prisma UI library.

## Installation

To install `@prismaui/angular`, you can use npm or yarn:

```bash
npm install @prismaui/angular
```

or

```bash
yarn add @prismaui/angular
```

## Usage

To use `@prismaui/angular`, follow the steps below:

1. Import the `PrmModule` from `@prismaui/angular` in your Angular module file (e.g., `app.module.ts`):

```typescript
import { NgModule } from '@angular/core';
import { PrmModule } from '@prismaui/angular';

@NgModule({
  imports: [
    // ...
    PrmModule,
    // ...
  ],
  // ...
})
export class AppModule { }
```

2. In your Angular component template (e.g., `app.component.html`), you can now use the Prisma UI components:

```html
<prm-button round="lg" variant="primary">Click Me</prm-button>
```
To add the custom color variables to your `global.css` file, follow these steps:

1. Open your `global.css` file.

2. Add the following CSS code at your `global.css` file:

```css
:root {
  /* Primary Colors */
  --primary: #1E3A8A;
  --primary-light: #4A5A99;
  --primary-dark: #0F2658;

  /* Secondary Colors */
  --secondary: #9F38B4;
  --secondary-light: #D275DF;
  --secondary-dark: #6D0E82;

  /* Success Colors */
  --success: #10B981;
  --success-light: #43D2A9;
  --success-dark: #0E7D58;

  /* Warning Colors */
  --warning: #F59E0B;
  --warning-light: #FFC94D;
  --warning-dark: #D9820E;

  /* Danger Colors */
  --danger: #EF4444;
  --danger-light: #F48080;
  --danger-dark: #BE2E2E;

  /* Info Colors */
  --info: #3B82F6;
  --info-light: #6696F6;
  --info-dark: #1D4ED8;

  /* Neutral Colors */
  --lightest: #F3F4F6;
  --lighter: #FFFFFF;
  --light: #D1D5DB;
  --dark: #1F2937;
  --darker: #6B7280;
  --darkest: #111827;
}
```

Now, the custom color variables are defined and can be used throughout your application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/prismaui/prismaui).

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
# @prismaui/core

This is the documentation for the npm package `@prismaui/core`. This package provides core functionality for the Prisma UI library.

## Installation

To install `@prismaui/core`, you can use npm or yarn:

```bash
npm install @prismaui/core
```

or

```bash
yarn add @prismaui/core
```

## Usage

To use `@prismaui/core`, you can import the JavaScript module in multiple ways depending on your preference or project setup.

### Method 1: Local import

You can import the module from the local `node_modules` directory:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <prm-button round="lg" variant="primary">Click Me</prm-button>

    <script type="module">
        import { defineCustomElements } from './node_modules/@prismaui/core/loader/index.es2017.js';
        defineCustomElements();
    </script>
</body>

</html>
```

### Method 2: Remote import via CDN

You can import the module directly from a CDN:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <prm-button round="lg" variant="primary">Click Me</prm-button>

    <script type="module">
        import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@prismaui/core/loader/index.es2017.js';
        defineCustomElements();
    </script>
</body>

</html>
```

### Method 3: Local script import

You can directly include the JavaScript module using a script tag with the local path:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <prm-button round="lg" variant="primary">Click Me</prm-button>

    <script type="module" src="node_modules/@prismaui/core/dist/esm/prismaui.js"></script>
</body>

</html>
```

### Method 4: Remote script import via CDN

You can include the JavaScript module directly from a CDN using a script tag:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <prm-button round="lg" variant="primary">Click Me</prm-button>

    <script type="module" src="https://cdn.jsdelivr.net/npm/@prismaui/core/loader/index.es2017.js"></

script>
</body>

</html>
```

### CSS

Include the following CSS variables in your `style.css` file:

```css
:root {
    /* Primary Colors */
    --primary: #1E3A8A;
    --primary-light: #4A5A99;
    --primary-dark: #0F2658;

    /* Secondary Colors */
    --secondary: #9F38B4;
    --secondary-light: #D275DF;
    --secondary-dark: #6D0E82;

    /* Success Colors */
    --success: #10B981;
    --success-light: #43D2A9;
    --success-dark: #0E7D58;

    /* Warning Colors */
    --warning: #F59E0B;
    --warning-light: #FFC94D;
    --warning-dark: #D9820E;

    /* Danger Colors */
    --danger: #EF4444;
    --danger-light: #F48080;
    --danger-dark: #BE2E2E;

    /* Info Colors */
    --info: #3B82F6;
    --info-light: #6696F6;
    --info-dark: #1D4ED8;

    /* Neutral Colors */
    --lightest: #F3F4F6;
    --lighter: #FFFFFF;
    --light: #D1D5DB;
    --dark: #1F2937;
    --darker: #6B7280;
    --darkest: #111827;
}
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/prismaui/prismaui).

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).


