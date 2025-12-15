const Container = ({ children, className }) => {
  return <div className={`max-w-360 mx-auto ${className}`}>{children}</div>;
};

export default Container;
