import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='bg-green-400 p-6'>
                Dashboard layout
            </div>
            {children}
            <footer>
                Dashboard footer
            </footer>
        </div>
    );
};

export default DashboardLayout;
