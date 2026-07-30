# lib/db/

Database client and typed query functions (Postgres via Supabase). Components
and API routes never import a DB driver directly — only functions exported
from here. Falls back to static/demo data when DATABASE_URL is unset. Built
starting Phase 7.
