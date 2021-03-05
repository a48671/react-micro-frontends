import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/Marketing';

export function MarketingApp() {
    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            mount(ref.current);
        }
    }, [ref.current]);
    return (
        <div ref={ref}/>
    );
};
