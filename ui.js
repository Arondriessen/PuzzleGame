
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Background Tiles

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ width / 6, // width
          /* 05 */ width / 6, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 1, // outline-width


          // List Settings

          /* 14 */ function() { return 25; }, // items
          /* 15 */ function() { return 5; }, // h-number
          /* 16 */ function() { return 3; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return width / 3; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return width / 6; }, // x-offset (new line)
          /* 20 */ function() { return width / 6; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 * uiScale, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 2; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Play Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ width / 6, // width
          /* 05 */ width / 6, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 80 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Play", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() {  boxOp = 5; boxOutlineOp = 0; menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Levels Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "Levels", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = world; state = 1; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Settings Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + (120 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "Settings", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]
    ]
  ],

  [   // /* 01 */ Levels Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01*/ Back Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90, // x pos
          /* 03 */ height - (90 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Back", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03*/ Previous World Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (20 * uiScale), // x pos
          /* 03 */ height - (90 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Prev. World", // text
          /* 02 */ 38 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = Math.max(1, levelsWorld - 1); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02*/ Next World Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (20 * uiScale), // x pos
          /* 03 */ height - (90 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Next World", // text
          /* 02 */ 38 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = Math.min(3, levelsWorld + 1); } // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 01 */ World 1 State

      /* 00 */ function() { return (levelsWorld == 1); }, // state (0 = off, 1 = on)

      [ // /* 01 */ World Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 800 * uiScale, // width
          /* 05 */ 600 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "", // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Level Buttons

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 90 * uiScale, // width
          /* 05 */ 90 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ function() { return 2 + (levelData[0][((v * hNum) + h)][0] * 8) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[0].length; }, // items
          /* 15 */ function() { return 5; }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return 110 * uiScale; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 120 * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ function() { return 25 + (levelData[0][((v * hNum) + h)][0] * 175) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[0][((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

    ],

    [ // /* 02 */ World 2 State

      /* 00 */ function() { return (levelsWorld == 2); }, // state (0 = off, 1 = on)

      [ // /* 01 */ World Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 800 * uiScale, // width
          /* 05 */ 600 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "", // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Level Buttons

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 90 * uiScale, // width
          /* 05 */ 90 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ function() { return 2 + (levelData[1][((v * hNum) + h)][0] * 8) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[1].length; }, // items
          /* 15 */ function() { return 5; }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return 110 * uiScale; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 120 * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ function() { return 25 + (levelData[1][((v * hNum) + h)][0] * 175) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[1][((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

    ],

    [ // /* 03 */ World 3 State

      /* 00 */ function() { return (levelsWorld == 3); }, // state (0 = off, 1 = on)

      [ // /* 01 */ World Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 800 * uiScale, // width
          /* 05 */ 600 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "", // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Level Buttons

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 90 * uiScale, // width
          /* 05 */ 90 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ function() { return 2 + (levelData[2][((v * hNum) + h)][0] * 8) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[2].length; }, // items
          /* 15 */ function() { return 5; }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return 110 * uiScale; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 120 * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ function() { return 25 + (levelData[2][((v * hNum) + h)][0] * 175) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[2][((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

    ],
  ],

  [   // /* 02 */ Puzzle UI

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90 * uiScale, // x pos
          /* 03 */ 90 * uiScale, // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 80, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("Level " + level); }, // text
          /* 02 */ 40 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Steps Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles - 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 140 * uiScale, // width
          /* 05 */ 140 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 80, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return steps; }, // text
          /* 02 */ 60 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Reset Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90 * uiScale, // x pos
          /* 03 */ height - (90 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Reset", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ 90 * uiScale, // y pos
          /* 04 */ 96 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "//", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return menuIconIMG; }, // image
          /* 02 */ 40 * uiScale, // image-size
          /* 03 */ 255, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Design Mode Toggle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (210 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { let txt = "Off"; if (designMode) { txt = "On"; } return ("Design Mode: " + txt); }, // text
          /* 02 */ 28 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { designMode = !designMode; if (designMode) { solved = 0; } else { if (steps < 1) { solved = -1; } } } // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 01 */ Level Completed

      /* 00 */ function() { return (solved == 1); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Next Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (90 * uiScale), // y pos
          /* 04 */ 270 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Next", // text
          /* 02 */ 48 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { nextLevel(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Level Completed BG

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 400 * uiScale, // width
          /* 05 */ 400 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 50 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Success!", // text
          /* 02 */ 72 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 02 */ Level Gen. UI

      /* 00 */ function() { return designMode; }, // state (0 = off, 1 = on)

      [ // /* 00 */ Generate Level Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90 * uiScale, // x pos
          /* 03 */ height - (210 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Generate", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { generateLevel(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Reset Gen. Level Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90 * uiScale, // x pos
          /* 03 */ height - (310 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Reset Gen.", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { resetGenLevel(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Retry Gen. Level Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ 90 * uiScale, // x pos
          /* 03 */ height - (410 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Retry Gen.", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { retryGenLevel(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Save Level Changes

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (330 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Save", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { saveLevelChanges(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Add Step

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (430 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "+", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { steps++; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Add Line Piece

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (530 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Add Line", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { puzzlePieces.splice(puzzlePieces.length - 1, 0, [1, 1, ["Top", "Middle", "Bottom"], 0]); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Add Corner Piece

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (630 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Add Corner", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { puzzlePieces.splice(puzzlePieces.length - 1, 0, [1, 1, ["Top", "Middle", "Right"], 0]); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Clear Board

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width - (90 * uiScale), // x pos
          /* 03 */ height - (730 * uiScale), // y pos
          /* 04 */ 200 * uiScale, // width
          /* 05 */ 76 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Clear", // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 30; boxOutlineOp = 100; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { boxOp = 0; boxOutlineOp = 50; }, // onHoverOut event (0 = no event)
          /* 03 */ function() { puzzlePieces.splice(1, puzzlePieces.length - 2); } // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 03 */ Row/Column Shifting

      /* 00 */ function() { return levelData[world - 1][level - 1][5][2]; }, // state (0 = off, 1 = on)

      [ // /* 01 */ Shift Row/Column (Top Left)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return (tiles - 2); }, // items
          /* 15 */ function() { return (tiles - 2); }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return -(tileSize / 2); }, // x-offset (spacing)
          /* 18 */ function() { return (tileSize / 2); }, // y-offset (spacing)
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 0; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 36 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(uiSelectedIndex, -1, -1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowBottomRightIMG; }, // image
          /* 02 */ 22 * uiScale, // image-size
          /* 03 */ 40, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Shift Row/Column (Top Right)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return (tiles - 2); }, // items
          /* 15 */ function() { return (tiles - 2); }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return (tileSize / 2); }, // x-offset (spacing)
          /* 18 */ function() { return (tileSize / 2); }, // y-offset (spacing)
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 0; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 36 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(-1, uiSelectedIndex, -1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowBottomLeftIMG; }, // image
          /* 02 */ 22 * uiScale, // image-size
          /* 03 */ 40, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Shift Row/Column (Bottom Left)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return (tiles - 2); }, // items
          /* 15 */ function() { return (tiles - 2); }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return (tileSize / 2); }, // x-offset (spacing)
          /* 18 */ function() { return (tileSize / 2); }, // y-offset (spacing)
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 0; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 36 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(-1, uiSelectedIndex, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowTopRightIMG; }, // image
          /* 02 */ 22 * uiScale, // image-size
          /* 03 */ 40, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Shift Row/Column (Bottom Right)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle, 4 = rotated rect)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return (tiles - 2); }, // items
          /* 15 */ function() { return (tiles - 2); }, // h-number
          /* 16 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return -(tileSize / 2); }, // x-offset (spacing)
          /* 18 */ function() { return (tileSize / 2); }, // y-offset (spacing)
          /* 19 */ function() { return 0; }, // x-offset (new line)
          /* 20 */ function() { return 0; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 36 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(uiSelectedIndex, -1, 1, 1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowTopLeftIMG; }, // image
          /* 02 */ 22 * uiScale, // image-size
          /* 03 */ 40, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],
    ],

    [ // /* 04 */ Corner Tiles Rotation

      /* 00 */ function() { return levelData[world - 1][level - 1][5][3]; }, // state (0 = off, 1 = on)

      [ // /* 01 */ Rotate Corner Tiles (Top)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * (tiles - 0.5)); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { /*boxOp = 0;*/ }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(0, 0); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerTop; }, // image
          /* 02 */ 72 * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Rotate Corner Tiles (Right)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * (tiles - 0.5)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { /*boxOp = 0;*/ }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(1, 0); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerRight; }, // image
          /* 02 */ 72 * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Rotate Corner Tiles (Bottom)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * (tiles - 0.5)); }, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerBottom; }, // image
          /* 02 */ 72 * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Rotate Corner Tiles (Left)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * (tiles - 0.5)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return (tileSize / 2); }, // width
          /* 05 */ function() { return (tileSize / 2); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 16; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(0, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerLeft; }, // image
          /* 02 */ 72 * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ]
    ],
  ],

  [   // /* 03 */ Settings

  ]

];
