import { ReactNode } from 'react';

function HeaderLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      {children}
    </div>
  );
}

export default HeaderLayout;