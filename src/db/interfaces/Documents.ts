export interface AreaDocumentsResponse {
    documentations: DocumentItem[];
    total_count: number;
}

export interface DocumentItem {
    id: number;
    name: string;
    created_at: string;
    document_url: string;
    updated_at: string;
    summary: string;
    area: {
        id: number;
        name: string;
    };
}
