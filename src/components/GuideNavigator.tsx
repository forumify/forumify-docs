'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

interface NavigatorLink {
  className: string;
  href: string;
  label: string;
}

const Navigator: React.FC<React.PropsWithChildren<NavigatorLink>> = ({ href, label, className, children }) => (
  <Link href={href} className={'btn-outlined h-auto p-4 flex-col ' + className}>
    <span className='mb-1'>{children}</span>
    <span className='text-small'>{label}</span>
  </Link>
);

interface IGuideNavigatorProps {
  previous?: NavigatorLink;
  next?: NavigatorLink;
}

export const GuideNavigator: React.FC<IGuideNavigatorProps> = ({ next, previous }) => (
  <div className='flex justify-between mt-8'>
    <div>
      {previous && <Navigator {...previous} className='items-start'><ArrowLeft /> Previous Chapter</Navigator>}
    </div>
    <div>
      {next && <Navigator {...next} className='items-end'>Next Chapter <ArrowRight /></Navigator>}
    </div>
  </div>
);

export default GuideNavigator;
