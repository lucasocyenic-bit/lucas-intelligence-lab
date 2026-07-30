# lib/ai/

AI service abstraction layer. All LLM calls (Lucas AI Digital Twin, itinerary
generation, agent activity copy) go through here — never called directly from
components. Each provider integration exposes the same interface and falls
back to a deterministic demo-mode response set when no API key is configured,
so the app is always fully functional without secrets. Built starting Phase 6.
