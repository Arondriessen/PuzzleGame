
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
          /* 04 */ bgTileSize * uiScale, // width
          /* 05 */ bgTileSize * uiScale, // height
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
          /* 17 */ function() { return (bgTileSize * 2) * uiScale; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return bgTileSize * uiScale; }, // x-offset (new line)
          /* 20 */ function() { return bgTileSize * uiScale; } // y-offset (new line)
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 2; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Center Rect. Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ bgTileSize * uiScale, // width
          /* 05 */ bgTileSize * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][2][1], 9], [uiData[0][0][2][1], 12]], [0, 0], [5, 0], 10, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][2][1], 9], [uiData[0][0][2][1], 12]], [5, 0], [0, 0], 10, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Top Rect.

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - ((bgTileSize / 2) * uiScale), // y pos
          /* 04 */ (bgTileSize / 2) * uiScale, // width
          /* 05 */ (bgTileSize / 2) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Continue Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + (((bgTileSize / 2) - (menuBTMargin / 1.5)) * uiScale), // y pos
          /* 04 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // width
          /* 05 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Continue", // text
          /* 02 */ menuBTTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][4][1], 9], [uiData[0][0][4][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][4][1], 9], [uiData[0][0][4][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Levels Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (((bgTileSize / 2) - (menuBTMargin / 1.5)) * uiScale), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // width
          /* 05 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Levels", // text
          /* 02 */ menuBTTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][5][1], 9], [uiData[0][0][5][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][5][1], 9], [uiData[0][0][5][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = world; state = 1; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Settings Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (((bgTileSize / 2) - (menuBTMargin / 1.5)) * uiScale), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // width
          /* 05 */ ((bgTileSize / 2) - (menuBTMargin * 2)) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Settings", // text
          /* 02 */ menuBTTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][6][1], 9], [uiData[0][0][6][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][6][1], 9], [uiData[0][0][6][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { /* Open Settings Menu */ } // onClick event (0 = no event)
        ]
      ],

      [ // /* 07 */ World and Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + (((bgTileSize / 2) - menuBTMargin + 60) * uiScale), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W " + world + "  /  L " + level); }, // text
          /* 02 */ 17 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
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

      [ // /* 08 */ Game Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - (((bgTileSize / 2) - menuBTMargin) * uiScale), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Puzzle Game", // text
          /* 02 */ menuBTTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
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
    ]
  ],

  [   // /* 01 */ Levels Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Background Tiles

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ bgTileSize * uiScale, // width
          /* 05 */ bgTileSize * uiScale, // height
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
          /* 17 */ function() { return (bgTileSize * 2) * uiScale; }, // x-offset
          /* 18 */ function() { return 0; }, // y-offset
          /* 19 */ function() { return bgTileSize * uiScale; }, // x-offset (new line)
          /* 20 */ function() { return bgTileSize * uiScale; } // y-offset (new line)
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 2; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Center Rect. Background

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ bgTileSize * uiScale, // width
          /* 05 */ bgTileSize * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Previous World Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ function() { return ((levelsWorld - 1) > 0); }, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - ((bgTileSize + 120 + (menuBTMargin * 2)) * uiScale), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 120 * uiScale, // width
          /* 05 */ 120 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return ((levelsWorld - 1) > 0); }, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W " + (levelsWorld - 1)); }, // text
          /* 02 */ btTxtSize * 0.8, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[1][0][3][1], 9], [uiData[1][0][3][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[1][0][3][1], 9], [uiData[1][0][3][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = Math.max(1, levelsWorld - 1); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Next World Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ function() { return ((levelsWorld + 1) < 4); }, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + ((bgTileSize + 120 + (menuBTMargin * 2)) * uiScale), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 120 * uiScale, // width
          /* 05 */ 120 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return ((levelsWorld + 1) < 4); }, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W " + (levelsWorld + 1)); }, // text
          /* 02 */ btTxtSize * 0.8, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[1][0][4][1], 9], [uiData[1][0][4][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[1][0][4][1], 9], [uiData[1][0][4][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { levelsWorld = Math.min(3, levelsWorld + 1); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 05 */ Back Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (bgTileSize * uiScale), // x pos
          /* 03 */ (height / 2) + (bgTileSize * uiScale), // y pos
          /* 04 */ (bgTileSize / 2) * uiScale, // width
          /* 05 */ (bgTileSize / 2) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Back", // text
          /* 02 */ btTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[1][0][5][1], 9], [uiData[1][0][5][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[1][0][5][1], 9], [uiData[1][0][5][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Current World Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (bgTileSize * uiScale), // x pos
          /* 03 */ (height / 2) + (bgTileSize * uiScale), // y pos
          /* 04 */ (bgTileSize / 2) * uiScale, // width
          /* 05 */ (bgTileSize / 2) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Back", // text
          /* 02 */ btTxtSize * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
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

    [ // /* 01 */ World 1 State

      /* 00 */ function() { return (levelsWorld == 1); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ levelBTSize * uiScale, // width
          /* 05 */ levelBTSize * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ function() { return 5 + (levelData[0][((v * hNum) + h)][0] * 10) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[0].length; }, // items
          /* 15 */ function() { return 4; }, // h-number
          /* 16 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return levelBTOffset * uiScale; }, // x-offset
          /* 18 */ function() { return levelBTOffset * uiScale; }, // y-offset
          /* 19 */ function() { return -levelBTOffset * uiScale; }, // x-offset (new line)
          /* 20 */ function() { return levelBTOffset * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return levelData[0][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 40 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 200, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[0][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ function() { return !levelData[0][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return lockedIcon; }, // image
          /* 02 */ (levelBTSize - 24) * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ]

    ],

    [ // /* 02 */ World 2 State

      /* 00 */ function() { return (levelsWorld == 2); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ levelBTSize * uiScale, // width
          /* 05 */ levelBTSize * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ function() { return 5 + (levelData[1][((v * hNum) + h)][0] * 10) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[1].length; }, // items
          /* 15 */ function() { return 4; }, // h-number
          /* 16 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return levelBTOffset * uiScale; }, // x-offset
          /* 18 */ function() { return levelBTOffset * uiScale; }, // y-offset
          /* 19 */ function() { return -levelBTOffset * uiScale; }, // x-offset (new line)
          /* 20 */ function() { return levelBTOffset * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return levelData[1][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 40 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ function() { return 25 + (levelData[1][((v * hNum) + h)][0] * 175) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[1][((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ function() { return !levelData[1][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return lockedIcon; }, // image
          /* 02 */ (levelBTSize - 24) * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ]

    ],

    [ // /* 03 */ World 3 State

      /* 00 */ function() { return (levelsWorld == 3); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ levelBTSize * uiScale, // width
          /* 05 */ levelBTSize * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ function() { return 5 + (levelData[2][((v * hNum) + h)][0] * 10) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale, // outline-width

          // List Settings

          /* 14 */ function() { return levelData[2].length; }, // items
          /* 15 */ function() { return 4; }, // h-number
          /* 16 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 17 */ function() { return levelBTOffset * uiScale; }, // x-offset
          /* 18 */ function() { return levelBTOffset * uiScale; }, // y-offset
          /* 19 */ function() { return -levelBTOffset * uiScale; }, // x-offset (new line)
          /* 20 */ function() { return levelBTOffset * uiScale; } // y-offset (new line)
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return levelData[2][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 40 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ function() { return 25 + (levelData[2][((v * hNum) + h)][0] * 175) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[2][((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 50; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ function() { return !levelData[2][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return lockedIcon; }, // image
          /* 02 */ (levelBTSize - 24) * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ]

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
          /* 04 */ 250 * uiScale, // width
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
          /* 01 */ function() { return ("W " + world + "   /   L " + level); }, // text
          /* 02 */ btTxtSize * 0.8, // text-size
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
          /* 04 */ 250 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Reset", // text
          /* 02 */ btTxtSize, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][3][1], 9], [uiData[2][0][3][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][3][1], 9], [uiData[2][0][3][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
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
          /* 09 */ btFill, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ btStr, // outline-alpha
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][4][1], 9], [uiData[2][0][4][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][4][1], 9], [uiData[2][0][4][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return menuIconIMG; }, // image
          /* 02 */ 38 * uiScale, // image-size
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
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { let txt = "Off"; if (designMode) { txt = "On"; } return ("Design Mode: " + txt); }, // text
          /* 02 */ btTxtSize * 0.7, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][5][1], 9], [uiData[2][0][5][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][5][1], 9], [uiData[2][0][5][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
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
          /* 04 */ 250 * uiScale, // width
          /* 05 */ 96 * uiScale, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Next", // text
          /* 02 */ btTxtSize, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][1][1][1], 9], [uiData[2][1][1][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][1][1][1], 9], [uiData[2][1][1][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
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
          /* 04 */ (tileSize * tiles) * uiScale, // width
          /* 05 */ (tileSize * tiles) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ 4 * uiScale // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "Success!", // text
          /* 02 */ 60 * uiScale, // text-size
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return checkMarkIcon; }, // image
          /* 02 */ 180 * uiScale, // image-size
          /* 03 */ 40, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
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

      /* 00 */ function() { return (levelData[world - 1][level - 1][5][2] * (solved != 1)); }, // state (0 = off, 1 = on)

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

      /* 00 */ function() { return (levelData[world - 1][level - 1][5][3]  * (solved != 1)); }, // state (0 = off, 1 = on)

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
          /* 01 */ function() { boxOp = 16;  uiData[2][4][5][4][0] = 1; if (uiHover2 != elementID) { animateUIElement([[uiData[2][4][5][1], 9]], [0], [80], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { uiData[2][4][5][4][0] = 0; animateUIElement([[uiData[2][4][5][1], 9]], [80], [0], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(0, 0, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 60 * uiScale, // image-size
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
          /* 01 */ function() { boxOp = 16; uiData[2][4][6][4][0] = 1; if (uiHover2 != elementID) { animateUIElement([[uiData[2][4][6][1], 9]], [0], [80], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { uiData[2][4][6][4][0] = 0; animateUIElement([[uiData[2][4][6][1], 9]], [80], [0], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(1, 0, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 60 * uiScale, // image-size
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
          /* 01 */ function() { boxOp = 16; uiData[2][4][7][4][0] = 1; if (uiHover2 != elementID) { animateUIElement([[uiData[2][4][7][1], 9]], [0], [80], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { uiData[2][4][7][4][0] = 0; animateUIElement([[uiData[2][4][7][1], 9]], [80], [0], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 60 * uiScale, // image-size
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
          /* 01 */ function() { boxOp = 16; uiData[2][4][8][4][0] = 1; if (uiHover2 != elementID) { animateUIElement([[uiData[2][4][8][1], 9]], [0], [80], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { uiData[2][4][8][4][0] = 0; animateUIElement([[uiData[2][4][8][1], 9]], [80], [0], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { rotateCornerTiles(0, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 60 * uiScale, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Highlight Corner Tiles (Top)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) - (tileSize * ((tiles - 3) / 4)); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerLeft; }, // image
          /* 02 */ function() { return (max(tileSize * ((tiles - 2) / 3.6), 160) * uiScale); }, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 06 */ Highlight Corner Tiles (Right)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + (tileSize * ((tiles - 3) / 4)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 2, // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerLeft; }, // image
          /* 02 */ function() { return (max(tileSize * ((tiles - 2) / 3.6), 160) * uiScale); }, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 07 */ Highlight Corner Tiles (Bottom)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) + (tileSize * ((tiles - 3) / 4)); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 2, // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerLeft; }, // image
          /* 02 */ function() { return (max(tileSize * ((tiles - 2) / 3.6), 160) * uiScale); }, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 08 */ Highlight Corner Tiles (Left)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - (tileSize * ((tiles - 3) / 4)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles - 1) / 4)); }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 50, // outline-alpha
          /* 13 */ 2, // outline-width
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCornerLeft; }, // image
          /* 02 */ function() { return (max(tileSize * ((tiles - 2) / 3.6), 160) * uiScale); }, // image-size
          /* 03 */ 0, // image-alpha
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],
    ],
  ],

  [   // /* 03 */ Settings

  ]

];
