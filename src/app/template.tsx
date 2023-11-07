'use client'
import { useEffect } from "react";
import { RecoilRoot } from "recoil";

export default function RootTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setFillHeight);

    setFillHeight();
  }, [])
  return (
    <RecoilRoot>
      <div>{children}</div>
    </RecoilRoot>
  );
}
