
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Play Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][4][1], 9], [uiData[0][0][1][4], 2], [uiData[0][0][7][2], 4]], [0, 80, 0], [5, 94, 100], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][4][1], 9], [uiData[0][0][1][4], 2], [uiData[0][0][7][2], 4]], [5, 94, 100], [0, 80, 0], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ playIcon, // image
          /* 02 */ 80, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Levels Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 3), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][5][1], 9], [uiData[0][0][2][4], 2], [uiData[0][0][8][2], 4]], [0, 80, 0], [5, 94, 100], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][5][1], 9], [uiData[0][0][2][4], 2], [uiData[0][0][8][2], 4]], [5, 94, 100], [0, 80, 0], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { uiData[1][0][4 + levelsWorld][2][4] = 50; uiData[1][0][4 + levelsWorld][1][9] = 0; uiData[1][0][4 + world][1][9] = 10; uiData[1][0][4 + world][2][4] = 255; levelsWorld = world; state = 1; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ levelsIcon, // image
          /* 02 */ 80, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Settings Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[0][0][6][1], 9], [uiData[0][0][3][4], 2], [uiData[0][0][9][2], 4]], [0, 80, 0], [5, 94, 100], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[0][0][6][1], 9], [uiData[0][0][3][4], 2], [uiData[0][0][9][2], 4]], [5, 94, 100], [0, 80, 0], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { /* Open Settings Menu */ } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ settingsIcon, // image
          /* 02 */ 80, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Play Button Highlight

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#94bdff'), // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 05 */ Levels Button Highlight

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 3), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#fff799'), // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 06 */ Settings Button Highlight

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize * 3, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ color('#ff9999'), // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 07 */ Play Button Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + menuTileSize, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("C O N T I N U E    W " + world + "  /  L " + level); }, // text
          /* 02 */ 20, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 08 */ Levels Button Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) + menuTileSize, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("L E V E L S    ( " + overallPerc + " % )"); }, // text
          /* 02 */ 20 , // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 09 */ Settings Button Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) + menuTileSize, // y pos
          /* 04 */ menuTileSize * 3, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("S E T T I N G S"); }, // text
          /* 02 */ 20 , // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 10 */ Dot 1 Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 4.5), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 11 */ Dot 2 Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 4.5), // x pos
          /* 03 */ (height / 2) + (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 12 */ Dot 3 Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 1.5), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 13 */ Dot 4 Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 1.5), // x pos
          /* 03 */ (height / 2) + (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 14 */ Dot 5 Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 1.5), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 15 */ Dot 6 Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 1.5), // x pos
          /* 03 */ (height / 2) + (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 16 */ Dot 7 Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 4.5), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 17 */ Dot 8 Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) + (menuTileSize * 4.5), // x pos
          /* 03 */ (height / 2) + (menuTileSize * 1.5), // y pos
          /* 04 */ 8, // width
          /* 05 */ 8, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 50, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0 , // text-size
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

      [ // /* 18 */ World and Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
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
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
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

      [ // /* 19 */ Game Name

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
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
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
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

      [ // /* 01 */ Back Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 2), // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "B A C K", // text
          /* 02 */ 20, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 100, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[1][0][1][1], 9], [uiData[1][0][1][4], 2], [uiData[1][0][2][1], 9]], [0, 16, 155], [10, 18, 0], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[1][0][1][1], 9], [uiData[1][0][1][4], 2], [uiData[1][0][2][1], 9]], [10, 18, 0], [0, 16, 155], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowLeftIcon; }, // image
          /* 02 */ 16 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Back Button Hover

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 2), // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 105, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 03 */ Current World Progress Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - (menuTileSize * 2), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W O R L D   " + levelsWorld + "   P R O G R E S S   ( " + (unlockedLevel[levelsWorld - 1] - 1) + "   /   " + levelData[levelsWorld - 1].length + " )"); }, // text
          /* 02 */ 20, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 150, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Current World Progress Bar

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 1.5), // x pos
          /* 03 */ (height / 2) - (menuTileSize * 1.5), // y pos
          /* 04 */ function() { return (menuTileSize * 3 * ((unlockedLevel[levelsWorld - 1] - 1) / levelData[levelsWorld - 1].length)); }, // width
          /* 05 */ 2 * uiScale, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[levelsWorld - 1]; }, // colour
          /* 09 */ 255, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 05 */ World 1 Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[0]; }, // colour
          /* 09 */ function() { return ((levelsWorld == 1) * 10); }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "W 1", // text
          /* 02 */ 24, // text-size
          /* 03 */ function() { return worldColours[0]; }, // text-colour
          /* 04 */ function() { return (50 + ((levelsWorld == 1) * 205)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { if (levelsWorld != 1) { animateUIElement([[uiData[1][0][5][2], 4]], [50], [255], btHovInSpd, 0); } animateUIElement([[uiData[1][0][5][1], 9], [uiData[1][0][5][2], 2]], [0 + ((levelsWorld == 1) * 10), 24], [10 + ((levelsWorld == 1) * 10), 26], btHovInSpd, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if (levelsWorld != 1) { animateUIElement([[uiData[1][0][5][2], 4]], [255], [50], btHovOutSpd, 0); } animateUIElement([[uiData[1][0][5][1], 9], [uiData[1][0][5][2], 2]], [10 + ((levelsWorld == 1) * 10), 26], [((levelsWorld == 1) * 10), 24], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (levelsWorld != 1) { animateUIElement([[uiData[1][0][5][1], 9], [uiData[1][0][4 + levelsWorld][2], 4], [uiData[1][0][4 + levelsWorld][1], 9]], [10, 255, 10 + ((levelsWorld == 1) * 10)], [20, 50, ((levelsWorld == 1) * 10)], btHovOutSpd, 0); levelsWorld = 1; } } // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ World 2 Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[1]; }, // colour
          /* 09 */ function() { return ((levelsWorld == 2) * 10); }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "W 2", // text
          /* 02 */ 24, // text-size
          /* 03 */ function() { return worldColours[1]; }, // text-colour
          /* 04 */ function() { return (50 + ((levelsWorld == 2) * 205)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { if (levelsWorld != 2) { animateUIElement([[uiData[1][0][6][2], 4]], [50], [255], btHovInSpd, 0); } animateUIElement([[uiData[1][0][6][1], 9], [uiData[1][0][6][2], 2]], [0 + ((levelsWorld == 2) * 10), 24], [10 + ((levelsWorld == 2) * 10), 26], btHovInSpd, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if (levelsWorld != 2) { animateUIElement([[uiData[1][0][6][2], 4]], [255], [50], btHovOutSpd, 0); } animateUIElement([[uiData[1][0][6][1], 9], [uiData[1][0][6][2], 2]], [10 + ((levelsWorld == 2) * 10), 26], [((levelsWorld == 2) * 10), 24], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (levelsWorld != 2) { animateUIElement([[uiData[1][0][6][1], 9], [uiData[1][0][4 + levelsWorld][2], 4], [uiData[1][0][4 + levelsWorld][1], 9]], [10, 255, 10 + ((levelsWorld == 2) * 10)], [20, 50, ((levelsWorld == 2) * 10)], btHovOutSpd, 0); levelsWorld = 2; } } // onClick event (0 = no event)
        ]
      ],

      [ // /* 07 */ World 3 Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) + menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[2]; }, // colour
          /* 09 */ function() { return ((levelsWorld == 3) * 10); }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "W 3", // text
          /* 02 */ 24, // text-size
          /* 03 */ function() { return worldColours[2]; }, // text-colour
          /* 04 */ function() { return (50 + ((levelsWorld == 3) * 205)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { if (levelsWorld != 3) { animateUIElement([[uiData[1][0][7][2], 4]], [50], [255], btHovInSpd, 0); } animateUIElement([[uiData[1][0][7][1], 9], [uiData[1][0][7][2], 2]], [0 + ((levelsWorld == 3) * 10), 24], [10 + ((levelsWorld == 3) * 10), 26], btHovInSpd, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if (levelsWorld != 3) { animateUIElement([[uiData[1][0][7][2], 4]], [255], [50], btHovOutSpd, 0); } animateUIElement([[uiData[1][0][7][1], 9], [uiData[1][0][7][2], 2]], [10 + ((levelsWorld == 3) * 10), 26], [((levelsWorld == 3) * 10), 24], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (levelsWorld != 3) { animateUIElement([[uiData[1][0][7][1], 9], [uiData[1][0][4 + levelsWorld][2], 4], [uiData[1][0][4 + levelsWorld][1], 9]], [10, 255, 10 + ((levelsWorld == 3) * 10)], [20, 50, ((levelsWorld == 3) * 10)], btHovOutSpd, 0); levelsWorld = 3; } } // onClick event (0 = no event)
        ]
      ],

      [ // /* 08 */ World 4 Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (menuTileSize * 3), // x pos
          /* 03 */ (height / 2) + (menuTileSize * 2), // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[3]; }, // colour
          /* 09 */ function() { return ((levelsWorld == 4) * 10); }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "W 4", // text
          /* 02 */ 24, // text-size
          /* 03 */ function() { return worldColours[3]; }, // text-colour
          /* 04 */ function() { return (50 + ((levelsWorld == 4) * 205)); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { if (levelsWorld != 4) { animateUIElement([[uiData[1][0][8][2], 4]], [50], [255], btHovInSpd, 0); } animateUIElement([[uiData[1][0][8][1], 9], [uiData[1][0][8][2], 2]], [0 + ((levelsWorld == 4) * 10), 24], [10 + ((levelsWorld == 4) * 10), 26], btHovInSpd, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { if (levelsWorld != 4) { animateUIElement([[uiData[1][0][8][2], 4]], [255], [50], btHovOutSpd, 0); } animateUIElement([[uiData[1][0][8][1], 9], [uiData[1][0][8][2], 2]], [10 + ((levelsWorld == 4) * 10), 26], [((levelsWorld == 4) * 10), 24], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (levelsWorld != 4) { animateUIElement([[uiData[1][0][8][1], 9], [uiData[1][0][4 + levelsWorld][2], 4], [uiData[1][0][4 + levelsWorld][1], 9]], [10, 255, 10 + ((levelsWorld == 4) * 10)], [20, 50, ((levelsWorld == 4) * 10)], btHovOutSpd, 0); levelsWorld = 4; } } // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 01 */ World 1 State

      /* 00 */ function() { return (levelsWorld == 1); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[0].length; }, // items
          /* 16 */ function() { return 3; }, // h-number
          /* 17 */ function() { return 3; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ function() { return worldColours[0]; }, // text-colour
          /* 04 */ function() { return 25 + (levelData[0][((v * hNum) + h)][0] * 225); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ function() { return fontItalic; } // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[0][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 5; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Levels BG Circle.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ (menuTileSize / 2), // width
          /* 05 */ (menuTileSize / 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[0]; }, // colour
          /* 09 */ function() { if (unlockedLevel[0] > ((v * hNum) + h + 1)) { return 15; } else { return 0; } }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[0].length; }, // items
          /* 16 */ function() { return 3; }, // h-number
          /* 17 */ function() { return 3; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ 0 // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]

    ],

    [ // /* 02 */ World 2 State

      /* 00 */ function() { return (levelsWorld == 2); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[1].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ function() { return worldColours[1]; }, // text-colour
          /* 04 */ function() { return 25 + (levelData[1][((v * hNum) + h)][0] * 225); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ function() { return fontItalic; } // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[1][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 5; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Levels BG Circle.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ (menuTileSize / 2), // width
          /* 05 */ (menuTileSize / 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[1]; }, // colour
          /* 09 */ function() { if (unlockedLevel[1] > ((v * hNum) + h + 1)) { return 15; } else { return 0; } }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[2].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ 0 // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]

    ],

    [ // /* 03 */ World 3 State

      /* 00 */ function() { return (levelsWorld == 3); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[2].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ function() { return worldColours[2]; }, // text-colour
          /* 04 */ function() { return 25 + (levelData[2][((v * hNum) + h)][0] * 225); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ function() { return fontItalic; } // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[2][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 5; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Levels BG Circle.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ (menuTileSize / 2), // width
          /* 05 */ (menuTileSize / 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[2]; }, // colour
          /* 09 */ function() { if (unlockedLevel[2] > ((v * hNum) + h + 1)) { return 15; } else { return 0; } }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[2].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ 0 // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ]

    ],

    [ // /* 04 */ World 4 State

      /* 00 */ function() { return (levelsWorld == 4); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Levels List.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ menuTileSize, // width
          /* 05 */ menuTileSize, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[3].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 30 * uiScale, // text-size
          /* 03 */ function() { return worldColours[3]; }, // text-colour
          /* 04 */ function() { return 25 + (levelData[3][((v * hNum) + h)][0] * 225); }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ function() { return fontItalic; } // text-font
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[3][((v * hNum) + h)][0]; }, // state (0 = off, 1 = on)
          /* 01 */ function() { boxOp = 5; }, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ function() { world = levelsWorld; level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Levels BG Circle.

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - menuTileSize, // x pos
          /* 03 */ (height / 2) - menuTileSize, // y pos
          /* 04 */ (menuTileSize / 2), // width
          /* 05 */ (menuTileSize / 2), // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ function() { return worldColours[3]; }, // colour
          /* 09 */ function() { if (unlockedLevel[3] > ((v * hNum) + h + 1)) { return 15; } else { return 0; } }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return levelData[3].length; }, // items
          /* 16 */ function() { return 4; }, // h-number
          /* 17 */ function() { return 4; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return menuTileSize; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return menuTileSize; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // text
          /* 02 */ 0, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 0, // text-alpha
          /* 05 */ 0, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ 0 // text-font
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

  [   // /* 02 */ Puzzle UI

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ 80 * uiScale, // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W " + world + "   /   L " + level); }, // text
          /* 02 */ 34 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 120, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Steps Text/Success/Fail

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return ((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2; }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 120 * uiScale, // width
          /* 05 */ 120 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ function() { return gameState == 1; }, // state (0 = off, 1 = on)
          /* 01 */ function() { return steps; }, // text
          /* 02 */ 96 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontLightItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ function() { return gameState > 1; }, // state (0 = off, 1 = on)
          /* 01 */ function() { if (gameState == 2) { return checkmarkIcon; } else if (gameState == 3) { return xIcon; } }, // image
          /* 02 */ 88 * uiScale, // image-width (or size)
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Reset Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return ((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2; }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ "Reset", // text
          /* 02 */ btTxtSize, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ -1, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][3][1], 9], [uiData[2][0][3][4], 2], [uiData[2][0][9][1], 9]], [0, 52 * uiScale, 200], [5, 60 * uiScale, 0], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][3][1], 9], [uiData[2][0][3][4], 2], [uiData[2][0][9][1], 9]], [5, 60 * uiScale, 0], [0, 52 * uiScale, 200], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { prepareLevelData(); gameState = 1; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ resetIcon, // image
          /* 02 */ 52 * uiScale, // image-width (or size)
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][4][1], 9], [uiData[2][0][4][4], 2], [uiData[2][0][14][1], 9]], [0, 54 * uiScale, 200], [5, 60 * uiScale, 0], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][4][1], 9], [uiData[2][0][4][4], 2], [uiData[2][0][14][1], 9]], [5, 60 * uiScale, 0], [0, 54 * uiScale, 200], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { state = 0; } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return menuIconIMG; }, // image
          /* 02 */ 54 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Design Mode Toggle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2.2); }, // x pos
          /* 03 */ function() { return ((height / 2) + (tileSize * ((tiles + 1) / 2))); }, // y pos
          /* 04 */ 160 * uiScale, // width
          /* 05 */ 160 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ btStrWidth, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { let txt = "Off"; if (designMode) { txt = "On"; } return ("DM: " + txt); }, // text
          /* 02 */ btTxtSize * 0.7, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][0][5][1], 9], [uiData[2][0][5][1], 12]], [btFill, btStr], [btFillHov, btStrHov], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][0][5][1], 9], [uiData[2][0][5][1], 12]], [btFillHov, btStrHov], [btFill, btStr], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { designMode = !designMode; if (designMode) { gameState = 1; } else { if (steps < 1) { gameState = 3; } } } // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Active Mechanics Used in Level

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) + (12 * uiScale); }, // x pos
          /* 03 */ function() { return (260 * uiScale); }, // y pos
          /* 04 */ 55, // width
          /* 05 */ 55, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return activeMechanics.length; }, // items
          /* 16 */ function() { return 1; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 76 * uiScale; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return gameMechanicIcons[activeMechanics[(v * hNum) + h]]; }, // image
          /* 02 */ 62 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 07 */ Steps Underline

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ (height / 2) + (66 * uiScale), // y pos
          /* 04 */ 26 * uiScale, // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ function() { return cc; }, // outline-colour
          /* 12 */ 255, // outline-alpha
          /* 13 */ 4, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 08 */ Steps Underline Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ (height / 2) + (92 * uiScale), // y pos
          /* 04 */ 120 * uiScale, // width
          /* 05 */ 120 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (gameState == 1) { return "S T E P S"; } else if (gameState == 2) { return "S O L V E D"; } else if (gameState == 3) { return "F A I L E D"; }}, // text
          /* 02 */ 17 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 120, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5, // text-v-align
          /* 07 */ fontItalic
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 09 */ Reset Button Hover

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return ((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2; }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 150, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 10 */ Reset Button Box Outline Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) - (tileSize / 2); }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)); }, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 2; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 2; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 11 */ Reset Button Box Outline Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) + (tileSize / 2); }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)); }, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 2; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 2; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 12 */ Reset Button Box Outline Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)) - (tileSize / 2); }, // y pos
          /* 04 */ function() { return tileSize * 2; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 2; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 13 */ Reset Button Box Outline Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (height - (260 * uiScale)) + (tileSize / 2); }, // y pos
          /* 04 */ function() { return tileSize * 2; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 2; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 14 */ Menu Button Hover

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 150, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 15 */ Menu Button Box Outline Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) - (tileSize / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale); }, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 2; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 2; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 16 */ Menu Button Box Outline Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) + (tileSize / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale); }, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 2; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 2; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 17 */ Menu Button Box Outline Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale) - (tileSize / 2); }, // y pos
          /* 04 */ function() { return tileSize * 2; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 2; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 18 */ Menu Button Box Outline Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (260 * uiScale) + (tileSize / 2); }, // y pos
          /* 04 */ function() { return tileSize * 2; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 2; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 19 */ Steps Highlight Circle

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)// Is the cursor on a tile?
          /* 02 */ function() { return ((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2; }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 1, // outline-width
          /* 14 */ 0 // rot-angle
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
      ]
    ],

    [ // /* 01 */ Level Completed

      /* 00 */ function() { return (gameState == 2); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Next Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize * 2; }, // width
          /* 05 */ function() { return tileSize * 2; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][1][1][1], 9], [uiData[2][1][1][4], 2], [uiData[2][1][2][1], 9]], [0, 60 * uiScale, 200], [5, 70 * uiScale, 0], btHovInSpd, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][1][1][1], 9], [uiData[2][1][1][4], 2], [uiData[2][1][2][1], 9]], [5, 70 * uiScale, 0], [0, 60 * uiScale, 200], btHovOutSpd, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { nextLevel(); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return nextLevelIcon; }, // image
          /* 02 */ 60 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Menu Button Hover

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 3, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 150, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 03 */ Menu Button Box Outline Left

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) - tileSize; }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 4; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 4; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Menu Button Box Outline Right

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2) + tileSize; }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 1, // width
          /* 05 */ function() { return tileSize * 4; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineV, // image
          /* 02 */ 1, // image-width (or size)
          /* 03 */ function() { return tileSize * 4; }, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Menu Button Box Outline Top

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (height / 2) - tileSize; }, // y pos
          /* 04 */ function() { return tileSize * 4; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 4; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 06 */ Menu Button Box Outline Bottom

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return width - (((width / 2) - (((tiles + 2) / 2) * tileSize)) / 2); }, // x pos
          /* 03 */ function() { return (height / 2) + tileSize; }, // y pos
          /* 04 */ function() { return tileSize * 4; }, // width
          /* 05 */ 1, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ gradientLineH, // image
          /* 02 */ function() { return tileSize * 4; }, // image-width (or size)
          /* 03 */ 1, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0, // image-v-align
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 13 */ 4 * uiScale, // outline-width
          /* 14 */ 0 // rot-angle
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

      /* 00 */ function() { return (levelData[world - 1][level - 1][5][2] * (gameState == 1)); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Shift Column (Top)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) - (tileSize * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return tileSize; }, // x-offset (spacing)
          /* 19 */ function() { return 0; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { boxOp = 8; if (uiHover2 != elementID) { lineShiftHover = [-1, uiSelectedIndex - 1, -1]; animateUIElement([[uiData[2][3][9][1][9], uiSelectedIndex - 1], [uiData[2][3][5][1][9], uiSelectedIndex - 1]], [0, 230], [2, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { lineShiftHover[2] = 0; animateUIElement([[uiData[2][3][9][1][9], uiSelectedIndex - 1], [uiData[2][3][5][1][9], uiSelectedIndex - 1]], [2, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(-1, uiSelectedIndex - 1, -1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowTopIcon; }, // image
          /* 02 */ 20 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Shift Row (Right)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + (tileSize * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset (spacing)
          /* 19 */ function() { return tileSize; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { boxOp = 8; if (uiHover2 != elementID) { lineShiftHover = [uiSelectedIndex - 1, -1, 1]; animateUIElement([[uiData[2][3][10][1][9], uiSelectedIndex - 1], [uiData[2][3][6][1][9], uiSelectedIndex - 1]], [0, 230], [2, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { lineShiftHover[2] = [0]; animateUIElement([[uiData[2][3][10][1][9], uiSelectedIndex - 1], [uiData[2][3][6][1][9], uiSelectedIndex - 1]], [2, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(uiSelectedIndex - 1, -1, 1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowRightIcon; }, // image
          /* 02 */ 20 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Shift Column (Bottom)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) + (tileSize * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return tileSize; }, // x-offset (spacing)
          /* 19 */ function() { return 0; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { boxOp = 8; if (uiHover2 != elementID) { lineShiftHover = [-1, uiSelectedIndex - 1, 1]; animateUIElement([[uiData[2][3][9][1][9], uiSelectedIndex - 1], [uiData[2][3][7][1][9], uiSelectedIndex - 1]], [0, 230], [2, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { lineShiftHover[2] = 0; animateUIElement([[uiData[2][3][9][1][9], uiSelectedIndex - 1], [uiData[2][3][7][1][9], uiSelectedIndex - 1]], [2, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(-1, uiSelectedIndex - 1, 1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowBottomIcon; }, // image
          /* 02 */ 20 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Shift Row (Left)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle, 4 = rotated rect)
          /* 02 */ function() { return (width / 2) - (tileSize * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset (spacing)
          /* 19 */ function() { return tileSize; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
          /* 01 */ function() { boxOp = 8; if (uiHover2 != elementID) { lineShiftHover = [uiSelectedIndex - 1, -1, -1]; animateUIElement([[uiData[2][3][10][1][9], uiSelectedIndex - 1], [uiData[2][3][8][1][9], uiSelectedIndex - 1]], [0, 230], [2, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { lineShiftHover[2] = 0; animateUIElement([[uiData[2][3][10][1][9], uiSelectedIndex - 1], [uiData[2][3][8][1][9], uiSelectedIndex - 1]], [2, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { shiftTileLine(uiSelectedIndex - 1, -1, -1, 1, 1); } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return arrowLeftIcon; }, // image
          /* 02 */ 20 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Shift Column Hover (Top)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) - (tileSize * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ [-1, 230], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return tileSize; }, // x-offset (spacing)
          /* 19 */ function() { return 0; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHoverIn event (0 = no event)
          /* 02 */ 0, // onHoverOut event (0 = no event)
          /* 03 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 06 */ Shift Row Hover (Right)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + (tileSize * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ [-1, 230], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset (spacing)
          /* 19 */ function() { return tileSize; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 07 */ Shift Column Hover (Bottom)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ function() { return (height / 2) + (tileSize * (Math.ceil(tiles / 2))); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ [-1, 230], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return tileSize; }, // x-offset (spacing)
          /* 19 */ function() { return 0; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 08 */ Shift Row Hover (Left)

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle, 4 = rotated rect)
          /* 02 */ function() { return (width / 2) - (tileSize * (Math.ceil(tiles / 2))); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ [-1, 230], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset (spacing)
          /* 19 */ function() { return tileSize; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 09 */ Shift Column Highlight

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize * tiles; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ [-1, 0], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return tileSize; }, // x-offset (spacing)
          /* 19 */ function() { return 0; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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

      [ // /* 10 */ Shift Row Highlight

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ function() { return tileSize * tiles; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ [-1, 0], // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return tiles; }, // items
          /* 16 */ function() { return tiles; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset (spacing)
          /* 19 */ function() { return tileSize; }, // y-offset (spacing)
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 0; }, // y-offset (new line)
          /* 22 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
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
    ],

    [ // /* 04 */ Corner Tiles Rotation

      /* 00 */ function() { return (levelData[world - 1][level - 1][5][3]  * (gameState == 1)); }, // state (0 = off, 1 = on)

      [ // /* 01 */ Rotate Corner Tiles (Top Left)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { boxOp = 8;  uiData[2][4][5][4][0] = 0; if (uiHover2 != elementID) { cornerRotHover = [0, 0]; animateUIElement([[uiData[2][4][5][1], 9], [uiData[2][4][9][1], 9]], [0, 230], [5, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { cornerRotHover[0] = -1; uiData[2][4][5][4][0] = 0; animateUIElement([[uiData[2][4][5][1], 9], [uiData[2][4][9][1], 9]], [5, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (puzzleAnimTimer == 0) { rotateCornerTiles(0, 0, 1, 1); } } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 24 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 02 */ Rotate Corner Tiles (Top Right)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { boxOp = 8;  uiData[2][4][6][4][0] = 0; if (uiHover2 != elementID) { cornerRotHover = [1, 0]; animateUIElement([[uiData[2][4][6][1], 9], [uiData[2][4][10][1], 9]], [0, 230], [5, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { cornerRotHover[0] = -1; uiData[2][4][6][4][0] = 0; animateUIElement([[uiData[2][4][6][1], 9], [uiData[2][4][10][1], 9]], [5, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (puzzleAnimTimer == 0) { rotateCornerTiles(1, 0, 1, 1); } } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 24 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 03 */ Rotate Corner Tiles (Bottom Right)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { boxOp = 8;  uiData[2][4][7][4][0] = 0; if (uiHover2 != elementID) { cornerRotHover = [1, 1]; animateUIElement([[uiData[2][4][7][1], 9], [uiData[2][4][11][1], 9]], [0, 230], [5, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { cornerRotHover[0] = -1; uiData[2][4][7][4][0] = 0; animateUIElement([[uiData[2][4][7][1], 9], [uiData[2][4][11][1], 9]], [5, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (puzzleAnimTimer == 0) { rotateCornerTiles(1, 1, 1, 1); } } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 24 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Rotate Corner Tiles (Bottom Left)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ function() { boxOp = 8;  uiData[2][4][8][4][0] = 0; if (uiHover2 != elementID) { cornerRotHover = [0, 1]; animateUIElement([[uiData[2][4][8][1], 9], [uiData[2][4][12][1], 9]], [0, 230], [5, 0], 6, 0); } }, // onHoverIn event (0 = no event)
          /* 02 */ function() { cornerRotHover[0] = -1; uiData[2][4][8][4][0] = 0; animateUIElement([[uiData[2][4][8][1], 9], [uiData[2][4][12][1], 9]], [5, 0], [0, 230], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { if (puzzleAnimTimer == 0) { rotateCornerTiles(0, 1, 1, 1); } } // onClick event (0 = no event)
        ],

        [ // /* 04 */ Image

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return rotCorner; }, // image
          /* 02 */ 24 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Highlight Corner Tiles (Top Left)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 06 */ Highlight Corner Tiles (Top Right)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 07 */ Highlight Corner Tiles (Bottom Right)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 08 */ Highlight Corner Tiles (Bottom Left)

        1, // /* 00 */ Type (1 = single, 2 = list)1

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // width
          /* 05 */ function() { return (tileSize * ((tiles + 1) / 2)); }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 09 */ Rotate Corner Tiles Hover (Top Left)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 230, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 10 */ Rotate Corner Tiles Hover (Top Right)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) - ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 230, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 11 */ Rotate Corner Tiles Hover (Bottom Right)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) + ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 230, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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

      [ // /* 12 */ Rotate Corner Tiles Hover (Bottom Left)

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ function() { return (width / 2) - ((tileSize / 2) * tiles); }, // x pos
          /* 03 */ function() { return (height / 2) + ((tileSize / 2) * tiles); }, // y pos
          /* 04 */ function() { return tileSize; }, // width
          /* 05 */ function() { return tileSize; }, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ ccbg, // colour
          /* 09 */ 230, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
      ]
    ],

    [ // /* 05 */ Pre-Game Info Screen

      /* 00 */ function() { return (gameState == 0); }, // state (0 = off, 1 = on)

      [ // /* 01 */ BG

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
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ 0, // image
          /* 02 */ 0, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 02 */ BG

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
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 255, // outline-colour
          /* 12 */ 25, // outline-alpha
          /* 13 */ btStrWidth, // outline-width
          /* 14 */ 0 // rot-angle
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
          /* 01 */ 0, // image
          /* 02 */ 0, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0, // image-h-align
          /* 05 */ 0, // image-v-align
        ]
      ],

      [ // /* 03 */ World and Level Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - ((bgTileSize / 2.3) * uiScale), // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("W " + world + "   /   L " + level); }, // text
          /* 02 */ 42 * uiScale, // text-size
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
        ],

        [ // /* 04 */ Image

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ function() { return checkMarkIcon; }, // image
          /* 02 */ 180 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 0.5, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 04 */ Active Mechanics Used in Level

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ (width / 2) - (12 * uiScale), // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 280 * uiScale, // width
          /* 05 */ 44 * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0, // rot-angle

          // List Settings

          /* 15 */ function() { return activeMechanics.length; }, // items
          /* 16 */ function() { return 1; }, // h-number
          /* 17 */ function() { return 1; }, // v-number (min, dynamically adjusted)
          /* 18 */ function() { return 0; }, // x-offset
          /* 19 */ function() { return 0; }, // y-offset
          /* 20 */ function() { return 0; }, // x-offset (new line)
          /* 21 */ function() { return 60 * uiScale; }, // y-offset (new line)
          /* 22 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 23 */ 0.5 // v-align (0 = top, 0.5 = centre, 1 = bottom)
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return gameMechanicNames[activeMechanics[(v * hNum) + h]]; }, // text
          /* 02 */ 22 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 120, // text-alpha
          /* 05 */ 0, // text-h-align
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
          /* 01 */ function() { return gameMechanicIcons[activeMechanics[(v * hNum) + h]]; }, // image
          /* 02 */ 55 * uiScale, // image-size
          /* 03 */ 0, // image-height
          /* 04 */ 1, // image-h-align
          /* 05 */ 0.5, // image-v-align
        ]
      ],

      [ // /* 05 */ Start Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 4, // type (1 = rect, 2 = rounded rect, 3 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + ((bgTileSize - (menuBTMargin)) * uiScale), // y pos
          /* 04 */ (bgTileSize / 3.2) * uiScale, // width
          /* 05 */ (bgTileSize / 3.2) * uiScale, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 255, // colour
          /* 09 */ 5, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width
          /* 14 */ 0 // rot-angle
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "S T A R T", // text
          /* 02 */ 24 * uiScale, // text-size
          /* 03 */ 255, // text-colour
          /* 04 */ 255, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { if (uiHover2 != elementID) { animateUIElement([[uiData[2][5][5][1], 9]], [5], [btFillHov], 6, 0); } menuState = 1; }, // onHoverIn event (0 = no event)
          /* 02 */ function() { animateUIElement([[uiData[2][5][5][1], 9]], [btFillHov], [5], 6, 0); }, // onHoverOut event (0 = no event)
          /* 03 */ function() { gameState = 1; } // onClick event (0 = no event)
        ]
      ],
    ],

    [ // /* 06 */ Level Failed

      /* 00 */ function() { return (gameState == 3); }, // state (0 = off, 1 = on)
    ]
  ],

  [   // /* 03 */ Settings

  ]

];
