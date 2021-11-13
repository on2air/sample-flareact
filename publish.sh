#!/usr/bin/env bash
#npm run build
cp ~/.wrangler/config/wrangler.config.$1 ~/.wrangler/config/default.toml && npm run deploy && rm -f ~/.wrangler/config/default.toml
