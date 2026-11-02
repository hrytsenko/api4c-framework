---
title: Policies
description: What to include in API policies.
sidebar:
  order: 2
---

## Intent

Policies define the expectations on possible API changes and their adoption that the [continuity](/api4c-framework/pillars/continuity/) pillar relies on.

## Content

### Versioning

Adopt a versioning scheme and identifier. By default, use a path-based scheme and semantic versioning. Define triggers to update versions. By default, release a new version on any breaking change.

Consider the following versioning schemes:

- **Path-based**

  ```text
  --request GET https://example.com/v1/resource
  ```

  This scheme simplifies routing and caching but couples resource identity to versions.

- **Query-based**

  ```text
  --request GET https://example.com/resource?api-version=2024-04-01
  ```

  This scheme keeps resource identity stable but mixes versions with query parameters.

- **Header-based**

  ```text
  --header "API-Version: 2024-04-01"
  ```

  This scheme keeps resource identity stable but requires header-aware caching.

Consider the following versioning identifiers:

- **[Semantic Versioning](https://semver.org/)**

  ```text
  v{major} → v1
  {major}.{minor} → 7.1
  ```

  This identifier is the default and usually exposes only major versions.

- **[Calendar Versioning](https://calver.org/)**

  ```text
  {YYYY-MM} → 2024-04
  {YYYY-MM-DD} → 2024-04-01
  ```

  This identifier is typical for APIs with scheduled release windows.

Examples: [Google: Versioning](https://google.aip.dev/185), [Stripe: Versioning](https://stripe.com/docs/api/versioning).

### Compatibility

Define breaking and non-breaking changes, focusing on operations, headers, parameters, and fields. Expect consumers to be [tolerant readers](https://martinfowler.com/bliki/TolerantReader.html).

Consider the following changes:

- **Breaking changes**

  ```text
  Remove or rename an operation.
  Add a required request parameter, header, or field without a default value.
  Remove or rename a request parameter, header, or field.
  Remove or rename a response header or field, or make it optional or nullable.
  Change a data type, or reduce a value space.
  ```

- **Non-breaking changes**

  ```text
  Add an operation.
  Add an optional request parameter, header, or field.
  Add a required request parameter, header, or field with a default value.
  Add a response header or field.
  Extend a value space.
  ```

Examples: [Google: Backward Compatibility](https://google.aip.dev/180), [LinkedIn: Breaking Change Policy](https://learn.microsoft.com/en-us/linkedin/shared/breaking-change-policy).

### Lifecycle

Define lifecycle stages. Focus on stability and audience.

Consider the following lifecycle stages:

- **Experimental** — ready to assess but can receive breaking changes.
- **Production** — ready to adopt and can receive only non-breaking changes.
- **Deprecation** — on hold but retains support until a declared sunset date.
- **Retirement** — withdrawn and no longer usable.

Mark deprecated elements in specifications, so that [detectors](/api4c-framework/pillars/continuity/) can check removals against sunset dates. Communicate deprecation and sunset timelines to consumers using the standard Deprecation ([RFC 9745](https://datatracker.ietf.org/doc/html/rfc9745)) and Sunset ([RFC 8594](https://datatracker.ietf.org/doc/html/rfc8594)) headers.

Examples: [Google: Stability Levels](https://google.aip.dev/181), [Kubernetes: Deprecation Policy](https://kubernetes.io/docs/reference/using-api/deprecation-policy/).
