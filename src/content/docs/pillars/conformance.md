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

- **Broken expectations** occur when teams neglect to verify what consumers rely on. This increases customer disruption due to changes in behaviors that consumers rely on.
- **Unintended integrations** occur when teams neglect to verify behaviors against specifications. This increases customer disruption due to dependencies on behaviors outside the contract.

## Actions

- Publish **tests** to verify behaviors that consumers rely on.
- Adopt **proxies** to validate requests and responses against specifications.
- Adopt **fuzzers** to test behaviors against specifications with generated requests.
