export const INCREASE_PROGRESS = 'ADD_PROGRESS';

export const COLOUR_OPTIONS = [
  { name: 'pink', hex: '#FF6A93' },
  { name: 'purple', hex: '#886FE8' },
  { name: 'blue', hex: '#5DDAFF' },
  { name: 'yellow', hex: '#FFF66D' },
  { name: 'orange', hex: '#E89C4D' }
];

export function increaseProgress(goalId) {
  return { type: INCREASE_PROGRESS, goalId };
}
