---
title: Consistency
description: Consistency aims for the replicability of decisions.
sidebar:
  order: 2
---

> _If there is a wrong way to do something, then someone will do it._
>
> — Murphy's law

Consistency aims for the replicability of decisions. It relies on [guides](/api4c-framework/documents/guides/) to collect known decisions, rulesets to encode them, and linters to enforce them.

## Concerns

- **Vanished decisions** stem from settling design questions in reviews and chats without recording the outcome, so teams debate them again for each new API and answer them differently, delaying design and integration.
- **Clogged reviews** stem from checking conventions by hand, so violations surface only in reviews, each reviewer catches different ones, and design questions wait for later rounds, delaying feedback.

## Actions

- Publish **guides** to systemize design decisions.
- Publish **rulesets** to encode the guides into automated checks.
- Adopt **linters** to check specifications against the rulesets locally and in pipelines.
