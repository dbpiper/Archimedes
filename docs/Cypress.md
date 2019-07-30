# Cypress

I use Cypress to do integration testing and end-to-end testing on Archimedes.

## Visual Regression testing

I use Visual Regression testing to test React components, I also do something
I call "isolated development" to develop React components. Basically, this means
writing each component in its own Storybook story and/or kind. In other words,
each component should be developed in an environment this is as isolated as
possible from any other ones. This helps to eliminate any potential implicit
dependencies between components: both stylistic ones in CSS and functional ones
in JavaScript.

I use Visual Regression testing as I feel that it is the best way to test
UI components, since it inherently tests the components as close to the way
the users use them as possible.

## Updating Snapshots

Since the snapshots are actual images they must be updated anytime an intended
change is made, furthermore they should be visually inspected to verify that
the image looks as the component is intended to look.

There are two main ways to update Archimedes' Visual Regression snapshots.

### will-change

You should _not_ use the CSS property `will-change` as it can break Visual
Regression tests, especially those involving animations. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) you shouldn't use `will-change` anyway as it should only be used
as a last resort.

### Updating all snapshots

From the root directory run the command `npm run update-cypress-storybook-snapshots`
this will take some time, as it must re-run all of the tests.

### Updating a single snapshot

Due to how long updating all of the snapshots takes, I have made a short way
to update just a single one, since it is often the case that a developer is
only working on a single test at a time anyway. The way to do this is to
provided the SNAPSHOT_PATH as a shell variable and then run the command
`cypress:storybook:update-snapshot-file` from the client directory.

The snapshot path is the relative path to get to the test from the Cypress
integration/storybook directory. So for example to update only the Switch1
component's snapshot, I'd run the following command:
`SNAPSHOT_PATH=atoms/Switch1.ts npm run cypress:storybook:update-snapshot-file`
