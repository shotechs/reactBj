import { v4 as uuidv4 } from 'uuid';

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, {
                username: action.users.username,
                //user_image: action.users.user_image,
                moneyType: action.users.moneyType,
                userId: action.users.userId,
                token: action.users.token,
                id: uuidv4()
            }
            ]
        case 'REMOVE_BOOK':
            return state.filter(users => users.id !== action.id);
        default:
            return state;
    }
}