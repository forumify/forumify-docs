'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

interface QuickLinkProps extends React.PropsWithChildren {
  href: string;
  name: string;
}

const QuickLink: React.FC<QuickLinkProps> = ({ href, name, children }) => <Link
  href={href}
  className="box w-50 flex flex-col justify-between"
  style={{ minWidth: 300 }}
>
  <p className="text-small">
    {children}
  </p>
  <p className="mt-6 flex items-center">
    {name}
    <ArrowRight />
  </p>
</Link>

const Page = () => {
  return <div>
    <h1>forumify Documentation</h1>
    <div className="flex gap-6">
      <QuickLink href="/user-manual" name="User Manual">
        Learn more about using forumify.
      </QuickLink>
      <QuickLink href="/guides/self-hosting" name="Self Hosting">
        Want to host your own forumify instance? Find out how you can get the most out of forumify.
      </QuickLink>
      <QuickLink href="/guides/customization/introduction"
        name="Customizing forumify">
        Got a great idea for a plugin? Need to add some functionality to your instance? Learn all
        about it here.
      </QuickLink>
    </div>
  </div>
};

export default Page;
