import { useLocation } from 'react-router-dom';
import { type ReactNode, useEffect, useState } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div className={show ? 'page-enter' : 'opacity-0'}>
      {children}
    </div>
  );
}
