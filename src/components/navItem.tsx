import React from "react";

// Define the props for the NavItem component
interface NavItemProps {
  name: string;
  color: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
  url?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  color,
  icon,
  url,
  isActive = false,
  onClick,
}) => {
  // Determine if this is a link or a button
  const isExternalLink = url?.startsWith("http");

  // Get the icon component if provided
  const IconComponent = icon
    ? (icon as React.ComponentType<{
        size?: number;
        color?: string;
      }>)
    : null;

  // Common content for both link and button
  const content = (
    <>
      <span
        className="nav-icon flex justify-center items-center"
        style={{ background: color }}
      >
        {IconComponent && <IconComponent size={16} color="#ffffff" />}
      </span>
      <span className="ml-2 text-white">{name}</span>
    </>
  );

  // Tailwind classes that will eventually replace the CSS classes
  const tailwindClasses =
    "flex items-center py-1 px-2 rounded-lg text-sm whitespace-nowrap mb-1";

  // Render either a link or a button based on props
  if (url && isExternalLink) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`nav-item ${tailwindClasses} ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={`nav-item ${tailwindClasses} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default NavItem;
