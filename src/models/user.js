const API_URL = 'http://192.168.0.5:4000/api/v1';

export default class UserModel {
    //Get all the events and usernames
    static all = () => {
        return fetch(`${API_URL}/user`).then(res => res.json())
    };
    //Create username and message
    static create(data) {
        return fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(error => console.error(error));
    };
    //Update a specific message will need userId 
    static update = (data, id) => {
        console.log(`${data} INSIDE THE USERMODEL}`);
        id = '61628b5cde805f2c40c186ec';
        return fetch(`${API_URL}/user/${id}`, {
            method: "PUT",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .catch(error => { console.error, error })
    };
    //DELETE
    static delete = (id) => {
        return fetch(`${API_URL}/user/${id}`, { method: "DELETE" })
            .then(res => res.json())
    };
};