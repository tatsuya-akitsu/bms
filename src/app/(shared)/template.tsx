'use client'
import Header from '@/components/modules/Header'
import { RecoilRoot } from 'recoil';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <Header />
      <div>{children}</div>
    </RecoilRoot>
  );
}
