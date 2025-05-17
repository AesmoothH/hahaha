import {random} from "./catto.js"

export const evenKey = () => {
    document.addEventListener('keydown', e => {
        if (e.key === 'z')
        {
            random.sleep();
        } else if (e.key === 'n')
        {
            random.default();
        } else if (e.key === 'd')
        {
            random.moveRight();
        } else if (e.key === 'a')
        {
            random.moveLeft();
        } else if (e.key === 's')
        {
            random.moveDown();
        }
    })
}