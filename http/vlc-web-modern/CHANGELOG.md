# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-03-14

### Added
- **Semantic Versioning**: Introduced a `CHANGELOG.md` file to track future iterations.
- **Plex Filename Parser**: The iTunes Metadata fetching API now strips trailing Plex/Scene release markers (e.g. `Bluray-720p x264`) and release years in parentheses `(1997)` to accurately find matches on Apple's database.

### Fixed
- **Fullscreen Video Mode**: Refactored the DOM structure so that playing a video correctly scopes to the Main Content view by default rather than forcefully overlaying the sidebar and header. Clicking "Fullscreen" now requests native Fullscreen API on the video wrapper.
- **iTunes Metadata Sync**: State binding issue the where the Information toggle button `i` occasionally loaded an empty state due to `localStorage` race conditions has been solved inherently through the new Regex parsing logic fetching the correct media strings.

## [1.0.0] - 2026-03-14

### Added
- **Modernized Interface Shell**: Released the first iteration of the React + Vite + Tailwind CSS rewrite of the legacy VLC web interface.
- **Easy Stream Engine**: Engineered a robust backend VLM streaming engine capable of transcoding live active media (including local media) directly into a WebM HTML5 browser feed.
- **Playback Controls and Metadata**: Fully functioning pause/play, next/previous tracks, interactive progress bars.
- **Ambient Artwork**: Cinematic, massive blurred backdrops generated dynamically from current album art parameters.
- **Interactive Light/Dark Theme**: A built-in user preference mode to switch the DOM into a sleek Dark Mode.
- **Local Settings View**: Configured skip/rewind settings that auto-persist using browser `localStorage` and a new Media Network Access checkbox to fetch additional media metadata securely through the public iTunes Search API.
