export const todosReducer = (todos, action) => {
    switch(action.type) {
        case 'add':
            return [
                ...todos,
                {   id: crypto.randomUUID(), 
                    title: action.newTitle, 
                    completed: false
                },
            ]
        case 'toggle':
            return todos.map(todo => {
                if (todo.id === action.todoId) {
                    return {
                        ...todo,
                        completed: action.todoCompleted
                    }
                }
                return todo
            })
        case 'delete':
            return todos.filter(todo => todo.id !== action.todoId)
        default: 
            return todos
    }
}