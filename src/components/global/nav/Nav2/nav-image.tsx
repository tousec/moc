/*
|-----------------------------------------
| setting up NavImage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { cn } from '@/lib/utils';
import Image from 'next/image';

const NavImage = ({   width = 40, height = 40, className = '' }: { className?: string; width?: number; height?: number; black?: boolean }) => {
  return (
      <Image
        src="/black-red-logo.png"
        alt="Stars' English Centre Logo"
        width={width}
        height={height}
        className={cn('h-auto dark:invert', className)}
        priority
      />
  );
};
export default NavImage;
