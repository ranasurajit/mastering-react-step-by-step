import React from 'react';
import ReactDOM from 'react-dom/client';

const headerReactElement = React.createElement('h1', {
    id: 'header',
    className: 'react-header'
}, 'Header created with React createElement');

const headerJSXElement = <h1>Header created with JSX</h1>;

const TitleRFC = function () {
    return <p className='p-rfc'>This is a Title created with React Functional Components (Old Styled Function)</p>;
}

const InterpolateComponent = () => <h3 className='header-interpolate'>Interpolate Example Header</h3>;

const HeaderComponent = () => {
    return (
        <div className='container'>
            <h2 className='header-root'>
                React Component Composition Example : Header Container created with React Functional Components (Arrow Functions)
            </h2>
            <div className='p-interpolate-element'>
                {headerJSXElement}
            </div>
            <div className='header-root'>
                {headerReactElement}
            </div>
            {InterpolateComponent()}
            <TitleRFC />
            <p className='p-interpolate'>Interpolation of Expression : {10 * 77}</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
