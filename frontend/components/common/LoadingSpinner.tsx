export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-600 border-t-transparent" />
    </div>
  );
}
