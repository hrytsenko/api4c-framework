---
title: Guides
description: What to include in API guides.
sidebar:
  order: 1
---

## Intent

Guides collect the decisions that the [consistency](/api4c-framework/pillars/consistency/) pillar relies on.

## Content

Describe each decision with the following attributes:

- **Identifier** — a stable key that rulesets and reviews refer to.
- **Title** — a one-line statement of the decision.
- **Severity** — the requirement level, marked with [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119) keywords, which rulesets map to linter severities.
- **Rationale** — the reasons behind the decision, so that teams can apply it to cases the guide does not cover.

### Protocols

Define how clients call APIs and how APIs respond.

Decide on an API **style** for each kind of interaction. Consider [REST](https://www.openapis.org/) as default, and other styles only where REST falls short: [GraphQL](https://graphql.org/) for client-shaped data fetching, [gRPC](https://grpc.io/) for high-throughput, low-latency calls, WebSocket ([RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)) for bidirectional streaming, and [webhooks](https://www.standardwebhooks.com/) for event notifications.

Decide on how APIs model **resources** and address them in paths. Consider plural nouns for collections, and nesting only for resources that cannot exist without their parent, such as `/orders/{order_id}/items`.

Decide on how **operations** map to methods, including partial updates and actions beyond CRUD. Consider PATCH with [RFC 7396](https://datatracker.ietf.org/doc/html/rfc7396) merge patches for partial updates, where `null` clears a field and omission leaves it unchanged, and POST for actions. Consider [idempotency keys](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/) for retries of unsafe operations, and [RFC 9110](https://datatracker.ietf.org/doc/html/rfc9110#section-13) entity tags for conditional ones.

Decide on **permissions** that operations require and security schemes that grant them. Consider scopes named after resources and access levels, such as `orders:read`, in OAuth 2.0 ([RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)) bearer tokens.

Decide on standard and custom **headers**. Consider standard headers for cross-cutting concerns, such as [rate limiting](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/) and [tracing](https://www.w3.org/TR/trace-context/), and custom names without the `X-` prefix ([RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648)).

Decide on **statuses** for synchronous and asynchronous operations, request validation, domain rules, access control, and server errors. Consider a small set of statuses that clients handle generically, and convey specifics in errors rather than in rarely used statuses.

Examples: [Google: Resource names](https://google.aip.dev/122), [Microsoft: HTTP request/response pattern](https://github.com/microsoft/api-guidelines/blob/vNext/azure/Guidelines.md#http-request--response-pattern).

### Messages

Define how APIs represent data in requests and responses.

Decide on patterns and case styles for **names** of operations, path segments, parameters, headers, and fields. Consider kebab case for path segments, and snake case for fields and parameters. Consider a glossary of known names that separates domain-agnostic ones, such as `created_at`, from domain-specific ones.

Decide on canonical **formats** for timestamps, durations, currencies, countries, identifiers, and enumerations. Consider [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) timestamps, [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) durations, [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html) currency codes, [ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html) country codes, and [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562) UUIDs. Consider strings for enumerations, and expect clients to tolerate values added later.

Decide on a format for **errors** that clients can handle generically. Consider [RFC 9457](https://datatracker.ietf.org/doc/html/rfc9457) problem details, with a type that identifies the error, a human-readable detail, and extensions for specifics, such as invalid fields.

Decide on **links** for navigation, such as pagination and self-references. Consider plain objects with an `href` and [RFC 8288](https://datatracker.ietf.org/doc/html/rfc8288) relation types over the complexity of HATEOAS.

Examples: [Zalando: Data formats](https://opensource.zalando.com/restful-api-guidelines/#238), [Adidas: Problem Detail](https://adidas.gitbook.io/api-guidelines/rest-api-guidelines/message/error-reporting).

### Patterns

Define recurring interactions that build on protocols and messages.

Decide on capabilities for **queries**, including filtering, sorting, pagination, and projection. Consider cursor-based pagination as default, since offsets skip or repeat items when collections change. Consider plain query parameters for filtering and sorting over a query language.

Decide on semantics for batch, long-running, and upload **tasks**. Consider per-item results for batches, so that clients retry only failed items. Consider task resources that clients poll for status and results of long-running tasks. Consider multipart transfers for uploads of large payloads.

Examples: [Zalando: Batch & Bulk requests](https://opensource.zalando.com/restful-api-guidelines/#152), [Adidas: Long running tasks](https://adidas.gitbook.io/api-guidelines/rest-api-guidelines/execution/long-running-tasks).
