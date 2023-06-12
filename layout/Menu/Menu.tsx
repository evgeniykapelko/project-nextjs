    import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';
import { TopLevelCategory } from '@/interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Course', icon: <></>, id: TopLevelCategory.Courses }
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
            <div className={styles.secondBlock}>
            {firstLevelMenu.map(menuElem => (
                    <div key={menuElem.route} >
                        <a href={`/${menuElem.route}`} >
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menuElem.id == firstCategory
                            })}>
                                {menuElem.icon}
                                <span>{menuElem.name}</span>
                            </div>
                        </a>
                        {menuElem.id == firstCategory && buildSecondLevel(menuElem)}
                    </div>
                ))}
            </div>
            </>
        )
    };

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <>
                {menu.map(m => {
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                        {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                })}
            </>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
            {pages.map(p => {
                <a href={`/${route}/${p.alias}`} className={cn(styles.buildThirdLevel, {
                    [styles.thirdLevelActive]: false
                })}>
                    {p.category}
                </a>
            })}
            </>
        );
    };

    return (
        <div className={styles.menu}>
        <ul>
            {buildFirstLevel}
        </ul>
        </div>
    );
};