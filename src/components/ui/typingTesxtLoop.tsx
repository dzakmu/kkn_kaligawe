'use client';

import { useState, useEffect } from 'react';

interface TypingTextLoopProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
  delayBeforeTyping?: number;
  cursor?: boolean; 
}

export default function TypingTextLoop({
  texts,
  typingSpeed = 50,
  deletingSpeed = 20,
  delayBeforeDelete = 2000,
  delayBeforeTyping = 1000,
  cursor = true,
}: TypingTextLoopProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          timer = setTimeout(handleTyping, typingSpeed);
        } else {
          timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          timer = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % texts.length);
          timer = setTimeout(handleTyping, delayBeforeTyping); 
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBeforeDelete, delayBeforeTyping]);

  return (
    <>
      {displayedText}
      {cursor && <span className="ml-1 animate-blink">|</span>}
    </>
  );
}