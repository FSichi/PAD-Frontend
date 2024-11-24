import { AreaItem } from './Company';

export interface UserExamsResponse {
    exams: ExamItem[];
    total_count: number;
}
export interface UserExamsBadResponse {
    exams: ExamBadItem[];
    total_count: number;
}

export interface ExamBadItem {
    id: number;
    title: string;
    created_at: number;
    updated_at: number;
    exams_answered: number;
    area: AreaItem;
}

export interface ExamItem {
    id: number;
    title: string;
    created_at: number;
    updated_at: number;
    exam_result: ExamResult;
    area: AreaItem;
}

export interface ExamResult {
    id: number;
    user_id: string;
    result: number[];
}

/* EXAM BY ID */

export interface ExamByIdResponse {
    id: number;
    title: string;
    created_at: number;
    updated_at: number;
    area: AreaItem;
    questions: ExamQuestion[];
    resolved: boolean;
}

export interface ExamByIdFormatted {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
    area: AreaItem;
    questions: ExamQuestion[];
    result: string;
    isCompleted: boolean;
}

export interface ExamQuestion {
    id: number;
    text: string;
    selected_option: string;
    question_options: ExamQuestionOption[];
}

export interface ExamQuestionOption {
    id?: number;
    text: string;
    is_correct: boolean;
}

export type ExamType = 'empty' | 'results';

/* POST EXAM - CREATE EXAM */

export interface ExamResultRequest {
    exam_id: number;
    result: number;
    answers: ExamQuestionsCompleted[];
}

export interface ExamQuestionsCompleted {
    question_id: number;
    correct_option_id: number;
    user_option_id: number;
}
