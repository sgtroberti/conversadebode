import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./layout.css";

const FadeTransition = ({ location, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, [location]);

  return (
    <CSSTransition
      in={show}
      key={location.key}
      classNames="fade"
      timeout={300}
      unmountOnExit
      onExited={() => setShow(false)}
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default FadeTransition;
