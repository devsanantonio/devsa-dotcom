import clsx from 'clsx';

export function Button({ className, children, ...props }) {
   className = clsx(
      className,
      'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition'
   );

   let inner = <span className="relative top-px">{children}</span>;

   return (
      <button className={className} {...props}>
         {inner}
      </button>
   );
}
