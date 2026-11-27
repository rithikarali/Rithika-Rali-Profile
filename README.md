# Rithika Rali — Profile Website

My personal profile site, hosted free with GitHub Pages.

Live site (after Pages is turned on): **https://rithikarali.github.io/Rithika-Rali-Profile/**

## How to update the site

All the words on the site live in one file: **`_data/profile.yml`**.
You don't need to touch any HTML or CSS.

1. On GitHub, open `_data/profile.yml` and click the ✏️ pencil (Edit) button.
2. Make your change (see examples below).
3. Click **Commit changes**. The live site updates in about a minute.

### Add a new experience

Find the section it belongs in, copy an existing item, paste it underneath, and edit it:

```yaml
      - title: Summer Tutor
        org: Best Brains
        role: Instructor
        date: Summer 2027
        description: >
          One or two sentences about what you did and what you learned.
        link: https://example.com          # optional
        link_text: See more                # optional
        tags: [Teaching, Math]
```

Only `title` is required. Leave out any line you don't need.

### Add a new section

Copy a whole section block (from `- title:` down through its items) and give it a new title, e.g. `Work Experience` or `Languages`.

### Add a skill or award

Add a new line starting with `- ` under `skills:` or `awards:`.

### Change the profile photo

Upload a new square photo into `assets/img/` (Add file → Upload files), then change the `photo:` line at the top of `profile.yml` to its name, e.g. `photo: assets/img/new-photo.jpg`.

### Update the big numbers

The `stats:` list in `profile.yml` controls the numbers under the About text (they count up when you scroll to them). `value` must be a number; `suffix` (like `+`) is optional.

### Section icons

Each section has an `icon:` line. Choices: `flask`, `users`, `heart`, `star`, `music`, `book`, `briefcase`, `globe`, `award`, `sparkles`.

### Add your email or LinkedIn

Fill in the `contact:` fields at the top. Empty ones are hidden.

### Tips

- **Indentation matters.** Use spaces (not tabs) and line things up like the items around them.
- If the site stops updating after an edit, check the **Actions** tab on GitHub; a red ✗ usually means an indentation mistake in `profile.yml`.

## File guide

| File | What it is |
| --- | --- |
| `_data/profile.yml` | All site content (edit this) |
| `index.html` | Page layout (rarely needs changes) |
| `assets/img/` | Photos |
| `assets/main.js` | Animations (scroll reveal, count-up numbers, nav highlight) |
| `_includes/icon.html` | The icon set |
| `assets/style.css` | Colors and fonts |
| `_config.yml` | Site title and settings |

## Preview locally (optional)

```bash
gem install jekyll
jekyll serve
```

Then open http://localhost:4000.
