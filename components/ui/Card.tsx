export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-slate-900
    border border-slate-200 dark:border-slate-800
    rounded-xl p-6 shadow-soft">
      {children}
    </div>
  );
}