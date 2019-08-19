import styled from 'styled-components';

// There is no storybook story for this component because it is purely
// here to aid in the display of React components in storybook. Basically,
// the problem is that I want to be able to make React components which have
// no margin. However if you do so in Storybook then such components will
// be partially off the screen due to the way that Storybook displays them.
// So to solve this issue I have created this React component which simply
// will wrap components and give them some margin, purely to be used in Storybook.
export const StorybookWrapper = styled.div`
  margin: 50px;
`;
