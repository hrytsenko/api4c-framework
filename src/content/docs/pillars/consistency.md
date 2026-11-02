---
title: Consistency
description: Consistency aims for the replicability of decisions.
sidebar:
  order: 2
---

> _If there is a wrong way to do something, then someone will do it._
>
> — Murphy's law

Consistency aims for the replicability of decisions. It relies on [guides](/api4c-framework/documents/guides/) to collect known decisions and linters to enforce them.

## Concerns

- **Vanished decisions** occur when teams neglect to document their decisions. This delays design due to repetitive decision-making.
- **Ignored reports** occur when teams neglect to tune analyzers to reduce false positives. This delays triage due to noisy reports.
- **Protracted reviews** occur when teams neglect to automate checks. This delays feedback due to tedious reviews.

## Actions

- Publish **guides** to systemize design decisions.
- Publish **rulesets** to encode the guides, and curate them to reduce false positives.
- Adopt **linters** to validate specifications against rulesets in the IDE and in pipelines.
