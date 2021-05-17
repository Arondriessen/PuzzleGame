
// UI elements for each state

ui = [

  [   // Main Menu

    [ // Default State

      // 0, 1, 2, 3, 4444444, 5555555, 666666, 77777, 88888888888888, 9999999999999, 10/10/10/, 11//, 12/12/12/, 13/13/13/13, 14/14/14//, 15/15/15/15, 16/16/16/16, 17/17//, 18/18//,
      // x, y, w, h, h-align, v-align, colour, alpha, outline-colour, outline-alpha, outline-w, text, text-size, text-colour, text-alpha, txt-h-align, txt-v-align, onHover, onClick,

      [width / 2, (height / 2) - 120, 280, 100, 0.5, 0.5, 0, 20, 0, 10, 3, "Play", 60, 0, 50, "CENTER", "CENTER", function() { menuState = 1; }, function() { state = 2; }],
      [width / 2, (height / 2), 280, 100, 0.5, 0.5, 0, 20, 0, 10, 3, "Levels", 60, 0, 50, "CENTER", "CENTER", 0, 0],
      [width / 2, (height / 2) + 120, 280, 100, 0.5, 0.5, 0, 20, 0, 10, 3, "Settings", 60, 0, 50, "CENTER", "CENTER", 0, 0]
    ]
  ],

  [   // Levels Menu

    [ // Default State

      [],
      [],
      []
    ]
  ],

  [   // Puzzle UI

    [ // Default State

      [],
      [],
      []
    ]
  ]

];
