---
title: Hand-maintain V2List/V2ListPromise/V2SearchResult/V2SearchResultPromise namespace exports
semver_level: patch
---

These four type aliases in `stripe.cjs.node.ts` were generated unconditionally by sdk-codegen's Node generator, duplicating `V2SearchResult`/`V2SearchResultPromise`'s existing hand-written aliases in the same file and breaking custom-objects Node SDK generation with a TypeScript duplicate-identifier error. They're core infrastructure types, not resources derived from the OpenAPI spec, so they now live alongside `ApiList`/`ApiListPromise` in the hand-maintained section instead. No change to the public type surface.
