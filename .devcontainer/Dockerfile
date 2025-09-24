# Use the official Node.js LTS image
FROM mcr.microsoft.com/devcontainers/typescript-node:latest

# Set the working directory
WORKDIR /workspace

# Install additional dependencies for WordPress development
RUN apt-get update && apt-get install -y \
    git \
    curl \
    vim \
    nano \
    tree \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Install global npm packages for development
RUN npm install -g \
    @playwright/test \
    eslint \
    prettier \
    markdownlint-cli \
    yaml-lint \
    && npm cache clean --force

# Install MCP servers
RUN npm install -g \
    @microsoft/mcp-server-playwright \
    && npm cache clean --force

# Create directories for Copilot assets
RUN mkdir -p \
    /workspace/.github/agents \
    /workspace/.github/chatmodes \
    /workspace/.github/prompts \
    /workspace/.github/instructions \
    /workspace/collections

# Set proper permissions
RUN chown -R node:node /workspace

# Switch to non-root user
USER node

# Expose common ports
EXPOSE 3000 8080 9000

# Keep container running
CMD ["sleep", "infinity"]
