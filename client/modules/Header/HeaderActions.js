import callApi from '../../util/apiCaller';


/**
 This helps specify if the sidebar is toggled on or off
*/
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function toggleSidebar(){
    return {
        type: TOGGLE_SIDEBAR,
    }
}

/**
  Sends the logout request to the api and redirects to landing
*/
export function sendLogoutRequest(){
    const apiUrl = 'logout';
    return (dispatch) => {
        return callApi(apiUrl, "get").then(res => {
            if (res){
                window.location.pathname = '/landing';
            }
        });
    }
}
