# Living Television Portfolio

A nostalgic TV-themed portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Interactive TV Interface**: Switch channels using on-screen buttons, a physical-style remote control, or keyboard shortcuts.
- **Visual Effects**: Scanlines, chromatic aberration, and screen flicker effects to mimic old CRT monitors.
- **Channel Directory**: Explore different project categories (AI Style, Short Form, Long Form, etc.).
- **Tool Lab**: A specialized showcase for the production tools and AI models used in the workflow.
- **Responsive Design**: Fully functional on mobile and desktop.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Controls

- **Power**: Toggles the TV on and off.
- **Channel Up/Down**: Switch between the 7 available channels.
- **Keyboard Shortcuts**:
  - `Arrow Up`: Previous Channel
  - `Arrow Down`: Next Channel
  - `Enter`: Explore Channel (opens gallery)
  - `Escape`: Close any open modal or drawer

## Project Structure

- `src/components/TV`: Core TV interface components.
- `src/components/Channel`: Channel-specific views and information.
- `src/components/Project`: Project cards, filters, and detail drawer.
- `src/components/ToolLab`: Specialized components for the Tool Lab channel.
- `src/data`: TypeScript interfaces and project/channel/tool data.
- `src/hooks`: Custom hooks for keyboard and state management.
- `src/styles`: Tailwind configuration and TV-specific CSS effects.

## Customization

- To update project data, edit `src/data/projects.ts`.
- To change channels or accent colors, edit `src/data/channels.ts` and `tailwind.config.js`.
- Custom TV effects can be adjusted in `src/styles/tv-effects.css`.

## License

MIT
