const Container = ({ children, className }) => {
  return <div className={`max-w-10/12 mx-auto ${className}`}>{children}</div>;
};

export default Container;
