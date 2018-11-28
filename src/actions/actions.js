export const INCREASE_PROGRESS = 'ADD_PROGRESS';

export const COLOUR_OPTIONS = [
  { name: 'pink', hex: '#FF85A1' },
  { name: 'purple', hex: '#8079E8' },
  { name: 'blue', hex: '#92FFE2' },
  { name: 'green', hex: '#D4E879' },
  { name: 'orange', hex: '#FFBF75' }
];

export function increaseProgress(goalId) {
  return { type: INCREASE_PROGRESS, goalId };
}
