# app/api/

Route handlers. Each AI- or DB-backed feature gets its own route that calls
into lib/ai or lib/db — routes stay thin, logic lives in lib/. Built
incrementally alongside the phase that needs it (Phase 6+).
