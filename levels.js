
// Puzzle Specific Data

levels = [

  [ // World 1

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopLeft", "BottomRight"], 0, [["TopRight", "TopRight"]]], // End-Piece A
        [2, 2, ["TopRight", "BottomLeft"], 0, [["TopLeft", "BottomRight"]]],
        [3, 3, ["BottomRight", "TopLeft"], 0, [["BottomLeft", "MidLeft"]]] // End-Piece B
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1 // Piece Rotation (0 = Off, 1 = On)
      ]
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [2, 1, ["TopLeft", "BottomLeft"], 0],
        [3, 2, ["TopRight", "TopLeft", "BottomRight"], 0, [-1, ["TopMid", "MidRight"]]],
        [2, 3, ["BottomRight", "TopLeft"], 0, [["MidRight", "TopMid"]]]
      ],

      [ // End-Pieces
        [2, 1],
        [2, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [2, 1, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [2, 3, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [3, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 3, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [1, 2, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 1, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 1, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 2, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 2]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "MidRight"], 0],
        [2, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [1, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 3, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [1, 3]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 6

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [2, 1, ["TopMid", "MidLeft"], 0],
        [1, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [1, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [2, 1],
        [3, 3]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 7

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [2, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [1, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [3, 2, ["MidLeft", "TopMid", "MidRight"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 3, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 8

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [2, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [1, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 1, ["TopMid", "MidLeft"], 0],
      ],

      [ // End-Pieces
        [1, 1],
        [3, 1]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ],

    [   // Level 9

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["TopMid", "MidLeft"], 0],
        [1, 1, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 1, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [2, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [3, 3, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 2, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 2]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ]
    ]

  ],

  [ // World 2

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["TopLeft", "BottomLeft", "MidRight"], 0, [-1, ["BottomMid", "BottomRight"]]],
        [2, 3, ["MidLeft", "BottomRight"], 0, [["TopLeft", "TopRight"]]],
        [3, 2, ["BottomRight", "TopRight", "BottomLeft"], 0, [-1, ["MidRight", "BottomMid"]]]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 2]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["TopMid", "TopMid"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 2, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 2]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 3, ["TopMid", "TopMid"], 0],
        [1, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 2, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 3],
        [3, 2]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["TopMid", "MidRight"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [1, 3, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [1, 3]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["TopMid", "BottomLeft"], 0],
        [4, 4, ["TopMid", "TopMid", "MidLeft"], 0],
        [5, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 5, ["MidLeft", "TopMid", "MidRight"], 0],
        [2, 5, ["TopMid", "MidRight"], 0]
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
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 6

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["TopMid", "BottomLeft"], 0],
        [2, 2, ["MidLeft", "TopMid", "TopMid"], 0],
        [1, 3, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 4, ["TopMid", "TopMid"], 0]
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
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 7

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 4, ["TopMid", "TopMid"], 0],
        [2, 3, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 5, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 3, ["TopMid", "BottomLeft"], 0]
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
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 8

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "MidRight"], 0],
        [2, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [3, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [1, 3, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [1, 3]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 9

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["TopMid", "MidLeft"], 0],
        [2, 1, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 3, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [3, 2],
        [2, 3]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 10

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "MidRight"], 0],
        [1, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 5, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 5]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 11

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "MidLeft"], 0],
        [1, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 4, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [2, 5, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [2, 5]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 12

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [3, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 3, ["MidRight", "TopMid", "MidLeft"], 0],
        [5, 3, ["MidRight", "TopMid", "MidLeft"], 0],
        [4, 4, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [4, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 4, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [2, 4]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 13

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["TopMid", "BottomLeft"], 0],
        [4, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 5, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 4, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [3, 2],
        [2, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 14

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 4, ["TopMid", "MidRight"], 0],
        [4, 4, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 4, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 5, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 5, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [2, 4],
        [4, 5]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 15

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 3, ["TopMid", "TopMid"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [5, 2, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [5, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 2, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [3, 3],
        [4, 2]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 16

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [4, 2, ["TopMid", "BottomLeft"], 0],
        [3, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 4, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [4, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 5, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [4, 2],
        [2, 5]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
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
        [1, 1, ["TopMid", "BottomLeft"], 0],
        [1, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [2, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 2, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 2]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
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
        [1, 5, ["TopMid", "TopMid"], 0],
        [1, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 3, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [1, 5],
        [4, 3]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        0, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 1, ["TopMid", "TopMid"], 0],
        [4, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 1, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [3, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [5, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [1, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [1, 5, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [2, 1],
        [1, 5]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [4, 2, ["TopMid", "MidRight"], 0],
        [5, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 4, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 4, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [4, 2],
        [1, 4]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 3, ["TopMid", "BottomLeft"], 0],
        [4, 3, ["BottomLeft", "TopMid", "MidRight"], 0],
        [4, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [5, 3, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [3, 3],
        [5, 3]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 6

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [5, 1, ["TopMid", "MidLeft"], 0],
        [3, 1, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 2, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 2, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [4, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [5, 3, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [5, 1],
        [5, 3]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 7

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 3, ["TopMid", "MidRight"], 0],
        [3, 1, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 5, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 3, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [1, 3],
        [5, 3]
      ],

      3, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 8

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [2, 1, ["TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 5, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [2, 1],
        [4, 5]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 9

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [5, 3, ["TopMid", "BottomLeft"], 0],
        [2, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 4, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 5, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [5, 3],
        [5, 5]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 10

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["TopMid", "BottomLeft"], 0],
        [1, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [1, 4, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [3, 2],
        [1, 4]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 11

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 2, ["TopMid", "BottomLeft"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [3, 4, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [3, 2],
        [3, 4]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 12

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 3, ["TopMid", "BottomLeft"], 0],
        [2, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 4, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 3, ["TopMid", "BottomLeft"], 0]
      ],

      [ // End-Pieces
        [3, 3],
        [4, 3]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 13

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 4, ["TopMid", "BottomLeft"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 2, ["MidLeft", "TopMid", "MidRight"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 5, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 5, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [1, 4],
        [4, 5]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 14

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [4, 2, ["TopMid", "BottomLeft"], 0],
        [3, 2, ["MidLeft", "TopMid", "MidRight"], 0],
        [2, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 3, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 3, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 5, ["TopMid", "MidLeft"], 0]
      ],

      [ // End-Pieces
        [4, 2],
        [4, 5]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 15

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [1, 3, ["TopMid", "TopMid"], 0],
        [3, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 1, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 4, ["TopMid", "TopMid", "MidRight"], 0],
        [4, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 5, ["MidLeft", "TopMid", "TopMid"], 0],
        [4, 2, ["TopMid", "MidRight"], 0]
      ],

      [ // End-Pieces
        [1, 3],
        [4, 2]
      ],

      5, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 16

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [5, 1, ["TopMid", "BottomLeft"], 0],
        [1, 1, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 1, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 1, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 0, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 2, ["BottomLeft", "TopMid", "MidRight"], 0],
        [3, 2, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [5, 2, ["TopMid", "TopMid", "BottomLeft"], 0],
        [1, 3, ["TopMid", "TopMid", "MidRight"], 0],
        [2, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [3, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 3, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 3, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [1, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [2, 4, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 4, ["MidLeft", "TopMid", "MidRight"], 0],
        [4, 4, ["MidLeft", "TopMid", "TopMid"], 0],
        [2, 5, ["TopMid", "TopMid", "BottomLeft"], 0],
        [3, 5, ["TopMid", "TopMid", "BottomLeft"], 0],
        [4, 5, ["MidLeft", "TopMid", "MidRight"], 0],
        [5, 5, ["MidLeft", "TopMid", "BottomLeft"], 0],
        [2, 6, ["TopMid", "TopMid", "MidRight"], 0],
        [1, 5, ["TopMid", "TopMid"], 0]
      ],

      [ // End-Pieces
        [5, 1],
        [1, 5]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        1 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
        // [row, column, dir]
        [-1, 2, 1],
        [-1, 4, -1],
      ],

      [ // Pre-Applied Corner Rotations
        // [MidLeft/right = 0/1, top/bottom = 0/1]
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 1],
        [1, 1],
        [1, 1]
      ]
    ]

  ]

];
