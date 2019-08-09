export const initialState = {
    count: 1,
    loading: true,
    sort: '',
    data: [],
    preload: [],
    more: false,
    page : 1
}

export const reducer = (state , action) => {

    switch (action.type) {
        case "more":
        return { ...state , more : true}
        case "preLoadItems":
        return {...state ,page : (state.page + 1) , data : [...state.data, ...action.pre] , more : false , loading : false }
        case "loadingTrue":
        return { ...state , loading : true}
        case "loadingFalse":
        return { ...state , loading : false }
        
        default :
        return state
    }


}