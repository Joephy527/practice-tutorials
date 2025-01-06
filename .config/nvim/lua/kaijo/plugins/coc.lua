return {
  "neoclide/coc.nvim",
  branch = "release",
  build = ":CocInstall",
  config = function()
    -- Set the location of coc-settings.json
    vim.g.coc_config_home = vim.fn.expand("~/.config/vem")

    -- Make autocompletion smoother
    vim.o.updatetime = 300

    -- Function to check for backspace
    -- local function check_back_space()
    --   local col = vim.fn.col('.') - 1
    --   return col == 0 or vim.fn.getline('.'):sub(col, col):match('%s') ~= nil
    -- end

    -- Autocompletion mappings
    vim.api.nvim_set_keymap("i", "<TAB>",
      [[pumvisible() ? "\<C-n>" : v:lua.check_back_space() ? "\<Tab>" : coc#refresh()]],
      { noremap = true, expr = true, silent = true })

    vim.api.nvim_set_keymap("i", "<S-TAB>",
      [[pumvisible() ? "\<C-p>" : "\<Tab>"]],
      { noremap = true, expr = true, silent = true })

    -- Go-to mappings
    vim.api.nvim_set_keymap("n", "<leader>gd", "<Plug>(coc-definition)", { silent = true })
    -- vim.api.nvim_set_keymap("n", "Ct", "<Plug>(coc-type-definition)", { silent = true })
    -- vim.api.nvim_set_keymap("n", "Cp", "<Plug>(coc-implementation)", { silent = true })
    -- vim.api.nvim_set_keymap("n", "Cr", "<Plug>(coc-references)", { silent = true })

    -- Refactoring mappings
    -- vim.api.nvim_set_keymap("n", "CR", "<Plug>(coc-rename)", { silent = true })
    -- vim.api.nvim_set_keymap("n", "CF", "<Plug>(coc-format)", { silent = true })
    -- vim.api.nvim_set_keymap("x", "CF", "<Plug>(coc-format-selected)", { silent = true })
    vim.api.nvim_set_keymap("n", "ca", "<Plug>(coc-codeaction)", { silent = true })
    -- vim.api.nvim_set_keymap("x", "CA", "<Plug>(coc-codeaction-selected)", { silent = true })
    -- vim.api.nvim_set_keymap("n", "CX", "<Plug>(coc-fix-current)", { silent = true })

    -- Coc lists mappings
    -- vim.api.nvim_set_keymap("n", "Cld", ":<C-u>CocList diagnostics<CR>", { noremap = true, silent = true })
    -- vim.api.nvim_set_keymap("n", "Cle", ":<C-u>CocList extensions<CR>", { noremap = true, silent = true })
    -- vim.api.nvim_set_keymap("n", "Clc", ":<C-u>CocList commands<CR>", { noremap = true, silent = true })
    -- vim.api.nvim_set_keymap("n", "Clo", ":<C-u>CocList outline<CR>", { noremap = true, silent = true })
    -- vim.api.nvim_set_keymap("n", "Cls", ":<C-u>CocList -I symbols<CR>", { noremap = true, silent = true })

    -- Show info mappings
    vim.api.nvim_set_keymap("n", "<C-i>", ":call CocAction('doHover')<CR>", { noremap = true, silent = true })

    -- Highlight current identifier usage in current document
    vim.api.nvim_create_autocmd("CursorHold", {
      pattern = "*",
      command = "silent call CocActionAsync('highlight')"
    })
  end,
}


