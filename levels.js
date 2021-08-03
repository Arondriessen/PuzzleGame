
// Puzzle Specific Data

levels = [

  [ // World 1

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["Middle", "Right"], 0], // End-Piece A
        [2, 1, ["Left", "Middle", "Bottom"], 0],
        [2, 2, ["Left", "Middle", "Right"], 0],
        [2, 3, ["Top", "Middle", "Right"], 0],
        [3, 3, ["Left", "Middle"], 0] // End-Piece B
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ]
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["Middle", "Right"], 0],
        [1, 1, ["Left", "Middle", "Bottom"], 0],
        [2, 2, ["Left", "Middle", "Right"], 0],
        [3, 3, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["Middle", "Bottom"], 0],
        [1, 3, ["Top", "Middle", "Right"], 0],
        [1, 2, ["Top", "Middle", "Bottom"], 0],
        [2, 1, ["Left", "Middle", "Top"], 0],
        [2, 2, ["Top", "Middle", "Bottom"], 0],
        [2, 3, ["Bottom", "Middle", "Right"], 0],
        [3, 1, ["Left", "Middle", "Bottom"], 0],
        [3, 2, ["Top", "Middle", "Bottom"], 0],
        [3, 3, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["Middle", "Bottom"], 0],
        [1, 2, ["Left", "Middle", "Top"], 0],
        [2, 1, ["Left", "Middle", "Top"], 0],
        [2, 2, ["Bottom", "Middle", "Right"], 0],
        [3, 1, ["Bottom", "Middle", "Right"], 0],
        [3, 2, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 2]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ]
    ]

  ],

  [ // World 2

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["Middle", "Bottom"], 0],
        [4, 4, ["Top", "Middle", "Left"], 0],
        [5, 3, ["Top", "Middle", "Bottom"], 0],
        [3, 5, ["Left", "Middle", "Right"], 0],
        [2, 5, ["Middle", "Right"], 0]
      ],

      [ // End-Pieces
        [3, 2],
        [2, 5]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 4, ["Middle", "Top"], 0],
        [3, 4, ["Bottom", "Middle", "Right"], 0],
        [3, 5, ["Left", "Middle", "Top"], 0],
        [4, 4, ["Middle", "Bottom"], 0]
      ],

      [ // End-Pieces
        [2, 4],
        [4, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["Middle", "Bottom"], 0],
        [2, 2, ["Left", "Middle", "Top"], 0],
        [1, 3, ["Bottom", "Middle", "Right"], 0],
        [2, 4, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [2, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 1, ["Middle", "Bottom"], 0],
        [2, 2, ["Left", "Middle", "Top"], 0],
        [1, 3, ["Bottom", "Middle", "Right"], 0],
        [2, 4, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [2, 1],
        [2, 4]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 3, ["Middle", "Right"], 0],
        [1, 4, ["Left", "Middle", "Bottom"], 0],
        [3, 5, ["Top", "Middle", "Right"], 0],
        [2, 4, ["Middle", "Left"], 0]
      ],

      [ // End-Pieces
        [1, 3],
        [2, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 6

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 4, ["Middle", "Top"], 0],
        [2, 3, ["Bottom", "Middle", "Right"], 0],
        [3, 4, ["Left", "Middle", "Top"], 0],
        [3, 5, ["Left", "Middle", "Right"], 0],
        [5, 3, ["Middle", "Bottom"], 0]
      ],

      [ // End-Pieces
        [1, 4],
        [5, 3]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ]

  ],

  [ // World 3

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [3, 1, ["Middle", "Left"], 0],
        [1, 1, ["Bottom", "Middle", "Right"], 0],
        [2, 1, ["Left", "Middle", "Right"], 0],
        [1, 2, ["Left", "Middle", "Right"], 0],
        [2, 2, ["Left", "Middle", "Right"], 0],
        [3, 2, ["Left", "Middle", "Bottom"], 0],
        [1, 3, ["Top", "Middle", "Right"], 0],
        [3, 3, ["Left", "Middle", "Top"], 0],
        [2, 3, ["Middle", "Right"], 0]
      ],

      [ // End-Pieces
        [3, 1],
        [2, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ]
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 4, ["Middle", "Top"], 0],
        [3, 4, ["Bottom", "Middle", "Right"], 0],
        [3, 5, ["Left", "Middle", "Top"], 0],
        [4, 4, ["Middle", "Bottom"], 0]
      ],

      [ // End-Pieces
        [2, 4],
        [4, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ]

  ]

];
