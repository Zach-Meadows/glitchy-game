import store from "../../config/store"
const map1 = {
    tiles: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 9, 0, 0],
        [0, 0, 1, 0, 0]
      ],
    interact: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, "it's a rock", 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, "it's a rock", 0, 0]
      ],
    exit: "RIGHT",
    rules: function() {
        if (true) {    
        store.dispatch({
            type: "CHANGE_ZONE",
            payload: {
                ...store.getState().zone,
                conditionMet: true
            }
        })
    }
    }
}

const map2 = {
    tiles: [
        [0, 0, 2, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
    interact: [
        [0, 0, "You found a tree. You wonder why it's here, and why you're here as well.", 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    exit: "DOWN",
    rules: function(key, interact) {
       
       
        const interactedList = store.getState().player.interacted
        if (interactedList.includes(2) && !store.getState().textbox.display) {
            store.dispatch({
                type: "CHANGE_TEXT",
                payload: {
                    ...store.getState().textbox,
                    text: "OH, hi there. So this game isn't done. I've got some work to do. But feel free to roam around.",
                    display: true
                }
            })
        }
        if (interact != undefined && key === 13) {
    const interactionSpot = store.getState().map.tiles[interact[1]][interact[0]]
      interactedList.push(interactionSpot)
      store.dispatch({
          type: 'INTERACTED',
          payload: {
              ...store.getState().player,
              interacted: interactedList
          }
      })
      } else if(interact === undefined && key === 13){
          interactedList.push("WALL")
          store.dispatch({
              type: "INTERACTED",
              payload: {
                  ...store.getState().player,
                  interacted: interactedList
              }
          })
      }
        
    }
}




export const mapArray = [
    {
       ...map1
    },
    {
        ...map2
    }
]