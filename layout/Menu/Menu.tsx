import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    return (
        <div>
        <ul>
            {menu.map(i => (<li key={i._id.secondCategory}>{i._id.secondCategory}</li>))}
        </ul>
        </div>
    );
};