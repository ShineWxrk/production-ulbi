import { classNames } from "shared/lib/classNames/classNames"
import cls from './Navbar.module.scss'
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setAuthModal] = useState(false)
    const onToggleModal = useCallback(() => {
        setAuthModal((prev) => !prev)
    }, [])

    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aut recusandae corporis laborum aperiam molestiae nobis nesciunt at, temporibus placeat nostrum voluptatem ad nam aspernatur cum animi repellendus laudantium id!
            </Modal>
        </div>
    );
};
