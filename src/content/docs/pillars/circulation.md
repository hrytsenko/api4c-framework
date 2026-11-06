---
title: Circulation
description: Circulation aims for the discoverability of contracts.
sidebar:
  order: 1
---

> _A man with a watch knows what time it is. A man with two watches is never sure._
>
> — Segal's law

Circulation aims for the discoverability of contracts. It relies on specifications to define contracts, portals to expose contracts to people, and registries to serve specifications to machines.

## Concerns

- **Hidden contracts** stem from keeping contracts in code or in team repositories, with no place to search them or see who owns them, so other teams read the code, ask around, or rebuild APIs that already exist, delaying integration.
- **Split brain** stems from copying specifications across repositories and pipelines and updating them in place, so tools and runtimes consume conflicting copies of the same version, and teams debug mismatches that no change explains, delaying development.

## Actions

- Publish **specifications** to define contracts independently of code.
- Adopt **portals** to expose contracts to people, alongside the services and teams that own them.
- Adopt **registries** to serve immutable versions of specifications to machines from one authoritative place.
