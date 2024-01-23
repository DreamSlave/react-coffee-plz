
import { ReactNode } from 'react';

function HeaderLayout({ children }: { children: ReactNode}) {
  return (
    <div>
      <div id="header">
        <img className="back_ic" src="/src/assets/img/icon_back.png" />
        <img className="x_ic" src="/src/assets/img/icon_x.png"/>
      </div>
      {children}
    </div>
  );
}

export default HeaderLayout;