'use client';

import React from 'react';
import QuickLink from '@/components/QuickLink';

const Page = () => {
  return <div>
    <h1>forumify Documentation</h1>
    <div className="flex gap-6 flex-wrap">
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
