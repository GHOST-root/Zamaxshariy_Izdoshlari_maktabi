import { useRef, useLayoutEffect, useState } from "react";

export default function FaqItem({ open, onToggle, question, answer }) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
    ref={ref}
    className={`faq-card faq-reveal reveal reveal-bottom ${revealed ? "active" : ""} ${
        open ? "open" : ""
    }`}
    onClick={onToggle}
    >
      <div className="faq-card-txt">
        <h3>{question}</h3>
        <div className="faq-more">
          <span>{open ? "−" : "+"}</span>
        </div>
      </div>

      <div className="faq-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}