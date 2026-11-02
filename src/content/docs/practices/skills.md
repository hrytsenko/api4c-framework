---
title: Skills
description: Detect deviations from guides and policies with skills.
sidebar:
  order: 1
---

## Intent

Detect deviations from guides and policies with skills, especially before linters and detectors have rich rulesets or where they fall short, at the expense of determinism and inference costs. It supports the [consistency](/api4c-framework/pillars/consistency/) pillar: skills check specifications against decisions that rulesets cannot encode, such as the clarity of names. It supports the [continuity](/api4c-framework/pillars/continuity/) pillar: skills check changes against expectations that detectors cannot see, such as a field that changes its unit while its schema stays the same.

## Approach

- Create or adopt **skills** that check specifications against the [guides](/api4c-framework/documents/guides/) and changes against the [policies](/api4c-framework/documents/policies/). Let skills read the guides and policies from their authoritative place instead of bundling copies, so checks follow every update.
- Move checks that code can express from skills to rulesets for linters and detectors, to restore determinism and reduce costs. Use agents to draft rulesets, so teams review rules instead of learning rule languages. Refocus skills on checks that need judgment, such as the clarity of names and descriptions or changes in semantics.

## Examples

- [Microsoft: Azure API Review](https://github.com/Azure/azure-rest-api-specs/tree/main/.github/skills/azure-api-review)
- [GitHub: Protobuf and gRPC API Review](https://github.com/github/awesome-copilot/tree/main/skills/protobuf-grpc-api-review)
