import React, {FC} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonSize, ThemeButton} from "shared/ui/Button/ui/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RouterPath} from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const {t} = useTranslation();
  const onToggle = () => setCollapsed(prev => !prev)

  const {className} = props;

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RouterPath.main}>
          <MainIcon className={cls.icon}/>
          <span className={cls.link}>Main</span>
        </AppLink>
        <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RouterPath.about}>
          <AboutIcon className={cls.icon}/>
          <span className={cls.link}>About</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed} className={cls.lang}/>
      </div>
    </div>
  );
};