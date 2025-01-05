import type { Metadata } from 'next';
import '@/styles/index.scss';
import Navigation from '@/components/Navigation';
import { GithubLogo, DiscordLogo } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'docs - forumify',
  description: 'Documentation for forumify platform',
  icons: {
    icon: '/forumify.svg'
  }
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => <html lang="en">
<body className="flex flex-col justify-between">
<div>
  <header className="header">
    <div className="responsive flex">
      <a href="https://forumify.net" className="header-logo">
        <img src="/forumify.svg" alt="logo" />
        <span className="ml-2">forumify</span>
      </a>
      <div className="flex-grow flex items-center justify-between">
        <nav className="header-navigation">
          {/* TODO: add some quick links */}
        </nav>
      </div>
      <div className="flex justify-end items-center gap-1">
        <a href="https://discord.gg/uWvyEMqSqK" target="_blank" className="btn-link btn-icon">
          <DiscordLogo size={32} />
        </a>
        <a href="https://github.com/forumify/forumify-platform" target="_blank"
          className="btn-link btn-icon">
          <GithubLogo size={32} />
        </a>
      </div>
    </div>
  </header>
  <div className="flex justify-between gap-4 responsive">
    <Navigation />
    <main className="rich-text">
      {children}
    </main>
  </div>
</div>
<hr className='mt-6 mb-6' />
<footer className="text-small">
  forumify documentation&nbsp;
  <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.
  Any code samples presented are licensed under the original&nbsp;
  <a href="https://github.com/forumify/forumify-platform/blob/master/LICENSE.md" target="_blank">
    forumify platform license
  </a>.
</footer>
</body>
</html>;

export default RootLayout;
