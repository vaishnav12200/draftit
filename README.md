# DraftIt

DraftIt is a cinematic screenplay writing studio for desktop browsers (PWA-first, later Tauri/Electron). It should feel like a filmmaker's writing room: dark, immersive, calm, and focused.

## Product goals

- Keep the writer immersed. If a UI element does not help writing, it should not exist.
- Make screenplay formatting feel natural and automatic.
- Stay local-first. Sync can come later.

## Tech stack

- SvelteKit
- Tailwind CSS + custom CSS variables
- Fonts: Geist (UI), DM Serif Display (headings), Courier Prime (screenplay)
- Icons: Tabler Icons
- Storage: localStorage / IndexedDB (local-first)
- Export: PDF (jsPDF), Fountain, DOCX
- PWA: installable, offline-first

## Design system

### Colors

- Background: #0b0b0d, #111116, #17171e, #1d1d26
- Surface: #23232e, #2a2a38
- Border: #2a2a38, #3a3a50
- Text: #eeeef5 (primary), #9898b0 (secondary), #52526a (muted)
- Accent Orange: #e8621a, #f07a42, #a03c08
- Gold: #c8a44a, #f0cc78
- Blue: #3a78c9

### Typography

- UI labels, buttons, body: Geist
- Large headings, titles, script titles: DM Serif Display
- Screenplay text: Courier Prime 13.5px, line-height 1.88
- Never mix serif into functional UI elements

### Spacing and radius

- 8px base grid
- Border radius: 8px (small), 12px (cards), 14px (large cards)

### Navigation

- Hamburger menu top-left
- Slide-in 240px left sidebar panel with overlay + backdrop blur
- Active item: orange left border highlight
- Sidebar content: logo, nav items, user profile at bottom

## Pages and components

### Landing (/)

Two-column layout: left hero, right live preview panel.

- Left: logo badge, tagline, serif headline, subtitle, CTA buttons (New Script, Open Draft, Continue Writing)
- Right: dark panel with live screenplay animation, blinking cursor, and three mini scene cards
- Subtle radial orange glow on left background

### Dashboard (/dashboard)

- Topbar: logo, global search, bell, settings, avatar
- Greeting: time-based greeting, date, script count
- Recent Projects: responsive grid of project cards with genre tag, serif title, last edited, progress bar, scene/page/character counts
- Card hover: lift + top color border reveal (orange/gold/blue by project)
- Quick Continue strip
- Templates row (Feature Film, Short Film, Web Series, One-Location Thriller, Anthology Episode)
- New Script card with dashed border and plus icon

### Script Workspace (/workspace/[id])

- Topbar: logo, title, autosave dot (green pulse), Saved label, export, scene board, settings, avatar
- Left sidebar (218px): navigation, scene list grouped by Act I/II/III, writing mode toggle
- Center editor: toolbar with block type buttons and Focus Mode
- Editor page: 560px wide, Courier Prime, proper screenplay formatting, active line glow, blinking orange cursor
- Right sidebar (256px): Scene/Chars/Notes/AI tabs with scene metadata, tags, notes, characters, beat summary, ambient sounds

Focus Mode:

- Hides sidebars and toolbars
- Expands page to 680px
- Escape or button to exit

### Scene Board (/workspace/[id]/board)

- Horizontal columns: Act I, Act II, Act III
- Cards: color dot, scene number, title, location with day/night icon, character avatars, beat label
- Current writing scene: orange glow + "Writing Now" badge
- Drag and drop between acts
- Color coding: orange (main plot), gold (emotional), blue (tension/action), red (climax)

### Character Studio (/characters/[id])

- Left panel: character list with colored avatars and roles; New Character button
- Right panel: large avatar, serif name, role badge, appearance counts
- Sections: Description, Traits, Sample Dialogue, Relationships
- Dividers and uppercase section labels

## Screenplay auto-formatting

- Typing INT. or EXT. auto-detects Scene Heading (ALL CAPS + bold)
- Tab cycles block types: Scene Heading -> Action -> Character -> Dialogue -> Parenthetical
- Enter after Character cue jumps to Dialogue
- Enter after Dialogue returns to Action
- Scene Heading format: INT./EXT. LOCATION -- TIME (uppercase)
- Character cue: centered, uppercase, 150px left indent
- Parenthetical: 110px left indent, lowercase in brackets
- Dialogue: 90px left indent, 50px right indent
- Transition: right-aligned, uppercase (e.g. CUT TO:)

## Guided Scene Builder (Mode 2)

Step-by-step form:

- Location (INT./EXT. + place name)
- Time of day (DAY / NIGHT / DAWN / DUSK / CONTINUOUS)
- Characters present
- What happens (brief description)
- Dialogue? (yes/no)
- Conflict or tension

On submit, generate a properly formatted screenplay block for that scene.

## Data models

Script

- id, title, genre, createdAt, updatedAt
- scenes: Scene[]
- characters: Character[]

Scene

- id, number, title, location, timeOfDay
- act: 1 | 2 | 3
- colorTag, beat, blocks: Block[]
- charactersPresent: string[]
- notes: string

Block

- id
- type: scene-heading | action | character | parenthetical | dialogue | transition
- content: string

Character

- id, name, role
- avatarColor, description, traits: string[]
- relationships: { characterId, type }[]
- sampleDialogue: string[]

## Writing modes

- Free Write: full keyboard control, auto-formatting
- Guided: scene builder form, generates screenplay blocks
- Focus Mode: hides UI, optional ambient sounds

## Ambient sounds

- Rain
- Cafe
- Keys (typewriter)

Multiple sounds can be active. Use Web Audio API or royalty-free audio files.

## Multi-language support

- Supported: English, Malayalam, Tamil, Kannada, Telugu, Hindi
- Transliteration: romanized input converts to native script
- Suggested library: indic-transliteration or Google Input Tools API
- Language selector in Settings and editor toolbar

## Export system

- PDF: jsPDF, screenplay margins, Courier Prime 12pt, page numbering, title page
- Fountain: plain text mapping per block type
- DOCX: docx.js with screenplay formatting

## Settings

- Screenplay font size: 12pt / 13pt / 14pt
- Page width: Narrow / Standard / Wide
- Theme: Dark only
- Typing sounds: on/off
- Autosave interval: 30s / 1min / 5min
- Language and transliteration
- Keyboard shortcuts reference

## Mobile experience

- Desktop-first
- On mobile (< 768px): read-only script viewer
- Allow quick notes and scene ideas
- Dashboard and project list remain usable

## Keyboard shortcuts

- F11: Focus Mode
- Tab: cycle block types
- Cmd/Ctrl + S: manual save
- Cmd/Ctrl + Enter: new scene
- Cmd/Ctrl + /: toggle sidebar
- Cmd/Ctrl + E: export menu
- Escape: exit Focus Mode / close panels

## Future features (not built yet)

- Real-time collaboration
- AI scene assistant
- AI story analyzer
- AI character memory
- Cloud sync
- Version history
- Producer comments / annotations
- Tension graph / emotional arc timeline

## Development

Install dependencies:

```sh
pnpm install
```

Run dev server:

```sh
pnpm dev
```

Build:

```sh
pnpm build
```

Preview:

```sh
pnpm preview
```
