import { JSX, ReactNode } from 'react';

interface TutorialSectionProps {
  variant: 'generic' | 'nx-cloud' | 'divider';
  children: ReactNode;
}
export function TutorialSection({ variant, children }: TutorialSectionProps) {
  switch (variant) {
    case 'nx-cloud':
      return (
        <div className="-ml-5 border-l-4 border-green-700 pl-4">{children}</div>
      );
    //   case 'divider':
    //     return (
    //       <div className="my-12 -ml-4 flex">
    //         <span className="h-[6px] w-[6px] -ml-[2px] rounded-full bg-slate-400"></span>
    //       </div>
    //     );
    default:
      return <div className="">{children}</div>;
  }
}
