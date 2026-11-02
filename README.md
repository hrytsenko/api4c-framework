# API4C Framework

A framework for governing APIs.

Published at [hrytsenko.github.io/api4c-framework](https://hrytsenko.github.io/api4c-framework/).

## Content

```text
src/content/docs/
  index.mdx                  # landing page
  pillars/                   # the pillars of API governance
    index.md                 # section overview
    <pillar>.md
  documents/                 # the documents that maintain the pillars
    index.md                 # section overview
    <document>.md
  practices/                 # the practices that support the pillars
    index.md                 # section overview
    <practice>.md
```

Pages follow the templates below; [AGENTS.md](AGENTS.md) gives the rules behind them.

A pillar page:

```md
---
title: Pillar
description: Pillar aims for ...
sidebar:
  order: 1           # position within the section
---

> _Law._
>
> — Author's law

Pillar aims for ... It relies on [documents](/api4c-framework/documents/...) to ... and tools to ...

## Concerns

- **Name** occurs when teams neglect to ... This delays ... due to ...
- **Name** occurs when teams neglect to ... This increases ... due to ...

## Actions

- Publish **documents** to achieve a result.
- Adopt **tools** to achieve a result.
```

A document page:

```md
---
title: Document
description: What to include in ...
sidebar:
  order: 1
---

## Intent

Documents define ... that the [pillar](/api4c-framework/pillars/...) pillar relies on.

## Content

Guidance that applies to all parts, if any.

### Part

Guidance.

Examples: [Vendor: Title](https://...), [Vendor: Title](https://...).
```

A practice page:

```md
---
title: Practice
description: Achieve a result ...
sidebar:
  order: 1
---

## Intent

Achieve a result by ... that ..., at the expense of ... It supports the [pillar](/api4c-framework/pillars/...) pillar: how the practice supports it.

## Approach

- Take a step that achieves a result on its own.
- Take the next step that builds on that result.

## Examples

- [Vendor: Title](https://...)
```

## Develop

```sh
npm install
npm run dev      # http://localhost:4321/api4c-framework/
npm run build    # output in dist/
```

Pushing to `main` deploys the site via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
