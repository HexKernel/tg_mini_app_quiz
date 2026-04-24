import { useEffect, useMemo, useState } from "react";

const QUESTIONS = [
  {
    text: "You find a mysterious button. What do you do?",
    answers: ["Press it instantly", "Ask AI first", "Walk away suspiciously"]
  },
  {
    text: "Choose your viral content strategy.",
    answers: ["Memes", "Chaos", "Cute animals"]
  },
  {
    text: "Final test: do you deserve the reward?",
    answers: ["Yes", "Obviously", "I was born ready"]
  }
];

const MEMES = [
  "http://github.com/Ratorgis/tg_mini_app_quiz/blob/main/img/photo_1.jpg",
  "https://github.com/Ratorgis/tg_mini_app_quiz/blob/main/img/photo_2.jpg",
  "https://github.com/Ratorgis/tg_mini_app_quiz/blob/main/img/photo_3.jpg"
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(8);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const questions = useMemo(() => {
    return shuffle(QUESTIONS).map((q) => ({
      ...q,
      answers: shuffle(q.answers)
    }));
  }, []);

  const meme = useMemo(() => {
    return MEMES[Math.floor(Math.random() * MEMES.length)];
  }, []);

  const finished = step >= questions.length;

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

  useEffect(() => {
    if (!started || finished) return;

    setTimeLeft(8);

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          answer();
          return 8;
        }

        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step, started, finished]);

  function answer() {
    if (step + 1 < questions.length) {
      setStep((s) => s + 1);
    } else {
      setStep((s) => s + 1);
      setTimeout(() => setReady(true), 700);
    }
  }

  function scratch() {
    setProgress((p) => Math.min(p + 20, 100));
  }

  if (!started) {
    return (
      <main className="app">
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />

        <section className="start-card">
          <p className="label">Telegram Mini App</p>
          <h1>Prank Quiz</h1>
          <p className="subtitle">
            Three questions. Eight seconds each. One suspicious reward.
          </p>

          <button className="start-button" onClick={() => setStarted(true)}>
            Start Game
          </button>
        </section>
      </main>
    );
  }

  if (!finished) {
    const q = questions[step];

    return (
      <main className="app">
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />

        <section className="quiz-card">
          <div className="top-row">
            <span>Question {step + 1}/3</span>
            <span className={timeLeft <= 3 ? "timer danger" : "timer"}>
              {timeLeft}s
            </span>
          </div>

          <div className="timer-bar">
            <div style={{ width: `${(timeLeft / 8) * 100}%` }} />
          </div>

          <h2>{q.text}</h2>

          <div className="answers">
            {q.answers.map((a) => (
              <button key={a} onClick={answer}>
                {a}
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <section className="quiz-card">
        {!ready && <h2>Generating your scientifically questionable reward...</h2>}

        {ready && (
          <>
            <p className="label">Reward unlocked</p>
            <h2>Scratch the card</h2>

            <div className="scratch-card" onClick={scratch}>
              <img src={meme} alt="Meme reward" />

              {progress < 100 && (
                <div
                  className="scratch-cover"
                  style={{ opacity: 1 - progress / 100 }}
                >
                  Tap to scratch
                </div>
              )}
            </div>

            {progress >= 100 && (
              <p className="result">You have been professionally pranked.</p>
            )}

            <button className="restart" onClick={() => window.location.reload()}>
              Play Again
            </button>
          </>
        )}
      </section>
    </main>
  );
}
