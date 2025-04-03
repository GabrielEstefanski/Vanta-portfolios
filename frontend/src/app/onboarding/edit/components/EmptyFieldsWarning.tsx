interface EmptyFieldsWarningProps {
  emptyFields: string[];
}

export default function EmptyFieldsWarning({ emptyFields }: EmptyFieldsWarningProps) {
  if (emptyFields.length === 0) return null;

  return (
    <div className="mb-8 bg-black/40 border border-red-500/5 rounded-lg p-4 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-red-500/5 flex items-center justify-center">
          <svg className="w-4 h-4 text-red-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <h3 className="text-red-400/90 text-sm font-medium mb-1">Campos Pendentes</h3>
          <p className="text-white/60 text-sm mb-2">
            Complete os campos abaixo para continuar:
          </p>
          <ul className="space-y-1">
            {emptyFields.map((field, index) => (
              <li key={index} className="text-white/50 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/30" />
                {field}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 