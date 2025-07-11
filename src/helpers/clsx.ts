// utils/classnames.js
import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

export function clsx(...args: Parameters<typeof cn>) {
  return twMerge(cn(...args));
}