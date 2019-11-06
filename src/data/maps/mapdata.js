import store from "../../config/store";
import { setTimeout } from "timers";
const map1 = {
  tiles: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 9],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]
  ],
  interact: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, "it's a rock"],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, "it's a rock"],
    [0, 0, 0, 0, 0]
  ],
  exit: ["RIGHT"],
  playerPos: [[0, 0], [4, 2]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};
let firstTime = false;
function helloPlayer() {
  store.dispatch({
    type: "CHANGE_TEXT",
    payload: {
      ...store.getState().textbox,
      text:
        "OH, hi there. So this game isn't done. I've got some work to do. But feel free to roam around.",
      display: true
    }
  });
  store.dispatch({
    type: "CHANGE_ZONE",
    payload: {
      ...store.getState().zone,
      conditionMet: true
    }
  });
 
}
const map2 = {
  tiles: [
    [3, 3, 2, 3, 3],
    [3, 0, 0, 0, 3],
    [3, 0, 0, 0, 3],
    [3, 0, 0, 0, 3],
    [3, 3, 3, 3, 3]
  ],
  interact: [
    [
      0,
      0,
      "You found a tree. You wonder why it's here, and why you're here as well.",
      0,
      0
    ],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  exit: ["DOWN", "LEFT"],
  playerPos: [[1, 2], [1, 4]],
  rules: function(key, interact) {
    const interactedList = store.getState().player.interacted;
    
    if (
      !firstTime &&
      interactedList.includes(2) &&
      !store.getState().textbox.display
    ) {
      firstTime = true;
      setTimeout(helloPlayer, 2000);
    }
    if (interact != undefined && key === 13) {
      const interactionSpot = store.getState().map.tiles[interact[1]][
        interact[0]
      ];
      interactedList.push(interactionSpot);
      store.dispatch({
        type: "INTERACTED",
        payload: {
          ...store.getState().player,
          interacted: interactedList
        }
      });
    } else if (interact === undefined && key === 13) {
      interactedList.push("WALL");
      store.dispatch({
        type: "INTERACTED",
        payload: {
          ...store.getState().player,
          interacted: interactedList
        }
      });
    }
    if (store.getState().zone.conditionMet && store.getState().map.tiles[4][1] === 3) {
      store.dispatch({
        type: "ADD_TILES",
        payload: {
          ...store.getState().map,
          tiles: [
            [3, 3, 2, 3, 3],
            [3, 0, 0, 0, 3],
            [3, 0, 0, 0, 3],
            [3, 0, 0, 0, 3],
            [3, 9, 3, 3, 3]
          ]
        }
      })
    }
  }
};

const map3 = {
  tiles: [
    [3, 3, 3, 3, 1],
    [3, 0, 0, 0, 1],
    [3, 0, 0, 0, 3],
    [4, 0, 0, 0, 9],
    [4, 3, 1, 3, 3]
  ],
  interact: [
    ["Bush.", "Your path is blocked, you can't go back.", "Bush's baked beans.", "You guessed it, it's a bush.", 0],
    ["It's a bush.", 0, 0, 0, "Can you smell what I'm cooking?"],
    ["Bushes everywhere!", 0, 0, 0, "A bush."],
    ["Traffic cones? Where's the traffic?", 0, 0, 0, 0],
    [
      "Traffic cones? Where's the traffic?",
      "It's a bush.",
      "Still just a rock.",
      "George W.",
      "A Bush."
    ]
  ],
  exit: ["RIGHT", "UP"],
  playerPos: [[1, 0], [4, 3]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};

const map4 = {
  tiles: [
    [1, 3, 0, 0, 3],
    [4, 0, 0, 0, 0],
    [4, 4, 4, 0, 0],
    [8, 0, 4, 0, 0],
    [4, 9, 4, 0, 0]
  ],
  interact: [
    [
      "rock lobster",
      "ANOTHER SHRUBBERY!",
      0,
      0,
      'Is this what the "knights who say ni" wanted?'
    ],
    ["Too many cones.", 0, 0, 0, 0],
    ["why are there cones here?", "Traffic cones.", "More cones.", 0, 0],
    [0, 0, "More cones.", 0, 0],
    ["It's a cone.", 0, "More cones.", 0, 0]
  ],
  exit: ["DOWN", "LEFT"],
  playerPos: [[0, 3], [1, 4]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};
const map5 = {
  tiles: [
      [4, 8, 4, 4, 4],
      [4, 0, 0, 0, 9],
      [4, 4, 4, 4, 4],
      [0, 0, 0, 0, 0],
      [3, 1, 0, 1, 3],
    ],
    interact: [
        ["Just follow the cones.", 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    exit: ["RIGHT", "UP"],
    playerPos: [[1,0],[4, 1]],
    rules: function() {
        if (true) {
          store.dispatch({
            type: "CHANGE_ZONE",
            payload: {
              ...store.getState().zone,
              conditionMet: true
            }
          });
        }
      }
};
const map6 = {
    tiles: [
        [4, 4, 4, 6, 4],
        [8, 0, 0, 0, 4],
        [4, 0, 4, 0, 4],
        [4, 0, 0, 0, 4],
        [4, 4, 4, 9, 4],
      ],
      interact: [
          [0, 0, 0, "A whole heckin` lot of cones eh?", 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
      ],
      exit: ["DOWN", "LEFT"],
      playerPos: [[0,1],[3, 4]],
      rules: function() {
          if (true) {
            store.dispatch({
              type: "CHANGE_ZONE",
              payload: {
                ...store.getState().zone,
                conditionMet: true
              }
            });
          }
        }
  };

  const map7 = {
    tiles: [
      [4, 4, 4, 8, 4],
      [4, 0, 0, 0, 4],
      [4, 0, 4, 4, 4],
      [4, 0, 0, 0, 4],
      [4, 4, 4, 9, 4]
    ],
    interact: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    exit: ["DOWN", "UP"],
    playerPos: [[3, 0], [3, 4]],
    rules: function() {
      if (true) {
        store.dispatch({
          type: "CHANGE_ZONE",
          payload: {
            ...store.getState().zone,
            conditionMet: true
          }
        });
      }
    }
  };  

  const map8 = {
    tiles: [
      [4, 4, 4, 8, 4],
      [4, 0, 0, 0, 4],
      [4, 0, 4, 0, 4],
      [4, 0, 0, 0, 4],
      [4, 4, 4, 4, 4]
    ],
    interact: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    exit: ["DOWN", "UP"],
    playerPos: [[3, 0], [3, 4]],
    rules: function() {
      if (true) {
        store.dispatch({
          type: "CHANGE_ZONE",
          payload: {
            ...store.getState().zone,
            conditionMet: true
          }
        });
      }
    }
  };  
export const mapArray = [
  {
    ...map1
  },
  {
    ...map2
  },
  {
    ...map3
  },
  {
    ...map4
  },
  {
      ...map5
  },
  {
      ...map6
  },
  {
    ...map7
  },
  {
    ...map8
  }
];
