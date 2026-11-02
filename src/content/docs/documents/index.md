---
title: Documents
description: The documents that record the decisions APIs share for one audience.
sidebar:
  label: Overview
  order: 0
---

The documents record the decisions that APIs share, so that designers apply them instead of deciding again, and consumers learn them once instead of for each API:

- **[Guides](/api4c-framework/documents/guides/)** record the decisions on how APIs look, which the [consistency](/api4c-framework/pillars/consistency/) pillar relies on.
- **[Policies](/api4c-framework/documents/policies/)** define the expectations on how APIs change and how long versions live, which the [continuity](/api4c-framework/pillars/continuity/) pillar relies on.

Publish the documents for each independent audience that consumes APIs in a certain style. The audience (external customers, partners, internal teams) shapes expectations on stability and support; the style (REST, GraphQL, gRPC) shapes decisions on how APIs look and what counts as a breaking change. For example:

- REST and GraphQL APIs for external customers may need separate documents due to different styles: GraphQL APIs report errors in the response body and typically evolve without versions.
- REST APIs for external customers and for internal integration may need separate documents due to different audiences: internal consumers can coordinate migrations and accept shorter deprecation periods.
