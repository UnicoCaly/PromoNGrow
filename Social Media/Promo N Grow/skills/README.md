# Promo N Grow — Custom Claude Skills

Two skills built specifically for PNG. They encode the visual system, voice, pillar mix, Canva rules, and the "shop-foreman-turned-editor" voice so every future Claude session stays on-brand without you having to re-explain.

## What's here

**png-creative-director/** — The visual side. Triggers on any design, layout, carousel, Canva, or graphic task. Enforces palette, typography, composition, Canva brand-kit rules, and the "never touch VCC" boundary.

**png-social-marketer/** — The copy side. Triggers on any caption, hook, script, email, LinkedIn post, or repurposed review. Enforces voice, pillar mix, hook patterns, and CTA discipline.

Each skill has a `SKILL.md` (the main instructions Claude loads when triggered) and a `references/` folder with deeper detail Claude reads only when needed.

## Two ways to use them

### Option A — formal install (recommended once you're ready)

Copy both folders into your global Claude skills directory. On most setups that's `~/.claude/skills/` (Mac/Linux) or equivalent. After copying:

```
~/.claude/skills/png-creative-director/
~/.claude/skills/png-social-marketer/
```

Restart your Claude session. The skills will appear in `available_skills` automatically and trigger on the phrases listed in their frontmatter `description`.

### Option B — load them manually in a session (works right now)

At the start of a session, tell Claude:

> "Load the PNG Creative Director skill at `/Users/[you]/[path]/Promo N Grow/skills/png-creative-director/SKILL.md` and the PNG Social Marketer skill at `.../png-social-marketer/SKILL.md`. Use them for this session."

Claude will read both SKILL.md files and follow them. Works without any formal install.

## How they work together

Most real tasks will use both:

- You ask for a carousel → Creative Director handles the visual, Social Marketer writes the copy for each slide.
- You ask to repurpose a Judge.me review → Social Marketer drafts the caption, Creative Director designs the quote slide.
- You ask for a promo push → Social Marketer writes the offer copy, Creative Director builds the visual.

They reference the same source files (auto-memory, the Blueprint, the Month 1 calendar) so they stay aligned.

## Editing the skills

As the business evolves, edit the SKILL.md files directly. Things to keep updated:

- **png-creative-director/SKILL.md** — palette tweaks, new photo direction once you drop your own photos in, any new template specs.
- **png-social-marketer/SKILL.md** — new hook patterns that perform well, CTA library additions, shifts in pillar mix, new recurring series.
- **references/** — the deeper swap-in content; safe to rewrite whenever the system evolves.

## What they won't do

- They're not a replacement for the Blueprint document — they sit on top of it and point to it.
- They don't schedule posts for you (Meta Business Suite handles that).
- They don't pull reviews automatically from Judge.me (you'll need Zapier/Make for that layer — both skills are ready for that pipeline once it's built).
