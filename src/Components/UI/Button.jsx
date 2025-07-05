const Button = ({ title, className = "" }) => {
  return <button className={` ${className}`}>{title}</button>;
};

export default Button;
