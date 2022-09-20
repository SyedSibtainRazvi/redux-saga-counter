export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_ASYNC = "INCREMENT_ASYNC";
export const EVEN_INCREMENT = "EVEN_INCREMENT"

export function reducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case EVEN_INCREMENT:
            if (state % 2 === 0) {
                return state + 1
            } else
                return state
        default:
            return state;
    }
}
