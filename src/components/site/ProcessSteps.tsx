const steps = ["Send the raw files", "We edit in 48 hours", "You review in one round and publish."];

export default function ProcessSteps() {
  return (
    <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step} className="bg-background p-6 sm:p-8">
          <span className="font-heading text-sm font-medium text-primary">0{i + 1}</span>
          <p className="mt-8 font-heading text-xl font-medium leading-snug text-white sm:text-2xl">{step}</p>
        </li>
      ))}
    </ol>
  );
}
