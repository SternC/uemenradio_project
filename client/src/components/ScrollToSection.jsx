import React from 'react';

const ScrollToSection = ({ 
  children, 
  to, 
  onClick, 
  className = "",
  smooth = true 
}) => {
  const handleClick = (e) => {
    if (to) {
      e.preventDefault();
      const element = document.getElementById(to);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: smooth ? 'smooth' : 'auto'
        });
      }
    }
    
    if (onClick) onClick(e);
  };

  const childProps = {
    onClick: handleClick,
    href: to ? `#${to}` : children.props.href,
    className: `${children.props.className} ${className}`
  };

  return React.cloneElement(children, childProps);
};

export default ScrollToSection;