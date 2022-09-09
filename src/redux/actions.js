
export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT',
    }
}

export const getData = (response) => {
    return {
        type: 'ADD_DATA',
        data: response
    }
}

export const deleteData = (response) => {
    return {
        type: 'DELETE_DATA',
        data: response
    }
}