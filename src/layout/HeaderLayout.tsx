import { ReactNode } from 'react';

function HeaderLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <div>Header 영역
        <img src="/src/assets/img/icon_back.png" />
        <img src="/src/assets/img/icon_x.png" />
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;