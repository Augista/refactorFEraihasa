import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-hot-toast';

import Forbidden from '@/components/Forbidden';
import api from '@/lib/api';
import { getToken, removeToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';
import { ApiReturn } from '@/types/api';
import { User } from '@/types/entities/user';

import Loading from '../Loading';

export interface WithAuthProps {
  user: User;
}

const USER_ROUTE = '/';
const ADMIN_ROUTE = '/admin';
const LOGIN_ROUTE = '/auth/login';

export enum RouteRole {
  /**
   Dapat diakses hanya ketika user belum login (Umum)
   */
  public,
  /**
   * Dapat diakses semuanya
   */
  optional,
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  user,
  /**
   * For all authenticated admin
   * will push to login if user is not authenticated
   */
  admin,
}

/**
 * Add role-based access control to a component
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */
export default function withAuth<T>(
  Component: React.ComponentType<T>,
  routeRole: keyof typeof RouteRole,
  options: {
    withCache?: boolean;
  } = {
    withCache: true,
  }
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const { query } = router;

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const prevIsAuthenticatedRef = React.useRef<boolean | undefined>(undefined);
    const hasJustLoggedInOnThisInstance = React.useRef(false);

    React.useEffect(() => {
      prevIsAuthenticatedRef.current = isAuthenticated;
    }, [isAuthenticated]);

 const checkAuth = React.useCallback(() => {
      const token = getToken();
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }

      const loadUser = async () => {
        try {
          const res = await api.get<ApiReturn<User>>('/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!res.data.data) {
            toast.error('Sesi login tidak valid');
            throw new Error('Sesi login tidak valid');
          }

          login({
            ...res.data.data,
            token,
          });

        } catch (err) {
          logout();
          removeToken();
        } finally {
          stopLoading();
        }
      };

      if (!isAuthenticated || options.withCache) {
        loadUser();
      }
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      checkAuth();

      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);
    React.useEffect(() => {
      checkAuth();

      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      const Redirect = async () => {
        if (isAuthenticated) {
          const prevIsAuthenticated = prevIsAuthenticatedRef.current;
          // Jika ada user yang login akses public maka akan dipindah ke admin, user, atau forda
          if (routeRole === 'public') {
            if (prevIsAuthenticated === false && isAuthenticated === true) {
              hasJustLoggedInOnThisInstance.current = true;
            }

            if (!hasJustLoggedInOnThisInstance.current) {
              if (query?.redirect) {
                router.replace(query.redirect as string);
              } else {
                if (user?.role === 'ADMIN') {
                  router.replace(
                    `${ADMIN_ROUTE}?redirect=${router.asPath}`,
                    `${ADMIN_ROUTE}`
                  );
                } else {
                  router.replace(USER_ROUTE);
                }
              }
            }
          } else if (user?.role === 'USER') {
            if (routeRole === 'admin') {
              router.replace(USER_ROUTE);
            }
          }
          if (user?.role === 'ADMIN') {
            if (routeRole === 'user') {
              router.replace(ADMIN_ROUTE);
            }
          }
        } else {
          if (
            routeRole !== 'public' &&
            routeRole !== 'optional' &&
            routeRole !== 'admin' &&
            routeRole !== 'user'
          ) {
            router.replace(`${LOGIN_ROUTE}?redirect=${router.asPath}`);
          } else {
            if (
              routeRole !== 'public' &&
              routeRole !== 'optional' &&
              routeRole !== 'admin' &&
              routeRole !== 'user'
            ) {
              router.replace(`${LOGIN_ROUTE}?redirect=${router.asPath}`);
            } else if (routeRole === 'admin' || routeRole === 'user') {
              router.replace(`${LOGIN_ROUTE}?redirect=${router.asPath}`);
            }
          }
        }
      };

      if (!isLoading) {
        Redirect();
      }
    }, [isAuthenticated, isLoading, query, router, user]);

    if (
      (isLoading || !isAuthenticated) &&
      routeRole !== 'public' &&
      routeRole !== 'optional'
    ) {
      return <Loading />;
    }

    if (isAuthenticated) {
      if (routeRole === 'admin' && user?.role !== 'ADMIN') {
        return <Forbidden />;
      }
      if (routeRole === 'user' && user?.role !== 'USER') {
        return <Forbidden />;
      }
    }

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
