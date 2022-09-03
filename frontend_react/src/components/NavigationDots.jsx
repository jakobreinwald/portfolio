import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {/* Eventually, add testimonials */}
            {['home', 'work', 'experiences', 'skills', 'about', 'contact'].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? { backgroundColor: '#672976' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots