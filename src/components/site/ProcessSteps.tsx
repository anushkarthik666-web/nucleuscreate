const defaultSteps = ["Send the raw files", "We edit in 48 hours", "You review in one round and publish."];

export default function ProcessSteps({ steps = defaultSteps }: { steps?: string[] }) {
  return (
    <ol className="mt-10 grid gap-3 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step} className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-8">
          <span className="text-sm text-neutral-500">Step {i + 1}</span>
          <p className="mt-10 font-heading text-xl font-semibold leading-snug tracking-tight text-neutral-950 sm:text-2xl">{step}</p>
        </li>
      ))}
    </ol>
  );
}
