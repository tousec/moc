/*
|-----------------------------------------
| setting up NavImage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Image from "next/image";

const NavImage = ({ 
  width = 100,
  height = 100,
  className = "",
}: {
  className?: string;
  width?: number;
  height?: number;
  black?: boolean;
}) => {
  return (
    <Image
      src="/black-red-logo.png"
      alt="Logo for the website"
      width={width}
      height={height}
      className={`mt-[-3px] h-auto ${className}`}
    />
  );
};
export default NavImage;
