import { apiClient } from "./api-client";

export interface UploadOptions {
    fileName: string;
    contentType: string;
    uploadType: "logo" | "banner" | "photo" | "document";
}

export const uploadFile = async (file: File, options: UploadOptions): Promise<string> => {
    try {
        // 1. Get presigned URL
        const { data } = await apiClient.post("/uploads/presigned-url", options);
        const { uploadUrl, publicUrl } = data;

        // 2. Upload directly to R2
        const response = await fetch(uploadUrl, {
            method: "PUT",
            body: file,
            headers: {
                "Content-Type": options.contentType,
            },
        });

        if (!response.ok) {
            throw new Error(`Upload failed with status: ${response.status}`);
        }

        // 3. Return the public URL to be saved in the database
        return publicUrl;
    } catch (error) {
        console.error("Upload error:", error);
        throw error;
    }
};
