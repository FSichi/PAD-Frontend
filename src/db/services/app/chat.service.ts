import {
    fetchGetFromService,
    fetchPostFromService,
    fetchPutFromService,
} from 'db/services/main.service';
import { ExamResultRequest } from 'db/interfaces/Exams';
import {
    ChatHistory,
    SuggestedQuestionsResponse,
    UserHistory,
    UserReview,
} from 'db/interfaces/Chat';

const getService = <T>(endpoint: string, param?: string) =>
    fetchGetFromService<T>({ baseURL: '/v1/chats', endpoint, param });

const postService = <T>(endpoint: string, body: any) =>
    fetchPostFromService<T>({ baseURL: '/v1/chats', endpoint, data: body });

const putService = <T>(endpoint: string, body: any) =>
    fetchPutFromService<T>({ baseURL: '/v1/chat-messages', endpoint, data: body });

export default {
    getSuggestedQuestions: (params?: string) =>
        getService<SuggestedQuestionsResponse>('suggested-questions', params),
    getUserHistory: (params?: string) => getService<UserHistory>('users', params),
    getChatHistory: (id: string, params: string) =>
        getService<ChatHistory>(`${id}/messages`, params),
    sendUserReview: (id: string, body: UserReview) => putService<any>(`${id}/user-review`, body),
    postChat: (body: ExamResultRequest) => postService<any>('', body),
};
