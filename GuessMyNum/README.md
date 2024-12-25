# Notes

- using the dimensions API calculates the value at the build time and thus they
  are locked in but what if the user changes the orientation of the screen later on.
  To address this issue, we make use of the `useWindowDimensions` hook exposed by react-native