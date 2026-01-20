import http from 'k6/http';
import { check } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 10 },   
        { duration: '30s', target: 100 },  
        { duration: '30s', target: 200 }, 
        { duration: '30s', target: 400 },  
        { duration: '30s', target: 800 }, 
        { duration: '30s', target: 1600 }, 
    ],
};

export default function () {
    const url = '(Your URL)'; // replace with your host
    const params = {
        headers: {
            'Accept': 'application/json',
            'Cookie': 'laravel_session=(Your Cookie)'
            // Add auth if needed, e.g. Bearer token
            // 'Authorization': 'Bearer YOUR_TOKEN_HERE'
        },
    };

    const res = http.get(url, params);

    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}


// load tester for query
// k6 run admin-load.js command for start test
// brew install k6 install process
