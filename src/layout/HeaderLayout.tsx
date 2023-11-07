import { ReactNode } from 'react';

function HeaderLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <div>Header 영역</div>
      {children}
    </div>
  );
}

export default HeaderLayout;