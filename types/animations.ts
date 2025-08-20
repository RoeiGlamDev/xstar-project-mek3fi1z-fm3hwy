import { AnimationType } from './types'; // Importing the AnimationType interface

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In',
    duration: '0.5s',
    timingFunction: 'ease-in',
    description: 'Smooth fade-in effect for elements.',
  },
  {
    name: 'Slide Up',
    duration: '0.6s',
    timingFunction: 'ease-out',
    description: 'Elements slide up into view.',
  },
  {
    name: 'Zoom In',
    duration: '0.4s',
    timingFunction: 'ease-in-out',
    description: 'Elements zoom in from a smaller size.',
  },
  {
    name: 'Rotate',
    duration: '0.7s',
    timingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    description: 'Elements rotate into position.',
  },
  {
    name: 'Bounce',
    duration: '0.8s',
    timingFunction: 'ease-in-out',
    description: 'Elements bounce into view for a playful effect.',
  },
];

export default animationTypes; // Exporting the animationTypes array as default export