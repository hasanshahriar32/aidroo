"use client";
import { useSelectedLayoutSegment } from "next/navigation";

function useCurrentNavItem(navItems) {
  const segment = useSelectedLayoutSegment();

  return navItems.map((item) => ({
    ...item,
    current: `${segment}` === item.href.split("/").pop() ? true : false,
  }));
}

export default useCurrentNavItem;
