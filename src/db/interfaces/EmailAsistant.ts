export interface EmailGeneratorRequest {
    email_tone_id: number;
    email_purpose_id: number;
    email_response_purpose: string;
    email_feeling_id: number;
    email_urgency_type_id: number;
    email_external_audience_type_id: number;
    email_internal_audience_type_id: number;
    email_expected_action_id: number;
    email_language_id: number;
    email_instructions: string;
}

export interface EmailOptionsResponse {
    options: EmailOption[];
}

export interface EmailOption {
    id: number;
    name: string;
    description: string;
}

export interface EmailGenerationResponse {
    subject: string;
    content: string;
}
