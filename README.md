# API4C Framework

A framework for governing APIs.

Published at [API4C Framework](https://hrytsenko.github.io/api4c-framework/).

## Content

```text
src/content/docs/
  index.mdx        # home
  pillars/
    index.md       # pillars overview
    <pillar>.md    # pillar page
  documents/
    index.md       # documents overview
    <document>.md  # document page
  practices/
    index.md       # practices overview
    <practice>.md  # practice page
```

- **Pillar:** An area of API governance that says what to govern and why.
- **Document:** Decisions that APIs share, recorded to maintain a pillar.
- **Practice:** Approaches that support one or more pillars in a particular way.

## Develop

```sh
npm install
npm run dev      # run at http://localhost:4321/api4c-framework/
lychee .         # check links
vale .           # check prose
```
