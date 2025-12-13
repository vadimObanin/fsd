import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ErrorPage.module.scss'
import {useTranslation} from "react-i18next";


interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const {t} = useTranslation();
    const {className} = props;

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <button onClick={reloadPage}>
                {t("Обновить страницу")}
            </button>
        </div>
    );
};