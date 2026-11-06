---
title: Conformance
description: Conformance aims for the correctness of behaviors.
sidebar:
  order: 4
---

> _With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody._
>
> — Hyrum's law

Conformance aims for the correctness of behaviors. It relies on tests, proxies, and fuzzers to identify discrepancies.

## Concerns

- **Behavioral regressions** stem from checking that a specification stays compatible but not that the service still behaves as promised, so a change breaks a scenario that nobody tests, and consumers hit the failure in production.
- **Emergent contracts** stem from testing that services do what specifications promise but not that they do nothing more, so consumers come to rely on the extra behaviors, and providers break those consumers with changes they believe are safe.

## Actions

- Publish **tests** to verify that services behave as specifications promise, scenario by scenario.
- Adopt **proxies** to flag requests and responses that specifications do not describe.
- Adopt **fuzzers** to uncover behaviors outside specifications with generated requests.
