export type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T;

export type StepProps = {
  onNext?: (data?: unknown) => void;
  onBack?: () => void;
};
