import axios from 'axios';

const API_BASE_URL = 'https://take-home-assessment-423502.uc.r.appspot.com/api';

export const createVideo = async (data) => {
    return axios.post(`${API_BASE_URL}/videos`, data);
};

export const getUserVideos = async (userId) => {
    return axios.get(`${API_BASE_URL}/videos`, { params: { user_id: userId } });
};

export const getSingleVideo = async (videoId) => {
    return axios.get(`${API_BASE_URL}/videos/single`, { params: { video_id: videoId } });
};

export const createComment = async (data) => {
    return axios.post(`${API_BASE_URL}/videos/comments`, data);
};

export const getVideoComments = async (videoId) => {
    return axios.get(`${API_BASE_URL}/videos/comments`, { params: { video_id: videoId } });
};
