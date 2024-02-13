import { classNames } from "shared/lib/classNames/classNames"
import cls from './Sidebar.module.scss'
import { useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t, i18n } = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
            <Button 
            data-testid="sidebar-toggle" 
            onClick={onToggle}
            className={cls.collapsedBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                    <AppLink 
                        theme={AppLinkTheme.SECONDARY} 
                        to={RoutePath.about} 
                        className={cls.item}
                    >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};