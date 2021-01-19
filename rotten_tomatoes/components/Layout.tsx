import React from 'react';
import Menu from './Menu';

const Layout: React.FC = ({children}) => {
    return (
    <div>
        <Menu />
            <main>
                {children}
            </main>
        </div>
        );
};

export default Layout;
