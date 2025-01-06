return {
  "ggandor/leap.nvim",
  event = "VeryLazy", -- lazy load when Neovim is opened with lazy.nvim
  config = function()
    -- Load default mappings
    require("leap").add_default_mappings()

    -- Example custom key mappings
    vim.keymap.set({ "n", "x", "o" }, "f", "<Plug>(leap-forward)", { desc = "Leap forward" })
    vim.keymap.set({ "n", "x", "o" }, "F", "<Plug>(leap-backward)", { desc = "Leap backward" })
    vim.keymap.set({ "n", "x", "o" }, "gs", "<Plug>(leap-from-window)", { desc = "Leap to another window" })

    -- Additional configuration options
    local leap = require("leap")
    leap.opts.highlight_unlabeled_phase_one_targets = true -- Enable Lightspeed-style highlighting
    leap.opts.safe_labels = { "a", "s", "d", "f", "g", "h", "j", "k", "l" } -- Customize labels
    leap.opts.case_sensitive = false -- Use smart case sensitivity
  end,
}
