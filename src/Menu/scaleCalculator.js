/* eslint-disable import/no-unresolved, import/extensions*/
import { clamp, bezierProgress } from './util';
/* eslint-enable import/no-unresolved, import/extensions*/

import { TRANSITION_SCALE_ADJUSTMENT_X, TRANSITION_SCALE_ADJUSTMENT_Y } from './constants';

const TRANSITION_X1 = 0;
const TRANSITION_Y1 = 0;
const TRANSITION_X2 = 0.2;
const TRANSITION_Y2 = 1;

const ease = time =>
  bezierProgress(
    time,
    TRANSITION_X1,
    TRANSITION_Y1,
    TRANSITION_X2,
    TRANSITION_Y2,
  );

export const calculateScale = (animationProgress, isOpening, numItems) => {
  let currentTimeX = clamp(
    (animationProgress - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X),
  );
  let currentTimeY = animationProgress;
  const startScale = isOpening ? 0 : 1;
  const targetScale = isOpening ? 1 : 0;
  let startScaleY = startScale;

  if (isOpening) {
    startScaleY = Math.max(1 / numItems, startScaleY);
    currentTimeX = clamp(animationProgress + TRANSITION_SCALE_ADJUSTMENT_X);
    currentTimeY = clamp(
      (animationProgress - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y),
    );
  }
  const easeX = ease(currentTimeX);
  const easeY = ease(currentTimeY);
  const scaleX = startScale + ((targetScale - startScale) * easeX);
  const scaleY = startScaleY + ((targetScale - startScaleY) * easeY);

  return { scaleX, scaleY };
};

const calculateInnerScale = scale => (
  1 / (scale === 0 ? 1 : scale)
);

export const calculateInnerScales = scales => (
  { scaleX: calculateInnerScale(scales.scaleX),
    scaleY: calculateInnerScale(scales.scaleY),
  }

);
