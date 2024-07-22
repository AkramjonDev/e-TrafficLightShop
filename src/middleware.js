import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  defaultLocale: "uz",
  locales,
  localePrefix,
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/images|favicon.ico|favicon.svg|images/icons|manifest).*)",
  ],
};
