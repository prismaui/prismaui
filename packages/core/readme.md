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