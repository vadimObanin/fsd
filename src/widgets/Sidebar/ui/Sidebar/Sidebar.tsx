import React, {FC} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const onToggle = () => setCollapsed(prev => !prev)

  const {className} = props;

  return (
    <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};