# Who Has Security?

A simple website listing blockchain companies with in-house security teams. The goal is to promote internal security ownership in the blockchain space.

Visit the site: [whohassecurity.com](https://whohassecurity.com)

## About

Security is not something you can fully outsource. While external code reviews, audit contests, and bug bounties are valuable, internal security ownership is key to long-term success. This list showcases blockchain companies that have taken this step.

## How to Add Your Protocol

We welcome contributions! If your company has an internal security person (protocol security engineer, CISO, or another security role), you can add yourself to the list.

### Steps to Submit

1. Fork this repository
2. Edit `data/protocols.json` and add your entry in alphabetical order:
   ```json
   {
     "name": "Your Protocol Name",
     "website": "https://yourprotocol.com/"
   }
   ```
3. Submit a Pull Request with:
   - The updated `protocols.json` file
   - Relevant information to verify you have an internal security person (e.g., link to job posting, LinkedIn profile, company page mentioning security team)

### Private Submissions

If you prefer not to share public proof, you can reach out to [Josselin Feist](https://x.com/Montyly) (@montyly on Telegram) with reasonable proof of your internal security team.

## Running Locally

This is a static website that requires no build step. Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then visit http://localhost:8000
```

## Criteria

The definition of "having security" is intentionally not strict. Our goal is to promote having internal security, not to rigorously evaluate companies. Companies listed here might still have areas for improvement, but they've demonstrated a commitment to internal security ownership.

## Maintainer

Maintained by [Josselin Feist](https://x.com/Montyly)

