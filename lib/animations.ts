import { keyframes } from 'styled-components';

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Define keyframes for slide-up animation
const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Define keyframes for bounce animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Export animations for use in components
const animations = {
  fadeIn,
  slideUp,
  bounce,
};

export default animations;