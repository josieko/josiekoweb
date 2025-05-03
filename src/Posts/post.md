---
layout: "../../layouts/MarkdownPostLayout.astro"
title: "Browser Window Resizing"
pubDate: 2025-04-15
description: "How web browsers enforce restrictions on window resizing"
author: "Josie Ko"
image:
  url: "/blogLinear.png"
  alt: "Browser Window Resizing"
tags: ["astro", "blogging", "learning in public"]
---

# Browser Window Resizing

When working with minimum height or width requirements you might have noticed how you can't really go below the browser-defined minimum or set your own minimum.
For example, if you’re using Notion app, you can try it yourself by opening Notion in your browser and attempt to shrink the window to a really small size. Now try the same with their desktop app. See the difference?

This isn't a bug or random limitation - it’s for UX and security purposes.

## The Browser's Bouncer: Security First

Think of your browser as a really cautious bouncer at a club. It's not trying to ruin your fun; it's trying to keep you safe. When websites first became interactive, some clever folks figured out they could do nasty things with window manipulation - like creating tiny invisible windows for clickjacking, or positioning windows in ways that could trick you into clicking something you didn't mean to.

Browser makers responded by implementing strict rules about how windows can be sized and positioned. It's like setting up guardrails - you can still move around, but you can't accidentally drive off the cliff.

## The Desktop App Difference

Unlike opening websites or browser version of apps, desktop apps like the Electron-based versions of Linear and Notion have a different relationship with your operating system.

These are apps that you explicitly installed which is why they get more privileges than a random website you've just visited.

## What Does This Mean for Developers?

As a developer, you need to work with these limitations, not against them.

Keep in mind that the browser will automatically ensure windows stay visible on screen.
You can try to position a window offscreen, and the browser will move it back into view.
As mentioned in MDN docs, window features like position and size "will be corrected" if they would render any part of the window offscreen.

This means we need to be smarter about how we design our applications. Instead of fighting the browser's restrictions, embrace them by:

- Building responsive layouts that look good at any size
- Providing clear visual feedback when users hit minimum size limits
- Using internal scrollable containers when content doesn't fit (don’t forget there’s both vertical and horizontal scrolls)

By preventing extreme or custom browser window manipulations, browsers help making sure users don’t get themselves into an unusable state.
