import { useState, useEffect } from "react";


export const Jobs = () => {
  const toRotate = [
    "Fullstack Developer",
    "Web Developer",
    "Data Analyst",
    "01010110 01010010"
  ];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(150);
    }
  };

  return (
    <section className="banner" id="home" style={{ textAlign: 'center', padding: '15px' }}>
      <h1 className="txt-rotate" style={{ fontSize: '1rem',  minHeight: '32px' }}>
        <span className="wrap text-xl" >{text}</span>
      </h1>
    </section>
  );
};
    
export default Jobs

  

