# Introduction

## Motivation

This library tries to mimic the Shopware 6 component extensions/inheritance in solid-js.

**Disclaimer:** This is not yet ready for anything and more of a proof of concept. The NPM package is also not yet published.

## DIY
You cam still build it yourself to try it out.

### Base repo
1. Clone this repo
2. Run `pnpm install`

### Example
1. Run `pnpm install` inside the example folder
2. Run `pnpm link -g` in the root folder (library)
3. Run `pnpm link -g shopwer` in the example folder

## Features

-   Overriding Components

    _Replace the whole component with your own template/logic_
    > **Example use-case**
    >
    > You might want to change the title of the website
-   Extending Components

    _Append or prepend to a template without losing reactivity_
    > **Example use-case**
    >
    > You want to base a new component of another one by adding something new.

## Scopes

A key-concept to understand before getting started is Scoping.
Scopes are used to determine whicht component/s to extend or override.

_You should always export scopes from the module to use them somewhere else! See "Why Symbols?"_

### Creating scopes

Shopwer exports the `createScope()` function from the package root. You can import it like this:

```ts
import { createScope } from "shopwer";
```

**Usage:**
`createScope` takes just one parameter, the _scope id_. The scope id is the uniquie identifier for the created scope.

#### Why symbols?

Symbols are always uniquie, even if they have the same string value. That means they cannot collide. Even if the component has the same name, you will always target the correct one.

```ts
Symbol("foo") === Symbol("foo"); // false
```

#### Using scopes

The Overridable and the Extendable takes a scope as an attribute.

```tsx
<Overridable scope={someScope}></Overridable>
```

```tsx
<Extendable scope={someOtherScope}></Extendable>
```

## [Read more](https://github.com/jakob-kruse/shopwer/wiki)