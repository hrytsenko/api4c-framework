---
title: Continuity
description: Continuity aims for the compatibility of changes.
sidebar:
  order: 3
---

> _Be conservative in what you do, be liberal in what you accept from others._
>
> — Postel's law

Continuity aims for the compatibility of changes. It relies on [policies](/api4c-framework/documents/policies/) to define expectations and detectors to recognize changes.

## Concerns

- **Rushed migrations** stem from leaving versioning, compatibility, and lifecycle undefined, so consumers cannot tell which changes will break them or how long versions will live, and get caught off guard when versions retire.
- **Silent breakages** stem from spot-checking compatibility by hand, so incompatible changes ship without a version bump or a changelog, leaving consumers to debug failures on their own.

## Actions

- Publish **policies** to define version formats, breaking changes, and lifecycle stages.
- Adopt **detectors** to check changes against the policies and produce changelogs.
