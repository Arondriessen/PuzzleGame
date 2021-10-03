
// Puzzle Specific Data

levels = [

  [ // World 1

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 2, ["Mid", "Right"], 0], // End-Piece A
          [2, 2, ["Top", "Bottom"], 0],
          [3, 2, ["Mid", "Left"], 0] // End-Piece B
        ]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 2]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1 // Piece Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "C L I C K   T O   R O T A T E   T I L E"
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 1, ["TopLeft", "BottomLeft"], 0],
          [3, 2, ["TopRight", "TopLeft", "BottomRight"], 0, [-1, ["Top", "Right"]]],
          [2, 3, ["BottomRight", "TopLeft"], 0, [["Right", "Top"]]]
        ]
      ],

      [ // End-Pieces
        [2, 1],
        [2, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "C L I C K   A N D   H O L D   T O   D R A G   T I L E"
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 1, ["TopLeft", "Left", "Bottom"], 0, [-1, ["BottomLeft", "Bottom"]]],
          [2, 1, ["Left", "Top"], 0, [["TopLeft", "Top"]]],
          [3, 1, ["Left", "Top", "Right", "Bottom"], 0, [["TopLeft", "Mid"], ["Top", "TopRight"], ["BottomRight", "Bottom"]]],
          [1, 2, ["Top", "Right", "Bottom"], 0, [["Top", "TopRight"], ["BottomRight", "Bottom"]]],
          [2, 2, ["Top", "Bottom"], 0],
          [3, 2, ["Top", "Left", "Bottom"], 0, [["Top", "TopLeft"], ["BottomLeft", "Bottom"]]],
          [1, 3, ["Top", "Left", "Bottom", "Right"], 0, [["Top", "TopLeft"], ["BottomLeft", "Bottom"], ["Mid", "BottomRight"]]],
          [2, 3, ["Right", "Bottom"], 0, [["BottomRight", "Bottom"]]],
          [3, 3, ["BottomRight", "Right", "Top"], 0, [-1, ["Right", "TopRight"]]]
        ]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "D R A G   T I L E   O N T O   A N O T H E R   T O   S W I T C H   T H E M"
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 1, ["TopLeft", "Bottom"], 0, [["Left", "BottomLeft"]]],
          [2, 1, ["Top", "BottomLeft"], 0, [["Top", "BottomRight"]]],
          [3, 1, ["Right", "Top", "BottomLeft"], 0, [-1, ["Top", "BottomRight"]]],
          [1, 2, ["Left", "Bottom", "TopRight"], 0, [-1, ["Bottom", "TopLeft"]]],
          [2, 2, ["Bottom", "TopRight"], 0, [["Bottom", "TopLeft"]]],
          [3, 2, ["BottomRight", "Top"], 0, [["Right", "TopRight"]]]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Right"], 0],
          [2, 1, ["Left", "Mid", "Right"], 0],
          [3, 1, ["Left", "Bottom"], 0, [["Mid", "Bottom"]]],
          [1, 2, ["Left", "Bottom"], 0, [["Mid", "Bottom"]]],
          [2, 2, ["Top", "Mid", "Bottom"], 0],
          [3, 2, ["Bottom", "Right"], 0, [["Mid", "Right"]]],
          [3, 3, ["Left", "Mid", "Top"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [1, 3, ["Mid", "Top"], 0]
        ]
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

        [ // Path 1
          [2, 1, ["Mid", "Left"], 0],
          [1, 1, ["Bottom", "Left"], 0, [["Bottom", "Mid"]]],
          [1, 2, ["Bottom", "Right"], 0, [["Mid", "Right"]]],
          [2, 2, ["Top", "Mid", "Bottom"], 0],
          [3, 2, ["Top", "Mid", "Right"], 0],
          [3, 3, ["Mid", "Top"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Bottom"], 0],
          [2, 1, ["Left", "Mid", "Right"], 0],
          [3, 1, ["Left", "Mid", "Right"], 0],
          [1, 2, ["Bottom", "Mid", "Right"], 0],
          [2, 2, ["Left", "Mid", "Bottom"], 0],
          [3, 2, ["Left", "Mid", "Right"], 0],
          [1, 3, ["Top", "Mid", "Right"], 0],
          [2, 3, ["Left", "Mid", "Top"], 0],
          [3, 3, ["Mid", "Left"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      2, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        1, // Piece Movement (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "N O T   A L L   P I E C E S   H A V E   T O   B E   U S E D"
    ],

    [   // Level 8

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 1, ["Mid", "Bottom"], 0],
          [2, 1, ["Left", "Bottom"], 0, [["Left", "Mid"]]],
          [1, 2, ["Top", "Right"], 0, [["Mid", "Right"]]],
          [2, 2, ["Top", "Mid", "Right"], 0],
          [3, 2, ["Top", "Mid", "Right"], 0],
          [1, 3, ["Top", "Mid", "Right"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [3, 3, ["Left", "Top"], 0, [["Left", "Mid"]]],
          [3, 1, ["Mid", "Left"], 0],
        ]
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

        [ // Path 1
          [1, 2, ["Top", "Left"], 0, [["Top", "Mid"]]],
          [1, 1, ["Left", "Top"], 0, [["Left", "Mid"]]],
          [2, 1, ["Top", "Mid", "BottomLeft", "Mid", "Right"], 0, [-1, ["Mid", "Bottom"], ["Left", "Mid"], -1]],
          [2, 2, ["Top", "Bottom"], 0],
          [2, 3, ["Left", "Mid", "TopRight", "Mid", "Bottom"], 0, [-1, ["Mid", "Right"], ["Top", "Mid"], -1]],
          [3, 3, ["Bottom", "Right"], 0, [["Mid", "Right"]]],
          [3, 2, ["Bottom", "Right"], 0, [["Bottom", "Mid"]]],
        ]
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

        [ // Path 1
          [1, 2, ["TopLeft", "BottomLeft", "Right"], 0, [-1, ["Bottom", "BottomRight"]]],
          [2, 3, ["Left", "TopLeft", "BottomRight", "Right"], 0, [-1, ["Top", "Bottom"], -1]],
          [3, 2, ["BottomRight", "TopRight", "Left"], 0, [-1, ["Top", "TopLeft"]]]
        ]
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
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "U S E   T H E   A R R O W S   T O   M O V E   A   R O W   /   C O L U M N"
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 2, ["Mid", "Top"], 0],
          [2, 2, ["Right", "BottomLeft", "Bottom"], 0, [["Right", "TopLeft"], ["Left", "Mid"]]],
          [2, 3, ["Left", "TopRight", "Top"], 0, [["Left", "BottomRight"], ["Right", "Mid"]]],
          [3, 2, ["Mid", "Bottom"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 2]
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

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 3, ["Mid", "Top"], 0],
          [1, 1, ["Left", "Bottom"], 0, [["Mid", "Mid"]]],
          [2, 2, ["Top", "Right"], 0, [["Mid", "Mid"]]],
          [3, 2, ["Mid", "Top"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 3],
        [3, 2]
      ],

      4, // Number of Moves

      [ // Puzzle Mechanics Enabled
        1, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 2, ["BottomLeft", "Right"], 0, [["Left", "Mid"]]],
          [2, 2, ["Top", "Bottom"], 0, [["TopLeft", "Left"]]],
          [3, 1, ["Left", "Mid", "Bottom"], 0],
          [2, 3, ["Top", "Bottom", "Right"], 0, [-1, ["BottomRight", "Right"]]],
          [3, 3, ["Left", "Mid", "Top"], 0],
          [1, 3, ["Mid", "Bottom"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 2],
        [1, 3]
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

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [3, 2, ["Mid", "Bottom"], 0],
          [4, 4, ["Top", "Mid", "Left"], 0],
          [5, 3, ["Top", "Mid", "Bottom"], 0],
          [3, 5, ["Left", "Mid", "Right"], 0],
          [2, 5, ["Mid", "Right"], 0]
        ]
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

        [ // Path 1
          [1, 2, ["Mid", "Bottom"], 0],
          [2, 2, ["Left", "Mid", "Top"], 0],
          [1, 3, ["Bottom", "Mid", "Right"], 0],
          [2, 4, ["Mid", "Top"], 0]
        ]
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

        [ // Path 1
          [1, 4, ["Mid", "Top"], 0],
          [2, 3, ["Bottom", "Mid", "Right"], 0],
          [3, 4, ["Left", "Mid", "Top"], 0],
          [3, 5, ["Left", "Mid", "Right"], 0],
          [5, 3, ["Mid", "Bottom"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Right"], 0],
          [2, 1, ["Left", "Mid", "Bottom"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [4, 2, ["Left", "Mid", "Bottom"], 0],
          [3, 4, ["Left", "Mid", "Top"], 0],
          [1, 3, ["Mid", "Right"], 0]
        ]
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

        [ // Path 1
          [3, 2, ["Mid", "Left"], 0],
          [2, 1, ["Bottom", "Mid", "Right"], 0],
          [2, 2, ["Top", "Mid", "Bottom"], 0],
          [1, 3, ["Top", "Mid", "Right"], 0],
          [3, 4, ["Left", "Mid", "Top"], 0],
          [2, 3, ["Mid", "Bottom"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Right"], 0],
          [1, 2, ["Left", "Mid", "Bottom"], 0],
          [2, 2, ["Left", "Mid", "Bottom"], 0],
          [1, 3, ["Top", "Mid", "Right"], 0],
          [2, 3, ["Top", "Mid", "Bottom"], 0],
          [3, 5, ["Mid", "Top"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Left"], 0],
          [1, 2, ["Top", "Mid", "Right"], 0],
          [1, 4, ["Top", "Mid", "Right"], 0],
          [3, 3, ["Left", "Mid", "Bottom"], 0],
          [2, 4, ["Top", "Mid", "Bottom"], 0],
          [2, 5, ["Mid", "Top"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Bottom"], 0],
          [3, 3, ["Top", "Mid", "Right"], 0],
          [4, 3, ["Right", "Mid", "Left"], 0],
          [5, 3, ["Right", "Mid", "Left"], 0],
          [4, 4, ["Left", "Mid", "Bottom"], 0],
          [4, 5, ["Left", "Mid", "Top"], 0],
          [2, 4, ["Mid", "Right"], 0]
        ]
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

        [ // Path 1
          [3, 2, ["Mid", "Bottom"], 0],
          [4, 3, ["Top", "Mid", "Bottom"], 0],
          [3, 4, ["Top", "Mid", "Bottom"], 0],
          [4, 4, ["Left", "Mid", "Top"], 0],
          [3, 5, ["Top", "Mid", "Right"], 0],
          [2, 4, ["Mid", "Bottom"], 0]
        ]
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
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "C H E C K   T H E   T O P - L E F T   I C O N S   F O R   A C T I V E   M E C H A N I C S"
    ],

    [   // Level 14

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 4, ["Mid", "Right"], 0],
          [4, 4, ["Left", "Mid", "Right"], 0],
          [5, 4, ["Left", "Mid", "Bottom"], 0],
          [2, 5, ["Left", "Mid", "Right"], 0],
          [5, 5, ["Left", "Mid", "Top"], 0],
          [4, 5, ["Mid", "Right"], 0]
        ]
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

        [ // Path 1
          [3, 3, ["Mid", "Top"], 0],
          [2, 2, ["Bottom", "Mid", "Right"], 0],
          [5, 2, ["Left", "Mid", "Top"], 0],
          [4, 3, ["Left", "Mid", "Bottom"], 0],
          [5, 3, ["Top", "Mid", "Right"], 0],
          [4, 2, ["Mid", "Bottom"], 0]
        ]
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

        [ // Path 1
          [4, 2, ["Mid", "Bottom"], 0],
          [3, 3, ["Top", "Mid", "Right"], 0],
          [3, 4, ["Left", "Mid", "Bottom"], 0],
          [4, 5, ["Left", "Mid", "Top"], 0],
          [2, 5, ["Mid", "Right"], 0]
        ]
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

        [ // Path 1
          [1, 1, ["Mid", "Bottom"], 0],
          [1, 2, ["Top", "Mid", "Right"], 0],
          [2, 2, ["Bottom", "Mid", "Right"], 0],
          [2, 3, ["Top", "Mid", "Bottom"], 0],
          [3, 2, ["Mid", "Left"], 0]
        ]
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
      ],

      "C L I C K   T H E   C I R C L E   I C O N S   T O   R O T A T E   A   C O R N E R"
    ],

    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 5, ["Mid", "Top"], 0],
          [1, 4, ["Top", "Mid", "Bottom"], 0],
          [3, 3, ["Left", "Mid", "Right"], 0],
          [4, 3, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 1, ["Mid", "Top"], 0],
          [4, 1, ["Left", "Mid", "Right"], 0],
          [5, 1, ["Left", "Mid", "Bottom"], 0],
          [3, 2, ["Top", "Mid", "Bottom"], 0],
          [5, 2, ["Top", "Mid", "Bottom"], 0],
          [3, 3, ["Top", "Mid", "Right"], 0],
          [5, 3, ["Top", "Mid", "Bottom"], 0],
          [1, 4, ["Top", "Mid", "Bottom"], 0],
          [1, 5, ["Mid", "Top"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [4, 2, ["Mid", "Right"], 0],
          [5, 3, ["Left", "Mid", "Bottom"], 0],
          [2, 4, ["Left", "Mid", "Top"], 0],
          [4, 4, ["Top", "Mid", "Right"], 0],
          [1, 4, ["Mid", "Right"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 5

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [3, 3, ["Mid", "Bottom"], 0],
          [4, 3, ["Bottom", "Mid", "Right"], 0],
          [4, 4, ["Top", "Mid", "Bottom"], 0],
          [4, 5, ["Left", "Mid", "Top"], 0],
          [5, 3, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 6

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [5, 1, ["Mid", "Left"], 0],
          [3, 1, ["Top", "Mid", "Right"], 0],
          [4, 1, ["Left", "Mid", "Right"], 0],
          [3, 2, ["Top", "Mid", "Right"], 0],
          [4, 2, ["Left", "Mid", "Bottom"], 0],
          [4, 3, ["Top", "Mid", "Right"], 0],
          [5, 3, ["Mid", "Left"], 0]
        ]
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
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "T H E R E ' S   M O R E   T H A N   O N E   W A Y   T O   R O T A T E   A   T I L E"
    ],

    [   // Level 7

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 3, ["Mid", "Top"], 0],
          [3, 1, ["Top", "Mid", "Bottom"], 0],
          [4, 3, ["Top", "Mid", "Right"], 0],
          [3, 5, ["Top", "Mid", "Bottom"], 0],
          [5, 3, ["Mid", "Left"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 3],
        [5, 3]
      ],

      4, // Number of Moves

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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 8

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 1, ["Mid", "Right"], 0],
          [3, 3, ["Left", "Mid", "Right"], 0],
          [4, 5, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 9

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [5, 3, ["Mid", "Bottom"], 0],
          [2, 3, ["Top", "Mid", "Bottom"], 0],
          [4, 4, ["Left", "Mid", "Right"], 0],
          [5, 4, ["Top", "Mid", "Bottom"], 0],
          [5, 5, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 10

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [3, 2, ["Mid", "Bottom"], 0],
          [1, 3, ["Left", "Mid", "Bottom"], 0],
          [2, 3, ["Left", "Mid", "Top"], 0],
          [3, 3, ["Top", "Mid", "Bottom"], 0],
          [1, 4, ["Mid", "Right"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 11

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [3, 2, ["Mid", "Bottom"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [3, 3, ["Left", "Mid", "Top"], 0],
          [3, 4, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 12

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [3, 3, ["Mid", "Bottom"], 0],
          [2, 3, ["Left", "Mid", "Right"], 0],
          [3, 4, ["Left", "Mid", "Right"], 0],
          [3, 5, ["Left", "Mid", "Top"], 0],
          [4, 3, ["Mid", "Bottom"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 13

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 4, ["Mid", "Bottom"], 0],
          [2, 2, ["Bottom", "Mid", "Right"], 0],
          [3, 2, ["Left", "Mid", "Right"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [1, 5, ["Top", "Mid", "Right"], 0],
          [2, 5, ["Left", "Mid", "Top"], 0],
          [4, 5, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 14

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [4, 2, ["Mid", "Bottom"], 0],
          [3, 2, ["Left", "Mid", "Right"], 0],
          [2, 3, ["Top", "Mid", "Right"], 0],
          [3, 3, ["Left", "Mid", "Top"], 0],
          [4, 3, ["Top", "Mid", "Bottom"], 0],
          [5, 3, ["Left", "Mid", "Top"], 0],
          [4, 5, ["Mid", "Left"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 15

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 3, ["Mid", "Top"], 0],
          [3, 2, ["Top", "Mid", "Bottom"], 0],
          [5, 1, ["Bottom", "Mid", "Right"], 0],
          [3, 4, ["Top", "Mid", "Right"], 0],
          [4, 4, ["Top", "Mid", "Bottom"], 0],
          [5, 5, ["Left", "Mid", "Top"], 0],
          [4, 2, ["Mid", "Right"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ],

    [   // Level 16

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [1, 3, ["Mid", "Top"], 0],
          [3, 2, ["Top", "Mid", "Bottom"], 0],
          [5, 1, ["Bottom", "Mid", "Right"], 0],
          [3, 4, ["Top", "Mid", "Right"], 0],
          [4, 4, ["Top", "Mid", "Bottom"], 0],
          [5, 5, ["Left", "Mid", "Top"], 0],
          [4, 2, ["Mid", "Right"], 0]
        ]
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
        // [left/right = 0/1, top/bottom = 0/1]
      ]
    ]

  ],

  [ // World 4

    [   // Level 1

      1, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces

        [ // Path 1
          [2, 2, ["Mid", "Bottom"], 0],
          [3, 3, ["Top", "Bottom"], 0],
          [2, 4, ["Mid", "Top"], 0]
        ],

        [ // Path 2
          [4, 2, ["Mid", "Bottom"], 0],
          [5, 3, ["Top", "Bottom"], 0],
          [4, 4, ["Mid", "Top"], 0]
        ]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 2]
      ],

      1, // Number of Moves

      [ // Puzzle Mechanics Enabled
        0, // Piece Rotation (0 = Off, 1 = On)
        0, // Piece Movement (0 = Off, 1 = On)
        1, // Row / Column Shifting (0 = Off, 1 = On)
        0 // Corner Tiles Rotation (0 = Off, 1 = On)
      ],

      [ // Pre-Applied Line Shifts
      ],

      [ // Pre-Applied Corner Rotations
      ],

      "B O T H   P A T H S   H A V E   T O   B E   C L O S E D   T O   S O L V E   T H E   P U Z Z L E"
    ]

  ],

];
