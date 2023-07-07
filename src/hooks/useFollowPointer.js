import { useEffect, useState } from 'react';

export default function useFollowPointer(ref) {
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!ref.current) return;
        const handlePointMove = ({ clientX, clientY }) => {
            const element = ref.current;
            const x = clientX - element.offsetLeft - element.offsetWidth / 2;
            const y = clientY - element.offsetTop - element.offsetHeight / 2;
            setPoint({ x, y });
        };
        window.addEventListener('pointermove', handlePointMove);

        return () => {
            window.removeEventListener('pointermove', handlePointMove);
        };
    }, [ref]);

    return point;
}
