const initialData = {
    taskItems: []
};
const taskReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskItems: [...state.taskItems, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                taskItems: state.taskItems.filter(task => task.id !== action.payload)
            };
        case 'EDIT_TASK':
            return {
                ...state,
                taskItems: state.taskItems.map(task => {
                    if (task.id === action.payload.id) {
                        return action.payload;
                    }
                    return task;
                }
                )
            };
        default:
            return state;
    }
};
export default taskReducer;