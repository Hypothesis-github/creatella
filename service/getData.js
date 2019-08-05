import { Config } from '../utils/config'

let cacheAPI = {};
export const getAscii = async (page, limit = '10' , dispatch) => {

  if (cacheAPI.page === page && cacheAPI.limit === limit) {
    return cacheAPI.data;
  }

  try {
    const url = `${Config.API_URL}products?_page=${page}&_limit=${limit}`;
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })

      .then(pre => pre.json())
      .then(pre => {
        // console.log(pre)
        dispatch({ type: 'preLoadItems', pre })
        
      }).then(
        ()=> dispatch({type : 'loadingFalse' })
      )
  } catch (error) {
    console.log(error)
  }


  // const data = await response.json();
  // cacheAPI = { page, limit, data };
  // console.log(data)
  // return data;

};
