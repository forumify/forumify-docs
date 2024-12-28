import type { MDXComponents } from 'mdx/types';
import GithubSlugger from 'github-slugger';
import Link from 'next/link';
import { Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';

interface HeadingProps extends React.PropsWithChildren {
  HeadingTag: React.ElementType;
}

const Heading: React.FC<HeadingProps> = ({ HeadingTag, children }) => {
  if (typeof children !== 'string') {
    return <HeadingTag>{ children }</HeadingTag>;
  }

  const slugger = new GithubSlugger();
  const slug = slugger.slug(children);

  return <Link href={`#${slug}`}>
    <HeadingTag id={slug} className="heading-link">
      {children}
      <LinkIcon />
    </HeadingTag>
  </Link>;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Heading HeadingTag="h1">{children}</Heading>,
    h2: ({ children }) => <Heading HeadingTag="h2">{children}</Heading>,
    h3: ({ children }) => <Heading HeadingTag="h3">{children}</Heading>,
    h4: ({ children }) => <Heading HeadingTag="h4">{children}</Heading>,
    h5: ({ children }) => <Heading HeadingTag="h5">{children}</Heading>,
    h6: ({ children }) => <Heading HeadingTag="h6">{children}</Heading>,
    ...components,
  }
}
