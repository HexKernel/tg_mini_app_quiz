import { useEffect, useMemo, useState } from "react";

const QUESTIONS = [
  { text: "Do you trust random internet quizzes?", answers: ["Yes", "No"] },
  { text: "Are you lucky today?", answers: ["Yes", "No"] },
  { text: "Would you click random things?", answers: ["Yes", "No"] },
  { text: "Do you trust this app?", answers: ["Yes", "No"] },
  { text: "Are you bored?", answers: ["Yes", "No"] },
  { text: "Do you want a reward?", answers: ["Yes", "No"] },
  { text: "Final question: ready?", answers: ["Yes", "No"] }
];

const MEMES = [
  "https://your-domain.com/meme1.png",
  "https://your-domain.com/meme2.png",
  "https://your-domain.com/meme3.png"
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const questions = useMemo(() => {
    return shuffle(QUESTIONS).map(q => ({
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

  function answer() {
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
      setTimeout(() => setReady(true), 500);
    }
  }

  function scratch() {
    setProgress(p => Math.min(p + 25, 100));
  }

  if (!finished) {
    const q = questions[step];
    return (
      <div className="container">
        <div className="card">
          <h2>{q.text}</h2>
          {q.answers.map(a => (
            <button key={a} onClick={answer}>{a}</button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        {!ready && <p>Calculating...</p>}

        {ready && (
          <>
            <h2>Scratch your reward</h2>

            <div className="scratch" onClick={scratch}>
              <img src={meme} />
              {progress < 100 && (
                <div className="cover" style={{ opacity: 1 - progress / 100 }}>
                  Scratch
                </div>
              )}
            </div>

            {progress >= 100 && <p>You got pranked.</p>}

            <button onClick={() => window.location.reload()}>
              Restart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
