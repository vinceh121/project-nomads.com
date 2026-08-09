import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((ctx, next) => {
  if (ctx.currentLocale && ctx.currentLocale !== "en") {
    next(ctx.url.pathname.substring(ctx.currentLocale?.length + 1));

    return;
  }

  next();
});
