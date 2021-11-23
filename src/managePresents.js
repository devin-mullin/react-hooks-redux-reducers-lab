export function managePresents(state, action) {
 let state = { presents: 0 }
 let action = {type: "presents/increase"}
 
  switch (action.type) {
   case "presents/increase":
    return {...state, numberOfPresents: state.numberOfPresents + 1 }
    default: 
      return state
 }
}
