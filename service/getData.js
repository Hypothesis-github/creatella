import { Config } from '../utils/config'

let cachePage = 0;
let cachesortBy = null;
export const getAscii = async (page, limit = '20', dispatch, sortBy, reset) => {

  // if (cacheAPI.page === page && cacheAPI.limit === limit) {
  //   return cacheAPI.data;
  // }
  if (cachePage >= page && !reset ) {
    console.log('condition not met')

    return null
  } else {
    console.log('get data is running with page ', page)
    reset && dispatch({ type: 'resetandsort', model: sortBy })
    // page == 1 && dispatch({ type: 'loadingTrue' })
    try {
      const url = `${Config.API_URL}products?_page=${page}&_limit=${limit}&_sort=${sortBy}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      })

        .then(pre => pre.json())
        .then(pre => {

          pre.length < 1 ? dispatch({ type: 'nomore' }) : dispatch({ type: 'preLoadItems', pre })


        }).then(
          ()=> dispatch({type : 'loadingFalse' })

        )
    } catch (error) {
      console.log(error)
    }
    // console.log('cache' ,cachesortBy)
    reset ? cachePage = null : cachePage = page;
    // console.log('cachePage' ,cachePage)
    // const data = await response.json();
    // cacheAPI = { page, limit, data };
    // console.log(data)
    // return data;
  }
}
