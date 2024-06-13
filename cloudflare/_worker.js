function apiHandler(pathname) {
  switch (pathname) {
    case "/api/hello":
      return new Response("Hello, world!");
    case "/api/goodbye":
      return new Response("Goodbye, world!");
    default:
      return new Response("Not found", { status: 404 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) return apiHandler(url.pathname);

    return env.ASSETS.fetch(request);
  },
};
