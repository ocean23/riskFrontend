import React from 'react';
import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
// DOCS: https://github.com/gaearon/redux-devtools

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultPosition="left">
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
