import Image from "next/image";

import { MENU_ICON_IMAGES, type MenuIconKey } from "@/config/media";

export type { MenuIconKey };

type MenuIconProps = {
  iconKey: MenuIconKey;
  size?: number;
  className?: string;
};

export function MenuIcon({ iconKey, size = 20, className }: MenuIconProps) {
  const icon = MENU_ICON_IMAGES[iconKey] ?? MENU_ICON_IMAGES.home;

  return (
    <Image
      src={icon.src}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
