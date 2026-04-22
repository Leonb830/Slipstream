import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

const processSteps = [
  'Capture deal details',
  'Extract critical fields',
  'Assess policy and risk',
  'Route to approvers',
  'Review with AI summary',
  'Sync outcome to systems'
];

const sectionTransition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1]
};

function RevealSection({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={reduceMotion || inView ? { opacity: 1, y: 0 } : undefined}
      transition={sectionTransition}
    >
      {children}
    </motion.section>
  );
}

function CountUpMetric({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    let rafId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, reduceMotion, value]);

  return (
    <article ref={ref} className="metric-card">
      <p className="metric-value">
        {displayValue}
        {suffix}
      </p>
      <p className="metric-label">{label}</p>
    </article>
  );
}

function ProcessFlow() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="process-track" role="list" aria-label="Six-step deal orchestration flow">
      {processSteps.map((step, index) => {
        const isActive = index === activeStep;
        return (
          <div key={step} className="process-node-wrap" role="listitem">
            <motion.button
              type="button"
              className={`process-node ${isActive ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
              whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span className="step-index">0{index + 1}</span>
              <span>{step}</span>
            </motion.button>
            {index < processSteps.length - 1 && (
              <motion.span
                aria-hidden="true"
                className="process-arrow"
                animate={
                  reduceMotion
                    ? undefined
                    : isActive
                    ? { opacity: [0.4, 1, 0.4], x: [0, 6, 0] }
                    : { opacity: 0.4 }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                →
              </motion.span>
            )}
          </div>
        );
      })}
    </div>
  );
}

function BackgroundEffects() {
  const reduceMotion = useReducedMotion();
  const floating = useMemo(
    () =>
      [
        { top: '14%', left: '8%', delay: 0 },
        { top: '38%', left: '75%', delay: 0.4 },
        { top: '65%', left: '24%', delay: 0.8 },
        { top: '82%', left: '78%', delay: 1.1 }
      ],
    []
  );

  return (
    <div className="background-shell" aria-hidden="true">
      <motion.div
        className="grid-glow"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.12, 0.2, 0.12],
                scale: [1, 1.02, 1]
              }
        }
        transition={reduceMotion ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {floating.map((item, i) => (
        <motion.span
          key={i}
          className="blueprint-dot"
          style={{ top: item.top, left: item.left }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -10, 0],
                  opacity: [0.06, 0.14, 0.06]
                }
          }
          transition={
            reduceMotion
              ? undefined
              : { delay: item.delay, duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      ))}
    </div>
  );
}

export function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="app">
      <BackgroundEffects />

      <header className="hero">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
        >
          Approvals that move at deal speed.
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...sectionTransition, delay: reduceMotion ? 0 : 0.1 }}
        >
          Slipstream turns fragmented review cycles into one intelligent workflow with policy checks, AI summaries,
          and decision-ready context.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...sectionTransition, delay: reduceMotion ? 0 : 0.2 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Book demo
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Explore workflow
          </motion.button>
        </motion.div>
      </header>

      <RevealSection className="panel">
        <h2>Six-step orchestration flow</h2>
        <p className="section-subtitle">Track exactly where each deal is and nudge approvals forward.</p>
        <ProcessFlow />
      </RevealSection>

      <RevealSection className="panel">
        <h2>Key outcomes</h2>
        <div className="metrics-grid">
          <CountUpMetric value={42} suffix="%" label="Faster approvals" />
          <CountUpMetric value={18} suffix="%" label="Higher win rate" />
          <CountUpMetric value={31} suffix="%" label="Productivity lift" />
        </div>
      </RevealSection>

      <RevealSection className="panel cards">
        <motion.article className="info-card" whileHover={reduceMotion ? undefined : { y: -6 }}>
          <h3>AI risk context</h3>
          <p>Surface compliance concerns before review and route to the right approver instantly.</p>
        </motion.article>
        <motion.article className="info-card" whileHover={reduceMotion ? undefined : { y: -6 }}>
          <h3>Decision-ready packets</h3>
          <p>Summaries, key changes, and ownership history in one view for faster approvals.</p>
        </motion.article>
        <motion.article className="info-card" whileHover={reduceMotion ? undefined : { y: -6 }}>
          <h3>Live bottleneck alerts</h3>
          <p>Detect blocked deals in real time and automate escalations before momentum is lost.</p>
        </motion.article>
      </RevealSection>
    </div>
  );
}
