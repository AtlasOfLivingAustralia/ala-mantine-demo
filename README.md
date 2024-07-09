# ALA Mantine Next.js Demo
> A demonstration application for the [ala-mantine](https://github.com/AtlasOfLivingAustralia/ala-mantine) theming / component library.

## Getting Started
### Yalc
*There is a `no-yalc` branch that you can use to skip this step, however any updates to the ala-mantine package need to be manually copied over.*

[Yalc](https://github.com/wclr/yalc) is needed to use `ala-mantine` locally. See [here](https://github.com/wclr/yalc?tab=readme-ov-file#installation) for Yalc installation documentation. Once installed, in the `ala-mantine` root folder, run `yalc publish`.

In this application, run `yalc add ala-mantine`, followed by `yarn` to install it as a dependency.

Once you've made changes to `ala-mantine`, run `yalc push` from the `ala-mantine` root folder to automatically push all changes to the dependent applications.


## Running

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
