"use client";

import { ReactNode, useEffect, useState } from "react";

type HeaderWrapperProps = {
  children: ReactNode;
};

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const isAtTop = window.scrollY < 50;
      if (isAtTop !== isTop) setIsTop(isAtTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isTop]);

  return (
    <div
      className={`flex justify-between items-center px-4 py-2 mt-4 w-full rounded-3xl transition-all ${
        isTop ? "bg-transparent" : "bg-header-background"
      } text-white`}
    >
      {children}
    </div>
  );
};
export default HeaderWrapper;
