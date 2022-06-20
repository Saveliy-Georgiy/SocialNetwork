import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '53b48c19-90ac-4424-8dde-79b93625ae97'},
});

export const usersAPI = {
    getUsers(currentPage: number | string, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};

export const profileAPI = {
    setUserProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
};