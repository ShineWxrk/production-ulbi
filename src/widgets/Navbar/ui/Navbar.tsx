import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
    toggleTheme: () => void
}

export const Navbar = ({className, toggleTheme}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О Сайте</AppLink>
        </div>
    );
};
