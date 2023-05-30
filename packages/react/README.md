# PrismaUI Angular

## Installation

To install PrismaUI Angular, run the following command:

```shell
npm install @prismaui/angular
```

## Configuration

1. Import and include the `PrismauiModule` in your `app.module.ts` file:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrismauiModule } from '@prismaui/angular';

@NgModule({
  declarations: [/* your components */],
  imports: [BrowserModule, PrismauiModule],
  providers: [],
  bootstrap: [/* your root component */]
})
export class AppModule { }
```

## Custom CSS Variables

Update your `styles.css` file and add the following CSS variables:

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

You can now use the components from `@prismaui/angular` in your Angular pages.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrismauiModule } from '@prismaui/angular';

@NgModule({
  declarations: [/* your components */],
  imports: [BrowserModule, PrismauiModule],
  providers: [],
  bootstrap: [/* your root component */]
})
export class AppModule { }
```