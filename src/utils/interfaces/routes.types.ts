/* eslint-disable no-unused-vars */
import { LazyExoticComponent, ReactNode } from 'react';
import { RoutesListPaths } from 'routes';

type RouteComponent = JSX.Element | ReactNode | LazyExoticComponent<() => JSX.Element>;
type IconSidebarComponent = any;

export interface AppRoutesInterface {
    path: string;
    Component: RouteComponent;
}

export interface ISidebarRoutes {
    title: string;
    path: RoutesListPaths;
    Icon: IconSidebarComponent;
    active: boolean;
}
