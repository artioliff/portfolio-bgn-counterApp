import { useEffect, useMemo, useState } from "react";

/**
 * Lista fixa de passos disponíveis.
 * Como não muda durante a execução, não precisa ser state.
 */
const steps = [1, 5, 10];

function App() {
  /**
   * ============================
   * ESTADOS (STATE)
   * ============================
   */

  // Valor do contador
  const [count, setCount] = useState(0);

  // Passo atual (quanto soma/subtrai a cada ação)
  const [step, setStep] = useState(1);

  /**
   * ============================
   * ESTADO DERIVADO (useMemo)
   * ============================
   * "mood" é um texto calculado a partir do count.
   * Não faz sentido salvar isso em state, porque é derivado.
   */
  const mood = useMemo(() => {
    if (count === 0) return "Zero, mas com estilo.";
    if (count < 0) return "Negativo? Ainda dá pra virar.";
    if (count < 10) return "Aquecendo os motores.";
    if (count < 25) return "Ritmo constante.";
    return "Turbo ligado.";
  }, [count]);

  /**
   * ============================
   * FUNÇÕES DE CONTROLE
   * ============================
   * Centralizamos a lógica aqui para:
   * - reutilizar nos botões
   * - reutilizar nos atalhos de teclado
   * - manter JSX mais limpo
   */

  // Soma step no count (forma funcional garante valor mais recente)
  function increment() {
    setCount((value) => value + step);
  }

  // Subtrai step do count
  function decrement() {
    setCount((value) => value - step);
  }

  // Reseta o contador para 0
  function reset() {
    setCount(0);
  }

  /**
   * ============================
   * ATALHOS DE TECLADO (useEffect)
   * ============================
   * ↑  → incrementa
   * ↓  → decrementa
   * R  → reset
   *
   * useEffect é usado aqui porque estamos lidando com
   * "efeito colateral": adicionar/remover listener global do window.
   */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") increment();
      if (event.key === "ArrowDown") decrement();
      if (event.key.toLowerCase() === "r") reset();
    }

    // registra o listener
    window.addEventListener("keydown", handleKeyDown);

    // cleanup: remove o listener quando o componente desmonta
    // (ou antes de recriar o effect)
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]); // step influencia increment/decrement, então entra como dependência

  return (
    <div className="min-h-screen px-5 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-3 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Counter App</p>

          <h1 className="text-4xl font-semibold text-slate-50 md:text-6xl">Controle cada clique com atitude.</h1>

          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            Um contador minimalista com ritmo visual, feito em React e Tailwind. Escolha o passo e mantenha o fluxo.{" "}
            <span className="text-slate-400">(Atalhos: ↑ / ↓ / R)</span>
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Contador atual</p>
                  <p className="text-6xl font-semibold text-slate-50 md:text-7xl">{count}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Status</p>
                  <p className="text-sm text-slate-200">{mood}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900/80"
                  onClick={decrement}
                  type="button"
                >
                  Diminuir
                </button>

                <button
                  className="rounded-2xl bg-gradient-to-r from-orange-500 via-rose-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
                  onClick={increment}
                  type="button"
                >
                  Somar
                </button>

                <button
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-50 transition hover:-translate-y-0.5 hover:bg-white/20"
                  onClick={reset}
                  type="button"
                >
                  Resetar
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/40 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Passo de contagem</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">
                {step} em {step}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {steps.map((value) => {
                const isActive = step === value;

                return (
                  <button
                    key={value}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "border-transparent bg-slate-50 text-slate-900"
                        : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                    onClick={() => setStep(value)}
                    type="button"
                  >
                    {value}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Dica rápida</p>
              <p>Use um passo maior para simular metas rápidas ou diminua para ajustes precisos.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
