import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface MobileNavItemProps {
  name: string;
  color: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  rightIcon?: React.ComponentType<{
    size?: number;
    color?: string;
    strokeWidth?: number;
  }>;
  children?: React.ReactNode;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({
  name,
  color,
  icon,
  rightIcon,
  children,
}) => {
  const IconComponent = icon
    ? (icon as React.ComponentType<{
        size?: number;
        color?: string;
      }>)
    : null;

  const RightIcon = rightIcon
    ? (rightIcon as React.ComponentType<{
        size?: number;
        color?: string;
        strokeWidth?: number;
      }>)
    : null;

  const content = (
    <div className="flex flex-row items-center justify-between w-full mobile-nav-item-wrapper">
      <div className="flex flex-row items-center nav-left">
        <span
          className="flex justify-center items-center w-6 h-6 rounded-sm mr-2 mobile-icon"
          style={{ background: color }}
        >
          {IconComponent && <IconComponent size={16} color="#ffffff" />}
        </span>
        <span className="text-white text-sm whitespace-nowrap mobile-label">
          {name}
        </span>
      </div>
      {RightIcon && (
        <span className="nav-right-icon ml-auto">
          <RightIcon size={17} color="#545456" strokeWidth={3} />
        </span>
      )}
    </div>
  );

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={name}>
        <AccordionTrigger className="mobile-nav-item">
          {content}
        </AccordionTrigger>
        <AccordionContent>
          <div className="mobile-nav-content">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNavItem;
