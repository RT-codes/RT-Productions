import clsx from "clsx";

type PanelProps = React.ComponentPropsWithoutRef<"div">;

// The rounded glass panel shared by the intro and about sections.
export default function Panel({ className, ...props }: PanelProps) {
  return <div className={clsx("border border-black/10 bg-white/70 shadow-xl shadow-black/[0.04] backdrop-blur-md dark:border-white/10 dark:bg-gray-900/70 dark:shadow-black/30", className)} {...props} />;
}
