export const    ADD_TODO = 'addTodo', 
                TOGGLE_TODO = 'toggleTodo', 
                DELETE_TODO = 'deleteTodo'

export const todosReducer = (todos, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {   id: crypto.randomUUID(), 
                    title: action.newTitle, 
                    completed: false
                },
            ]
        case TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.todoId) {
                    return {
                        ...todo,
                        completed: action.todoCompleted
                    }
                }
                return todo
            })
        case DELETE_TODO:
            return todos.filter(todo => todo.id !== action.todoId)
        default: 
            throw Error('Unknown action: ' + action.type);
    }
}