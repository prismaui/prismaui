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