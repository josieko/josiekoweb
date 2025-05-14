import React from "react";

interface NavItemProps {
  name: string;
  color: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  rightIcon?: React.ComponentType<{ size?: number; color?: string }>;
  rightIconColor?: string;
  url?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  color,
  icon,
  rightIcon,
  url,
  isActive = false,
  onClick,
}) => {
  const isExternalLink = url?.startsWith("http");

  const IconComponent = icon
    ? (icon as React.ComponentType<{
        size?: number;
        color?: string;
      }>)
    : null;

  const RightIcon = rightIcon
    ? (rightIcon as React.ComponentType<{
        size?: number;
        rightIconColor?: string;
      }>)
    : null;

  const content = (
    <div className="flex flex-row mobile-nav-item-wrapper">
      <span
        className="flex justify-center items-center w-6 h-6 rounded-md mr-2 mobile-icon"
        style={{ background: color }}
      >
        {IconComponent && <IconComponent size={16} color="#ffffff" />}
      </span>
      <span className="text-white text-sm whitespace-nowrap mobile-label">
        {name}
      </span>
      <span className="nav-right-icon">
        {RightIcon && <RightIcon size={16} rightIconColor="#ffffff" />}
      </span>
    </div>
  );

  const tailwindClasses = [
    "flex items-center py-1 px-2 rounded-sm text-sm whitespace-nowrap transition-colors mobile-nav-item",
    isActive ? "bg-blue-200/10" : "",
    "text-white no-underline cursor-pointer",
  ].join(" ");

  if (url && isExternalLink) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={tailwindClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={tailwindClasses} onClick={onClick}>
      {content}
    </div>
  );
};

export default NavItem;
