# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-03-14

### Added
- **Multi-Provider Metadata Extraction Engine**: Added advanced Regex parsing to explicitly extract the Movie Title, Release Year, TV Show Series Name, Season Number, and Episode Number from standard file naming conventions (e.g., \`Movie (2012).mkv\`, \`Show - S01E02.mp4\`).
- **Flexible Default Providers**: Implemented a Setting selector allowing you to specify a primary provider for Movies (iTunes, TheTVDB, TMDB) and a distinct primary provider for TV Shows (iTunes, TVMaze, TheTVDB, TMDB).
- **Manual 'Fix Match' Provider Overriding**: Overhauled the 'Fix Match' modal so users can pin specific tricky files to specific Providers overriding their default settings. TV Show Fixes now dynamically inject inputs for `Season` and `Episode`.
- **Intelligent Pre-filling**: Opening the Fix Match form pre-fills the Title, Year, Series, Season, and Episode from its best Regex-interpretation of the file name. 
- **TheTVDB multi-step fetch flow**: Enhanced backend metadata fetching logic with Bearer token authentication caching, resolving Series logic -> Episodes metadata seamlessly.

### Changed
- Replaced the default IMDb API implementation entirely in favor of The Movie Database (TMDB) and TheTVDB endpoints.

## [1.1.0] - 2026-03-12

### Added
- Created the initial Glassmorphism user interface.
- Implemented core VLM API stream controls (seek, pause, volume, audio/video toggle).
- Added Tailwind CSS v4 styling and Shadcn UI components.
- iTunes Metadata fetching fallback.
