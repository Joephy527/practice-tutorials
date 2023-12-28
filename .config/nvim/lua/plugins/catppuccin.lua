return {
  "catppuccin/nvim",
  name = "catppuccin",
  priority = 1000,
  config = function()
    require("catppuccin").setup({
      flavour = "latte",
      background = {
        light = "latte",
        dark = "mocha",
      },
      transparent_background = true,
      show_end_of_buffer = false,
      term_colors = true,
      styles = { -- Handles the styles of general hi groups (see `:h highlight-args`):
        comments = { "italic" }, -- Change the style of comments
        conditionals = { "italic" },
        loops = {"italic"},
        functions = {"italic"},
        keywords = {"italic"},
        strings = {"italic"},
        variables = {"italic"},
        numbers = {"italic"},
        booleans = {"italic"},
        properties = {"italic"},
        types = {"italic"},
        operators = {"italic"},
      },
    })

    vim.cmd.colorscheme "catppuccin"
  end
}
