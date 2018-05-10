export default {

    fetchPosts() {
        return fetch(`/api/posts`,
            {
                credentials: 'same-origin',
            }).then(response => {
                return response;
            })
    },

    signup(formdata) {
        return fetch('/api/signup',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    'content-type': 'application/json'
                },

                body: JSON.stringify(formdata)
            }).then(response => {
                return response;
            });
    },

    login(loginData) {
        return fetch('/api/login',
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    'content-type': 'application/json'
                },

                body: JSON.stringify(loginData)
            }).then(response => {
                return response;
            });
    },

    logout() {
        return fetch('/api/logout',
            {
                credentials: 'same-origin',
            }).then(response => {

            });
    },

    postLike(data) {
        return fetch('/api/post/like',
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    'content-type': 'application/json'
                },

                body: JSON.stringify(data)
            }).then(response => {
                return response;
            });
    },

    likedPosts() {
        return fetch(`/api/liked/posts`,
            {
                credentials: 'same-origin',
            }).then(response => {
                return response;
            })
    },

    addPost(postData) {
        return fetch('/api/post/create',
            {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    'content-type': 'application/json'
                },

                body: JSON.stringify(postData)
            }).then(response => {
                return response;
            });
    },
}