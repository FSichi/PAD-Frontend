import { AreaItem } from './Company';

export interface SuggestedQuestionsResponse {
    questions: string[];
}

export interface ChatItem {
    id: string;
    created_at: number;
    updated_at: number;
    consumed_tokens: number;
    user_review: string | null;
    user_rating: boolean | null;
    manager_rating: boolean | null;
    manager_review: string | null;
    query_text: string;
    response_text: string;
}

export interface ChatLocal {
    id: number | string;
    query_text: string;
    response_text: string;
    created_at: number;
    updated_at: number;
    user_review: string | null;
    user_rating: boolean | null;
}

export interface UserHistory {
    chats: ChatHistoryItem[];
    total_count: number;
}

export interface ChatHistoryItem {
    id: string;
    created_at: number;
    updated_at: number;
    message_quantity: number;
    title: string | null;
    area: AreaItem;
}

export interface ChatHistoryItemFormatted {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    area: string;
}

export interface ChatHistory {
    chat_messages: ChatItem[];
    total_count: number;
}

export interface UserReview {
    user_rating: boolean;
    user_review: string | null;
}
