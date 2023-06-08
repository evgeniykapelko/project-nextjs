import { FooterProps } from "./Footer.props";
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer  className={cn(className, styles.footer)} {...props}>
            <div>
            Copyright © 2023 - {format(new Date(), 'yyy')} All rights reserved.
            </div>
            <a href="#" target="_blank">User Agreements</a>
            <a href="#" target="_blank">User Policy</a>
        </footer>
    );
};