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
      --local capabilities = require("cmp_nvim_lsp").default_capabilities()
      local lspconfig = require('lspconfig')

      lspconfig.lua_ls.setup({
        --capabilities = capabilities,
      })
      lspconfig.tsserver.setup({
        --capabilities = capabilities,
      })
      lspconfig.html.setup({
        --capabilities = capabilities,
      })
      lspconfig.cssls.setup({
        --capabilities = capabilities,
      })
      lspconfig.dockerls.setup({
        --capabilities = capabilities,
      })
      lspconfig.docker_compose_language_service.setup({
        --capabilities = capabilities,
      })
      lspconfig.prismals.setup({
        --capabilities = capabilities,
      })
      lspconfig.tailwindcss.setup({
        --capabilities = capabilities,
      })

      vim.keymap.set('n', 'K', vim.lsp.buf.hover, {})
      vim.keymap.set('n', 'gd', vim.lsp.buf.definition, {})
      vim.keymap.set('n', 'gr', vim.lsp.buf.references, {})
      vim.keymap.set({ 'n', 'v' }, '<C-a>', vim.lsp.buf.code_action, {})
    end
  }
}
