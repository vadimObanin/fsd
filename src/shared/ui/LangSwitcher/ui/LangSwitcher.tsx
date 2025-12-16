import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const {t, i18n} = useTranslation();
  const {className, short} = props;

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  }

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(short === true ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};