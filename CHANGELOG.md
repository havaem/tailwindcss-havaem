# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

-   Nothing yet!

## [0.2.0] - 2026-11-26

-   Add `hocus-visible` variant (`:hover`, `:focus-visible`)
-   `absolute-center*` use the `translate` property instead of `transform`, so `rotate-*`/`scale-*` no longer break the centering

## [0.1.1] - 2026-11-26

-   Support Tailwind CSS v3 again (peer `tailwindcss >=3.0.0`)
-   Restore `not-first`, `not-last` and `inverted-colors` variants for Tailwind v3 (identical to the v4.1+ built-ins)

## [0.1.0] - 2026-11-26

-   **Breaking:** require Tailwind CSS v4.1+ (load with `@plugin`); Tailwind v3 users stay on 0.0.8
-   **Breaking:** remove `not-first`, `not-last` and `inverted-colors` variants (built into Tailwind CSS v4.1+)
-   Publish only `src/`, fix plugin options type

## [0.0.3] - 2024-05-08

-   Clean code
-   Add new utilities
-   Update dependencies

## [0.0.4] - 2024-05-08

-   Fix bug
