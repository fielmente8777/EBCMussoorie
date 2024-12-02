const Container = ({ children, className = "", id = "" }) => {
  return (
    <div className={`maxwidth ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
