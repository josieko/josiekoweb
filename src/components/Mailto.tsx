import React from "react";

interface MailtoProps {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children: React.ReactNode;
}

const Mailto: React.FC<MailtoProps> = ({
  email,
  subject = "",
  body = "",
  className = "",
  children,
}) => {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return (
    <a href={`mailto:${email}${params}`} className={className}>
      {children}
    </a>
  );
};

export default Mailto;
