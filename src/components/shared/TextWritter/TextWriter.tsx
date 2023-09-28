import { useEffect, useState } from 'react';

export interface TextWriterProps {
  text: string;
  delay: number;
  renderContainer?: (text: string) => JSX.Element;
}

const TextWriter = ({ text, delay, renderContainer }: TextWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return renderContainer ? renderContainer(currentText) : <>currentText</>;
};

export default TextWriter;
