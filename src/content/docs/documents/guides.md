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
- **Severity** — the requirement level, marked with keywords ([RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119)), which rulesets map to linter severities.
- **Rationale** — the reasons behind the decision, so that teams can apply it to cases the guide does not cover.

### Protocols

Define how clients call APIs and how APIs respond.

Decide on an API **style**:

- [RESTful](https://www.openapis.org/) as default.
- [GraphQL](https://graphql.org/) for client-shaped data fetching.
- [gRPC](https://grpc.io/) for high-throughput, low-latency communication.
- [WebSocket](https://www.rfc-editor.org/info/rfc6455/) for bidirectional, real-time streaming.
- [Webhooks](https://www.standardwebhooks.com/) for asynchronous event notifications.

Decide on semantics for safe, unsafe, idempotent, and conditional **operations**.

Decide on standard **headers** and define conventions for custom ones. Consider operational headers for [idempotency keys](https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/), [rate limiting](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/), [tracing](https://www.w3.org/TR/trace-context/), [deprecation](https://datatracker.ietf.org/doc/html/rfc9745), and [sunset](https://datatracker.ietf.org/doc/html/rfc8594).

Decide on **statuses** for synchronous and asynchronous operations, request validation, access control, and server errors. Consider statuses for domain rules, conditional requests, and rate limits.

Examples: [Zalando: HTTP requests](https://opensource.zalando.com/restful-api-guidelines/#149), [Zalando: HTTP status codes](https://opensource.zalando.com/restful-api-guidelines/#243).

### Messages

Define how APIs represent data in requests and responses.

Decide on patterns for **names** of operations, parameters, headers, and fields. Decide on a case style for each kind of name, such as kebab case for path segments or snake case for fields and query parameters. Consider glossaries that define known names, and distinguish domain-specific names from domain-agnostic ones.

Decide on canonical **formats** for common types: timestamps ([RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)), durations ([ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)), currency ([ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)), country codes ([ISO 3166-1](https://www.iso.org/iso-3166-country-codes.html)), identifiers ([RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562)), enumerations, and measurement units. Consider null-versus-absent-field semantics: clarify whether `null` resets an attribute and omitting it leaves the value unchanged during partial updates.

Decide on a format for **errors**, and consider a generic one that includes type, instance, message (human-readable), and additional attributes. Assess [RFC 9457: Problem Details for HTTP APIs](https://datatracker.ietf.org/doc/html/rfc9457).

Decide on **links** for navigation, such as pagination and self-references. Consider simple links, such as an object with an `href`, over the complexity of HATEOAS. Assess relation types from [RFC 8288: Web Linking](https://datatracker.ietf.org/doc/html/rfc8288).

Examples: [Google: Resource names](https://google.aip.dev/122), [Zalando: Data formats](https://opensource.zalando.com/restful-api-guidelines/#238).

### Patterns

Define recurring interactions that build on protocols and messages.

Decide on capabilities for **queries**, including filtering, sorting, pagination, and projection (partial responses). Consider cursor-based pagination as default.

Decide on semantics for batch, long-running, and upload **tasks**.

Examples: [Zalando: Batch & Bulk requests](https://opensource.zalando.com/restful-api-guidelines/#152), [Adidas: Long running tasks](https://adidas.gitbook.io/api-guidelines/rest-api-guidelines/execution/long-running-tasks).
