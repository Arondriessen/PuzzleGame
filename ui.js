
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Play Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - 120, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Play", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { menuState = 1; }, // onHover event (0 = no event)
          /* 02 */ function() { prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Levels Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Levels", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { state = 1; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Settings Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + 120, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Settings", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ]
    ]
  ],

  [   // /* 01 */ Levels Menu

    [ // /* 00 */ Default State

      /* 00 */ 1, // state (0 = off, 1 = on)

      [ // /* 01 */ Level Buttons

        2, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ 90, // width
          /* 05 */ 90, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ function() { return 10 + (levelData[((v * hNum) + h)][0] * 10) }, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0, // outline-width

          // List Settings

          /* 14 */ function() { return levelData.length; }, // items
          /* 15 */ 10, // h-number
          /* 16 */ 3, // v-number (min, dynamically adjusted)
          /* 17 */ 110, // x-offset
          /* 18 */ 120 // y-offset
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ((v * hNum) + h + 1); }, // text
          /* 02 */ 54, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ function() { return 25 + (levelData[((v * hNum) + h)][0] * 25) }, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ function() { return levelData[((v * hNum) + h)][0] }, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { level = uiSelectedIndex; prepareLevelData(); state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ 20, // x pos
          /* 03 */ height - 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Back", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { state = 0; } // onClick event (0 = no event)
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

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ 20, // x pos
          /* 03 */ 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("Level " + level); }, // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Steps Text

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 2, // type (1 = rect, 2 = circle)
          /* 02 */ function() { return ((width / 2) - ((mid + 1.4) * tileSize)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 120, // width
          /* 05 */ 120, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return steps; }, // text
          /* 02 */ 70, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 03 */ Reset Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ 20, // x pos
          /* 03 */ height - 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Reset", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { uiData[state][1][0] = 0; prepareLevelData(); } // onClick event (0 = no event)
        ]
      ],

      [ // /* 04 */ Menu Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width - 20, // x pos
          /* 03 */ 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Menu", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { state = 0; } // onClick event (0 = no event)
        ]
      ]
    ],

    [ // /* 01 */ Level Completed

      /* 00 */ 0, // state (0 = off, 1 = on)

      [ // /* 01 */ Next Button

        1, // /* 00 */ Type (1 = single, 2 = list)

        [ // /* 01 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width - 20, // x pos
          /* 03 */ height - 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 1, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 02 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Next", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 03 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { uiData[state][1][0] = 0; nextLevel(); } // onClick event (0 = no event)
        ]
      ]
    ]
  ]

];
