export default function LayoutCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-2 mt-4 p-4 rounded-lg bg-gradient-radial from-white dark:from-black-inner to-white dark:to-black-outer duration-300 ease-out grid grid-cols-1 grid-rows-2 gap-4 sm:grid-rows-1 sm:grid-cols-2">
      {children}
    </div>
  );
}