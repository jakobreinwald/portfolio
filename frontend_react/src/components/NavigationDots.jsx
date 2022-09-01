import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {/* Eventually, add testimonials */}
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#1D1C1A' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots