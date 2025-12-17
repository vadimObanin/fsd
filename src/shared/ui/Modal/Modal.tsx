import React from 'react';
import cls from './Modal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Portal} from "shared/ui/Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";


interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {className, children, isOpen, onClose} = props;
  const {theme} = useTheme();

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen
  }

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  }

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()


  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div onClick={closeHandler} className={cls.overlay}>
          <div onClick={onContentClick} className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};