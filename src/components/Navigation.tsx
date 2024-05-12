'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import navigation from '@/app/navigation.json';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

interface INavEntry {
  type: string;
  path: string;
  label: string;
}

interface IRoute extends INavEntry {
  type: 'route';
}

interface ICollection extends INavEntry {
  type: 'collection';
  children: Array<IRoute | ICollection>
}

interface ICollectionProps {
  route: ICollection;
  parents: string[];
}

const Collection: React.FC<ICollectionProps> = ({ route, parents }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((v) => !v);
  }

  return <>
    <button
      className="btn-link justify-between"
      onClick={toggleOpen}
      style={open ? { backgroundColor: 'rgba(0, 0, 0, 0.03)' } : {}}
    >
      {route.label}
      {open ? <CaretUp /> : <CaretDown />}
    </button>
    <RouteList routes={route.children} parents={[...parents, route.path]} open={open} />
  </>
}

interface IRouteListProps {
  open: boolean
  parents: string[];
  routes: Array<IRoute | ICollection>;
}

const RouteList: React.FC<IRouteListProps> = ({ routes, parents, open }) => <ul
  className={open ? 'open' : undefined}
>
  {routes.map((route, key) => <li key={key}>
    {route.type === 'collection'
      ? <Collection route={route} parents={parents} />
      : <Link
        className="btn-link"
        href={'/' + [...parents, route.path].join('/')}
      >
        {route.label}
      </Link>}
  </li>)}
</ul>

export const Navigation: React.FC = () => <nav className="main-navigation">
  <RouteList routes={navigation as Array<IRoute | ICollection>} parents={[]} open={true} />
</nav>;

export default Navigation;
