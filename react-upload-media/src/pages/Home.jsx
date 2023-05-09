import { useEffect } from 'react';

export const Home = () => {

useEffect(() => {
    window.location.href = `${window.location.href}/#/Overview`;
}, [])

return ;
}
