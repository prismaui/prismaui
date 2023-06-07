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