import { ButtonProps } from "./button.props";
import styles from './button.module.css';
import cn from 'classnames';

export const Button = ({appearance, children, className, ...props}: ButtonProps): JSX.Element => {
    return <>
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
        </button>
    </>;
};