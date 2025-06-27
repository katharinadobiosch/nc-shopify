import {useEffect, useState} from 'react';
import './intro.scss';

export function Intro({children}) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <div className="intro-screen">
        <h1 className="intro-logo">NEO CRAFT</h1>
      </div>
    );
  }

  return <>{children}</>;
}
