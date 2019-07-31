import {
  addMatchImageSnapshotCommand
} from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
  // allows animations to run
  // **note** this means that you _must_ avoid race conditions
  // by waiting for the animation property to be set
  disableTimersAndAnimations: false,
});
