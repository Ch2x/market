const baseUrl = 'http://localhost:3000';

export default async(url='', data={}, type='GET', method='fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    if(type == 'GET') {
        let dataStr = '';
        Object.keys(data).forEach ( key => {
            dataStr += key + '=' + data[key] + '&';
        });
        if(dataStr !== '') {
            url = url + '?' + dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
    }

    if()
}