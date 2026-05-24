import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";

const lazy_route = (importFn: () => Promise<{ [key: string]: React.ComponentType }>, name: string) => {
  const Component = lazy(() => importFn().then((m) => ({ default: m[name] })));
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export const router = createHashRouter([
  {
    path: "/",
    element: lazy_route(() => import("../pages/Introduccion"), "Introduccion"),
  },
  {
    path: "/cuenta",
    element: lazy_route(() => import("../pages/Cuenta"), "Cuenta"),
  },
  {
    path: "/iam",
    element: lazy_route(() => import("../pages/Iam"), "Iam"),
  },
  {
    path: "/ec2",
    element: lazy_route(() => import("../pages/Ec2"), "Ec2"),
  },
  {
    path: "/vpc",
    element: lazy_route(() => import("../pages/Vpc"), "Vpc"),
  },
  {
    path: "/s3",
    element: lazy_route(() => import("../pages/S3"), "S3"),
  },
  {
    path: "/rds",
    element: lazy_route(() => import("../pages/Rds"), "Rds"),
  },
  {
    path: "/lambda",
    element: lazy_route(() => import("../pages/Lambda"), "Lambda"),
  },
  {
    path: "/api-gateway",
    element: lazy_route(() => import("../pages/ApiGateway"), "ApiGateway"),
  },
  {
    path: "/cloudformation",
    element: lazy_route(() => import("../pages/Cloudformation"), "Cloudformation"),
  },
  {
    path: "/cloudwatch",
    element: lazy_route(() => import("../pages/Cloudwatch"), "Cloudwatch"),
  },
  {
    path: "/deploy",
    element: lazy_route(() => import("../pages/Deploy"), "Deploy"),
  },
  {
    path: "/*",
    element: <h1>404 - Página no encontrada</h1>,
  },
]);
