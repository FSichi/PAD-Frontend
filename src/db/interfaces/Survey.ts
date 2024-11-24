export interface SurveysResponse {
    surveys: Survey[];
    total_count: number;
}

export interface Survey {
    id: number;
    title: string;
    survey_answer: SurveyAnswer;
}

export interface SurveyAnswer {
    answer_id: number;
    user_id: string;
}

/* SURVEY BY ID */

export interface SurveyByIdResponse {
    survey: SurveyObject;
}

export interface SurveyObject {
    id: number;
    title: string;
    questions: Question[];
}

export interface Question {
    question_id: number;
    text: string;
    question_options: QuestionOption[];
}

export interface QuestionOption {
    question_option_id: number;
    text: string;
}

/* ------------------------------------- */

/* GET SOLVED SURVEY BY ID */

export interface SurveySolvedByIdResponse {
    survey: SurveySolved;
}

export interface SurveySolved {
    title: string;
    questions: QuestionSolved[];
}

export interface QuestionSolved extends Question {
    answers: AnswerOption[];
}

export interface AnswerOption {
    answer: string;
    question_option_id: number;
}

/* ------------------------------------- */

/* COMPLETE SURVEY */

export interface CompleteSurveyRequest {
    survey_id: number;
    questions: QuestionCompleted[];
}

export interface QuestionCompleted {
    question_id: number;
    question_option_id: number | null;
    answer: string;
}

/* ------------------------------------- */

export interface SurveyFormatted {
    id: number;
    user_id: string;
    title: string;
    dueDate: string;
    completed: boolean;
    area: 'IT' | 'Marketing' | 'Administración' | 'Ventas';
}
