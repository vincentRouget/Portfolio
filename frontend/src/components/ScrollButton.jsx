import React, { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { Button } from './ScrollButtonStyle';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setVisible(true)
        }
        else if (scrolled <= 20) {
            setVisible(false)
        };
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <AiFillCaretUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
};

export default ScrollButton;