// TERMINOLOGIES :-

/*
    1. Reducer Function: They are ULTIMATELY responsible to change the state.
                         This function needs to be a PURE function.

    2. Action Object: Action object is an Object with intent.
                      example: actionObject = {
                                type: "shop"
                               }
                
    3. Dispatch: actionObject will transport from this layer. 
                 It's primary work is to deliver actionObject to reducer function.
*/
