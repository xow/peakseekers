import React from 'react';

import { Wrapper } from './styles';

const Mountains: React.FC = (props) => {
    return (
        <Wrapper>
            <svg viewBox="0 0 342 156" fill="none" {...props}>
                <path
                    d="M129.5 96c17.949 0 32.5-14.55 32.5-32.5S147.449 31 129.5 31C111.551 31 97 45.55 97 63.5S111.551 96 129.5 96z"
                    className="mountains-one"
                />
                <path
                    d="M108.021 155.258l-28.283-27.84-7.014-6.904L51.79 99.908l-25.95 27.675L0 155.142"
                    className="mountains-two"
                />
                <path
                    d="M247.304 155.426H56.079l23.659-25.621 43.712-51.22 2.946-3.451L165.937 28.8l27.36 43.289.716 1.133 34.807 55.064 18.484 27.14z"
                    className="mountains-two"
                />
                <path
                    d="M342 155.258l-47.233-55.675-23.155-27.292-22.379 28.031-20.413 25.577-23.346 29.243"
                    className="mountains-two"
                />
                <path
                    opacity={0.1}
                    d="M72.724 120.514l-12.463 8.347-14.714-5.79-19.708 4.512 25.95-27.675 20.935 20.606zM193.297 72.089l-4.175 7.328-9.361-9.798-10.257 9.797-5.797-11.133-9.365 11.133-2.675-7.124-6.24 7.124-11.148-7.124-7.883 2.841L165.937 28.8l27.36 43.289zM294.767 99.583l-11.562 14.133-9.363-11.136-14.269 11.582-10.34-13.84 22.379-28.031 23.155 27.292z"
                    fill="#000"
                />
                <path
                    d="M342 154.935H0v.701h342v-.701z"
                    className="mountain-var-five"
                />
                <path
                    d="M77.758 28.195a15.96 15.96 0 00-14.67-4.332 15.963 15.963 0 00-7.066 3.52 15.94 15.94 0 00-4.51 6.471l29.304-1.356a15.91 15.91 0 00-3.058-4.303zM140.962 4.693a15.966 15.966 0 00-26.247 5.66l29.304-1.357a15.897 15.897 0 00-3.057-4.303zM252.27 63.273a15.966 15.966 0 00-21.736-.813 15.932 15.932 0 00-4.511 6.472l29.304-1.357a15.896 15.896 0 00-3.057-4.302z"
                    className="mountains-one"
                />
            </svg>
        </Wrapper>
    );
};

export default Mountains;
