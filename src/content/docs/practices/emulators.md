---
title: Emulators
description: Enable exploration and testing of integrations with emulators.
sidebar:
  order: 2
---

## Intent

Enable exploration and testing of integrations with emulators that consumers run on demand, so they leave real integration to the end of their cycle, at the expense of keeping emulators faithful to real behaviors. Emulators replace shared test environments, which cost the most to maintain, yet are too slow for experiments and too unstable for tests. It supports the [continuity](/api4c-framework/pillars/continuity/) pillar: consumers verify a migration before they switch versions, since they run their tests against the emulator of the new version. It supports the [conformance](/api4c-framework/pillars/conformance/) pillar: consumers cannot come to rely on behaviors outside the contract, since emulators reproduce only what the contract describes and vary what it leaves open.

## Approach

- Generate stateless **mocks** from specifications and serve them locally and in portals, so consumers explore contracts and start integrating as soon as contracts are published. Vary what contracts leave open, such as the order of items and the presence of optional fields.
- Provide stateful **emulators** that consumers run locally and in CI, so they test multi-step workflows, webhooks, and failure handling. Let the teams that own APIs maintain emulators, verify them with the same tests as implementations, and release them for every API version. Leave to real integration only what emulators cannot reproduce, such as quotas and latency.

## Examples

- [Stripe: stripe-mock](https://github.com/stripe/stripe-mock)
- [Google: Firebase Local Emulator Suite](https://firebase.google.com/docs/emulator-suite)
