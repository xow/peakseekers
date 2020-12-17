import React from 'react';

const Mountain: React.FC = (props) => {
    return (
        <svg viewBox="0 0 24 22" {...props}>
            <path d="M17.667 7.461l-2.834 5.502.359.624.666-1.169s1.08-2.413 1.141-.847c.358 1.454.542-.083.542-.083.06-.171.453-3.78.626.24.172 4.022.402.168.531.272 1.99 1.583 4.649 6.103 4.649 6.103H17.79l.207.36H24L17.667 7.461zM14.621 14.111l-.36-.624L8.23 3.012 0 18.988H17.426l-.207-.36-2.598-4.517zm-2.482 4.353H.9l4.703-8.252s1.57-3.506 1.659-1.233c.517 2.11.787-.12.787-.12.086-.25.656-5.49.908.349.253 5.84.583.243.773.393 1.313 1.044 2.824 2.966 4.083 4.755.123.177.248.354.367.527a66.43 66.43 0 012.3 3.58h-4.342z" />
        </svg>
    );
};

export default Mountain;