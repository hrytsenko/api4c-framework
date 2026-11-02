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

- **Unclear expectations** occur when teams neglect to define how APIs change and how long versions live. This delays adoption due to uncertainty about future changes.
- **Disrupted integrations** occur when teams neglect to automate compatibility checks. This increases customer disruption due to incompatible changes.

## Actions

- Publish **policies** to define version formats, breaking changes, and lifecycle stages.
- Adopt **detectors** to check changes against the policies and produce changelogs.
