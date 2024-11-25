/* eslint-disable no-unused-vars */
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoutesInterface, ISidebarRoutes } from 'utils/interfaces/routes.types';

import { MenuDashboardIcon, MenuSurveyIcon, MenuTrainingIcon } from 'assets/icons';
import { generalItemTranslation } from 'utils/helpers/general.helpers';
import { TranslationsKeys } from 'utils/i18n';

const LoginPage = lazy(() => import('pages/Public/LoginPage'));
const ForgotPasswordPage = lazy(() => import('pages/Public/ForgotPasswordPage'));
const Error404 = lazy(() => import('components/Layouts/NotFound/Error404'));
// const DefaultPage = lazy(() => import('pages/Private/DefaultPage'));
const ComplementsPage = lazy(() => import('pages/Private/Complements'));
const BaseArticlePage = lazy(() => import('pages/Private/Articles/BaseArticlePage'));
const StockArticlePage = lazy(() => import('pages/Private/Articles/StockArticlePage'));
const SalesPage = lazy(() => import('pages/Private/SalesPage'));

export enum RoutesListPaths {
    ANY = '*',
    ROOT = '/',
    NOT_FOUND = '/404',
    LOGIN = '/login',
    FORGOT_PASSWORD = '/forgot-password',
    SALES = '/ventas',
    BASE_ARTICLES = '/base-articles',
    STOCK_ARTICLES = '/stock-articles',
    COMPLEMENTS = '/complements',
}

export const PublicRoutesList: AppRoutesInterface[] = [
    {
        path: RoutesListPaths.ANY,
        Component: <Navigate to={RoutesListPaths.LOGIN} replace />,
    },
    {
        path: RoutesListPaths.ROOT,
        Component: <Navigate to={RoutesListPaths.LOGIN} replace />,
    },
    {
        path: RoutesListPaths.NOT_FOUND,
        Component: <Error404 />,
    },
    {
        path: RoutesListPaths.LOGIN,
        Component: <LoginPage />,
    },
    {
        path: RoutesListPaths.FORGOT_PASSWORD,
        Component: <ForgotPasswordPage />,
    },
];

export const PrivateRoutesList: AppRoutesInterface[] = [
    {
        path: RoutesListPaths.ANY,
        Component: <Navigate to={RoutesListPaths.NOT_FOUND} replace />,
    },
    {
        path: RoutesListPaths.ROOT,
        Component: <Navigate to={RoutesListPaths.SALES} replace />,
    },
    {
        path: RoutesListPaths.NOT_FOUND,
        Component: <Error404 />,
    },
    {
        path: RoutesListPaths.SALES,
        Component: <SalesPage />,
    },
    {
        path: RoutesListPaths.BASE_ARTICLES,
        Component: <BaseArticlePage />,
    },
    {
        path: RoutesListPaths.STOCK_ARTICLES,
        Component: <StockArticlePage />,
    },
    {
        path: RoutesListPaths.COMPLEMENTS,
        Component: <ComplementsPage />,
    },
];

export const SidebarRoutes: ISidebarRoutes[] = [
    {
        title: generalItemTranslation('sidebar_route_ventas', TranslationsKeys.COMMON),
        path: RoutesListPaths.SALES,
        Icon: MenuDashboardIcon,
        active: false,
    },
    {
        title: generalItemTranslation('sidebar_route_articulos_base', TranslationsKeys.COMMON),
        path: RoutesListPaths.BASE_ARTICLES,
        Icon: MenuTrainingIcon,
        active: false,
    },
    {
        title: generalItemTranslation('sidebar_route_articulos_stock', TranslationsKeys.COMMON),
        path: RoutesListPaths.STOCK_ARTICLES,
        Icon: MenuTrainingIcon,
        active: false,
    },
    {
        title: generalItemTranslation('sidebar_route_complementos', TranslationsKeys.COMMON),
        path: RoutesListPaths.COMPLEMENTS,
        Icon: MenuSurveyIcon,
        active: false,
    },
];
