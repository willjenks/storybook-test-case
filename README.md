# Storybook Test-Runner Test Case

## Set up

```
npm i
npm run storybook
npm run test-storybook
```

## Behaviour

### In storybook

- `Success` pass
- `Fails In Storybook...` fail
- `Passes In Storybook...` pass

### In test runner

Test runner fails with this exception:

```
RUNS   browser: chromium  stories/Suspender.stories.jsx
node:internal/process/promises:279
            triggerUncaughtException(err, true /* fromPromise */);
            ^

page.evaluate: Browser has been closed
    ==== Closed by ====
    at CustomEnvironment.teardown (/Users/will/experiments/node_modules/jest-playwright-preset/lib/PlaywrightEnvironment.js:239:78)
    at CustomEnvironment.teardown (/Users/will/experiments/node_modules/@storybook/test-runner/playwright/custom-environment.js:13:17)
    at runTestInternal (/Users/will/experiments/node_modules/jest-runner/build/runTest.js:485:23)
    at runTest (/Users/will/experiments/node_modules/jest-runner/build/runTest.js:499:34)

    at Page.<anonymous> (/Users/will/experiments/stories/Suspender.stories.jsx:122:18)
```

Commenting out `Passes In Storybook But Greaks Test Runner` story allows test runner to run as expected.
