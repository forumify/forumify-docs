import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export interface QuickLinkProps extends React.PropsWithChildren {
  href: string;
  name: string;
}

export const QuickLink: React.FC<QuickLinkProps> = ({ href, name, children }) => <Link
  href={href}
  className="box flex flex-col justify-between"
  style={{ width: 300 }}
>
  <p className="text-small">
    {children}
  </p>
  <p className="mt-6 flex items-center">
    {name}
    <ArrowRight />
  </p>
</Link>

export default QuickLink;
