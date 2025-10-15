import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("introduction", "routes/introduction.tsx"),
  route("guide", "routes/Guide.tsx"),
  route("guppy", "routes/guppy.tsx"),
  route("goldfish", "routes/goldfish.tsx"),
  route("platy", "routes/platy.tsx"),
  route("betta", "routes/betta.tsx"),
  route("molly", "routes/molly.tsx"),
  route("tetra", "routes/tetra.tsx"),
  route("zebra", "routes/zebra.tsx"),
  route("ai", "routes/ai.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
