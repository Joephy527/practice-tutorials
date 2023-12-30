return {
  {
    "williamboman/mason.nvim",
    config = function()
      require("mason").setup()
    end
  },
  {
    "williamboman/mason-lspconfig.nvim",
    config = function()
      require("mason-lspconfig").setup({
        ensure_installed = { "lua_ls", "html", "cssls", "dockerls", "docker_compose_language_service", "tsserver", "prismals", "tailwindcss", }
      })
    end
  },
  {
    "neovim/nvim-lspconfig",
    config = function()
      local capabilities = require("cmp_nvim_lsp").default_capabilities()
      local lspconfig = require('lspconfig')

      lspconfig.lua_ls.setup({
        capabilites = capabilities,
      })
      lspconfig.tsserver.setup({
        capabilites = capabilities,
      })
      lspconfig.html.setup({
        capabilites = capabilities,
      })
      lspconfig.cssls.setup({
        capabilites = capabilities,
      })
      lspconfig.dockerls.setup({
        capabilites = capabilities,
      })
      lspconfig.docker_compose_language_service.setup({
        capabilites = capabilities,
      })
      lspconfig.prismals.setup({
        capabilites = capabilities,
      })
      lspconfig.tailwindcss.setup({
        capabilites = capabilities,
      })

      vim.keymap.set('n', 'K', vim.lsp.buf.hover, {})
      vim.keymap.set('n', 'gd', vim.lsp.buf.definition, {})
      vim.keymap.set('n', 'gr', vim.lsp.buf.references, {})
      vim.keymap.set({ 'n', 'v' }, '<C-a>', vim.lsp.buf.code_action, {})
    end
  }
}
