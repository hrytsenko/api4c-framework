# Agent instructions

See [README.md](README.md) for the content layout, the page templates, and how to build the site.

## Vision

The framework is for experienced engineers, senior and above, who build API governance in their organizations. It offers a distilled and opinionated view that serves as a starting point rather than a complete reference. As a distilled view, it gives a concise overview and skips basics that its readers already know. As an opinionated view, it makes a decision where the industry offers several options, rather than listing them all. Still, it follows the industry: it includes approaches and tools that major companies adopt and document, and leaves out those the industry has abandoned or ignored, often for their complexity.

## Structure

The framework has pillars, documents, and practices. Pillars say what to govern and why, documents maintain the pillars by recording the decisions that APIs share, and practices support the pillars in a particular way. A document is a child of the pillar it maintains, and a practice is a child of each pillar it supports. Each page states its intent before its content; a child also says how it relates to each parent and links back to it. A pillar links to its documents only in its intro.

A pillar is an area of API governance. A pillar page introduces concepts rather than examples: it names no formats, tools, or vendors, and gives no references. It opens with a law that motivates it, then says what the pillar aims for and what it relies on. It then lists at least two concerns, followed by the actions that address them in the same order. Each action addresses exactly one concern; a concern may have several actions. A concern is one sentence that says what teams do or miss, how this plays out, and what it costs: delays for teams in the developer productivity pillars, disruption for customers in the customer satisfaction pillars. It keeps the reasoning that makes its actions necessary, and does not restate its name as its cause or cost. An action names one kind of document or one class of tools and the result it achieves. Fold a sentence that names neither into the action it qualifies. List documents first, then tools.

A document is what a pillar asks to publish. A document page has two sections: intent and content. The intent says what the document defines and which pillar relies on it. The content treats the document as one whole with parts: it gives guidance that applies to all parts, if any, followed by the parts, each with guidance followed by examples that highlight its key aspects.

A practice supports one or more pillars with some artifacts, and is named after these artifacts. A practice page opens with its intent, which says what to achieve and why, names its cost, and then says how the practice supports each of its pillars. It then covers its approach and examples. The approach lists steps in the order teams take them. Each step is self-contained: it achieves a result on its own, so teams can stop after any step and decide when to take the next one.
