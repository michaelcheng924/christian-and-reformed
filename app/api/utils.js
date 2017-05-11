import $ from 'jquery';

export function createClient({ actionTypePrefix, requestType, url }) {
    const SUCCESS = `${actionTypePrefix}_SUCCESS`;
    const ERROR = `${actionTypePrefix}_ERROR`;

    function request(data) {
        function thunk(dispatch) {
            return $.ajax({
                url,
                contentType: 'application/json',
                data: JSON.stringify(data),
                type: requestType,
                success(response) {
                    dispatch({
                        type: SUCCESS,
                        payload: response
                    });
                },
                error(response) {
                    dispatch({
                        type: ERROR,
                        payload: response.responseJSON
                    });
                }
            });
        }

        return thunk;
    }

    request.SUCCESS = SUCCESS;
    request.ERROR = ERROR;

    return request;
}