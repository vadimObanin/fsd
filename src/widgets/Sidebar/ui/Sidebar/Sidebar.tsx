import React, {FC} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ButtonSize, ThemeButton} from "shared/ui/Button/ui/Button";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
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
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher short={collapsed} className={cls.lang}/>
      </div>
    </div>
  );
};