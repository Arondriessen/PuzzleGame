
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

      1 // Number of Moves
    ],


    [   // Level 2

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 2, ["Middle", "Right"], 0],
        [1, 1, ["Left", "Middle", "Bottom"], 0],
        [2, 2, ["Left", "Middle", "Right"], 0],
        [3, 3, ["Middle", "Left"], 0]
      ],

      [ // End-Pieces
        [1, 2],
        [3, 3]
      ],

      2 // Number of Moves
    ],


    [   // Level 3

      0, // State (0 = locked, 1 = unlocked)

      3, // Grid Size

      [ // Puzzle Pieces
        [1, 1, ["Middle", "Bottom"], 0],
        [1, 3, ["Top", "Middle", "Right"], 0],
        [1, 2, ["Top", "Middle", "Bottom"], 0],
        [2, 1, ["Left", "Middle", "Top"], 0],
        [2, 2, ["Left", "Middle", "Right"], 0],
        [2, 3, ["Bottom", "Middle", "Right"], 0],
        [3, 1, ["Left", "Middle", "Bottom"], 0],
        [3, 2, ["Top", "Middle", "Bottom"], 0],
        [3, 3, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [1, 1],
        [3, 3]
      ],

      2 // Number of Moves
    ],


    [   // Level 4

      0, // State (0 = locked, 1 = unlocked)

      5, // Grid Size

      [ // Puzzle Pieces
        [3, 3, ["Middle", "Bottom"], 0],
        [3, 4, ["Left", "Middle", "Top"], 0],
        [4, 3, ["Left", "Middle", "Top"], 0],
        [4, 4, ["Bottom", "Middle", "Right"], 0],
        [5, 3, ["Bottom", "Middle", "Right"], 0],
        [5, 4, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [3, 3],
        [5, 4]
      ],

      99 // Number of Moves
    ]

  ],



  [ // World 2

    [   // Level 1

      0, // State (0 = locked, 1 = unlocked)

      7, // Grid Size

      [ // Puzzle Pieces
        [3, 3, ["Middle", "Bottom"], 0],
        [3, 4, ["Left", "Middle", "Top"], 0],
        [4, 3, ["Left", "Middle", "Top"], 0],
        [4, 4, ["Bottom", "Middle", "Right"], 0],
        [5, 3, ["Bottom", "Middle", "Right"], 0],
        [5, 4, ["Middle", "Top"], 0]
      ],

      [ // End-Pieces
        [3, 3],
        [5, 4]
      ],

      99 // Number of Moves
    ]

  ]

];
