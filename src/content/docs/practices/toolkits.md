---
title: Toolkits
description: Reduce consumer friction with toolkits.
sidebar:
  order: 3
---

## Intent

Reduce consumer friction with toolkits that let consumers integrate in their own languages and platforms and that absorb API changes behind stable interfaces, at the expense of supporting each language and platform. It supports the [continuity](/api4c-framework/pillars/continuity/) pillar: APIs can change without disrupting integrations, since consumers take toolkit updates without changing their code and adopt new features when they need them. It supports the [conformance](/api4c-framework/pillars/conformance/) pillar: integrations rely less on behaviors outside the contract, since toolkits expose only what specifications describe.

## Approach

- Provide **SDKs** for applications and **CLIs** for agents and automations. Generate them from specifications: SDKs follow the conventions of each target language, and CLIs follow human-first design with machine-readable output. Deliver them through package managers, so consumers receive changes as routine dependency updates.
- Absorb API changes behind toolkit interfaces: handle protocol details (headers, statuses, authentication, retries) inside toolkits, and target the latest API version by default. Release absorbed changes as minor or patch versions, and reserve major versions for changes to toolkit interfaces.

## Examples

- [AWS: SDKs and Programming Toolkits](https://aws.amazon.com/developer/tools/)
- [Kubernetes: Client libraries](https://kubernetes.io/docs/reference/using-api/client-libraries/)
