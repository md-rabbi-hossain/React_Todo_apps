import setlocalStoarage from "./localstorage";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload }] }
        case "REMOVE_TO_DO":
            const rest = state.tasks.filter((item) => item.id !== action.payload);
            setlocalStoarage({ ...state, tasks: rest })
            return {
                ...state,
                tasks: rest
            }
        case "UPDATE_TASK":
            const updated = state.tasks.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, text: action.payload.upadate }
                }
                return item;
            })
            setlocalStoarage({ ...state, tasks: updated })
            return {
                ...state,
                tasks: updated
            }
        default:
            return state
    }
}
export default reducer