    import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { useContext } from 'react';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Course', icon: <></>, id: TopLevelCategory.Courses }
];

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }

            return m;
        }))
    }

    const buildFirstLevel = (): JSX.Element => {
        return (
            <>
            <div className={styles.secondBlock}>
            {firstLevelMenu.map(menuElem => (
                    <div key={menuElem.route}>
                        <Link href={`/${menuElem.route}`}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: menuElem.id == firstCategory
                                })}>
                                    {menuElem.icon}
                                    <span>{menuElem.name}</span>
                                </div>
                            </a>
                        </Link>

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
                    if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                            {m._id.secondCategory}
                            </div>
                            <div className={cn(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: m.isOpened
                            })}>
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            <>
            {pages.map(p => {
                <Link href={`/${route}/${p.alias}`}>
                <a  className={cn(styles.buildThirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </a>
                </Link>
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