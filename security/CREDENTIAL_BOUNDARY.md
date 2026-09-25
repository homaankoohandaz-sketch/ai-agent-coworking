# Credential Boundary

Never commit API keys, OAuth refresh tokens, cookies, session files or provider secrets.

Store credentials in provider OAuth/connector storage or the runtime secret store.

Git stores only:
- provider
- credential alias
- scope
- health
- safe expiry metadata

Dedicated worker identities are preferred where a provider supports them:
- github-agent-coding
- github-agent-qa
- github-agent-deploy
- browser-agent
- content-agent

The router uses aliases, never raw secrets.
