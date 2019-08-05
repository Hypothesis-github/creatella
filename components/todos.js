export const initialState = {
    count: 1,
    loading: true,
    sort: '',
    data: [],
    preload: [],
    more: true
}

export const reducer = (state , action) => {

    switch (action.type) {
        case "+":
        return { state , count : (state.count + 1)}
        case "preLoadItems":
        return {...state, data : [...state.data, ...action.pre]}
        case "loadingTrue":
        return { ...state , loading : true}
        case "loadingFalse":
        return { ...state , loading : false}
        
        default :
        return state
    }


}