import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

export const TextAnimation = ({ animationDelay }) => {
    const textRef = useRef(null);
    const text = "We specialize in manufacturing high-quality investment castings for diverse applications. Trust Kahan Industries for precision, durability, and excellence in casting.";

    useEffect(() => {
        if (textRef.current) {
            const splitText = new SplitType(textRef.current, { types: 'words, chars' });
            gsap.from(splitText.chars, {
                opacity: 0,
                y: 20,
                duration: 0.7,
                stagger: { amount: 1 },
                delay: animationDelay
            });
        }
    }, [animationDelay]);

    return (
        <div
            ref={textRef}
            className="text-white text-right text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal px-4 sm:px-8 md:px-16 lg:px-24 mt-12"
            style={{
                maxWidth: '60%',
                marginLeft: 'auto',  // Pushes the text to the right side
            }}
        >
            {text}
        </div>
    );
};
