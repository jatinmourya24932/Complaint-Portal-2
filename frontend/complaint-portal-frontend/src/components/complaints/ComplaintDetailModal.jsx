import { useEffect, useState } from "react";

import {
    getAttachmentsByComplaint
} from "../../services/AttachmentService";

import {
    updateComplaintStatus
} from "../../services/ComplaintService";

import {

    getCommentsByComplaint,

    addComment

} from "../../services/CommentService";

export default function ComplaintDetailsModal({
    complaint,
    onClose,
    showActions = false
}) {

    const [attachments, setAttachments] = useState([]);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [statusLoading, setStatusLoading] = useState(false);
    const [comment, setComment] = useState("");

const [commentLoading, setCommentLoading] = useState(false);

    useEffect(() => {
        if (complaint) {
            loadData();
        }
    }, [complaint]);

    const loadData = async () => {
        try {
            setLoading(true);
            await Promise.all([
                loadAttachments(),
                loadComments()
            ]);
        } catch (error) {
            console.error("Error loading complaint data:", error);
        } finally {
            setLoading(false);
        }
    };

    const loadAttachments = async () => {
        try {
            const data = await getAttachmentsByComplaint(complaint.id);
            
            setAttachments(data);
        } catch (error) {
            console.error("Error loading attachments:", error);
        }
    };

    const loadComments = async () => {
        try {
            const data = await getCommentsByComplaint(complaint.id);
            setComments(data);
        } catch (error) {
            console.error("Error loading comments:", error);
        }
    };
    const handleAddComment = async () => {

    if (!comment.trim()) {

        return;

    }

    try {

        setCommentLoading(true);

        await addComment({

            complaintId: complaint.id,

            userId: sessionStorage.getItem("id"),

            message: comment

        });

        setComment("");

        loadComments();

    }

    catch (error) {

        console.log(error);

    }

    finally {

        setCommentLoading(false);

    }

};

    const updateStatus = async (status) => {
        try {
            setStatusLoading(true);
            await updateComplaintStatus(complaint.id, status);

            // Better than window.reload - call parent refresh if needed
            onClose();
            // Optional: You can pass a refresh callback from parent instead
            window.location.reload();
        } catch (error) {
            console.error("Error updating status:", error);
        } finally {
            setStatusLoading(false);
        }
    };

    if (!complaint) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="max-h-[90vh] w-[900px] overflow-y-auto rounded-3xl bg-slate-900 p-8">
                {loading ? (
                    <div className="flex h-96 flex-col items-center justify-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"></div>
                        <p className="mt-5 text-gray-400">Loading Complaint...</p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-3xl font-bold text-white">
                               Complaint Details

<span className="mt-2 block text-base font-normal text-slate-400">

Tracking ID : {complaint.trackingId}

</span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>

                        {/* Basic Information */}
                        <div className="grid gap-5 md:grid-cols-2">
                            <Info title="Tracking ID" value={complaint.trackingId} />
                            <Info title="Title" value={complaint.title} />
                            <Info title="Category" value={complaint.category} />
                            <Info title="Priority" value={complaint.priority} />
                            <Info title="Status" value={complaint.status} />
                            <Info
                                title="Student"
                                value={
                                    complaint.anonymous
                                        ? "Anonymous"
                                        : complaint.studentName
                                }
                            />
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                Description
                            </h3>
                            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 leading-8 text-white whitespace-pre-wrap">
                                {complaint.description || "-"}
                            </div>
                        </div>

                        {/* Attachments */}
                        <div className="mt-8">
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Attachments
                            </h3>
                            {attachments.length === 0 ? (
                                <p className="text-gray-400">No Attachments</p>
                            ) : (
                                attachments.map(file => (
                                    <div
                                        key={file.id}
                                        className="mb-3 flex items-center justify-between rounded-xl bg-slate-800 p-4"
                                    >
                                        <div>
                                            <p className="text-white">{file.fileName}</p>
                                            <p className="text-sm text-gray-400">{file.fileType}</p>
                                        </div>
                                        <a

href={`http://localhost:8080/uploads/${file.filePath}`}

target="_blank"

rel="noreferrer"

className="rounded-lg bg-cyan-600 px-4 py-2 text-white transition hover:bg-cyan-700"

>

View

</a>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Comments */}
                        <div className="mt-8">
                            <h3 className="mb-3 text-xl font-semibold text-white">
                                Comments
                            </h3>
                            {comments.length === 0 ? (
                                <p className="text-gray-400">No Comments</p>
                            ) : (
                                comments.map(comment => (
                                    <div
                                        key={comment.id}
                                        className="mb-3 rounded-xl bg-slate-800 p-4"
                                    >
                                        <p className="text-sm font-semibold text-violet-400">
                                            {comment.userName}
                                        </p>
                                        <p className="mt-2 text-white">
                                            {comment.comment}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                       {
    showActions && (

        <div className="mt-6">

            <textarea

                rows={3}

                value={comment}

                onChange={(e)=>setComment(e.target.value)}

                placeholder="Write a comment..."

                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white"

            />

            <button

                onClick={handleAddComment}

                disabled={commentLoading}

                className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-white"

            >

                {

                    commentLoading

                    ?

                    "Posting..."

                    :

                    "Add Comment"

                }

            </button>

        </div>

    )
}
                        {/* Action Buttons */}
                        {showActions && (
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    disabled={statusLoading}
                                    onClick={() => updateStatus("IN_PROGRESS")}
                                    className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-yellow-600 transition-colors"
                                >
                                    {statusLoading ? "Updating..." : "In Progress"}
                                </button>

                                <button
                                    disabled={statusLoading}
                                    onClick={() => updateStatus("RESOLVED")}
                                    className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-green-700 transition-colors"
                                >
                                    {statusLoading ? "Updating..." : "Resolve"}
                                </button>

                                <button
                                    disabled={statusLoading}
                                    onClick={() => updateStatus("REJECTED")}
                                    className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 hover:bg-red-700 transition-colors"
                                >
                                    {statusLoading ? "Updating..." : "Reject"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

function Info({ title, value }) {
    return (
        <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-sm text-gray-400">{title}</p>
            <h3
className={`mt-2 break-words rounded-lg px-3 py-2 text-center text-sm font-semibold

${title==="Status"

? value==="RESOLVED"

? "bg-green-600 text-white"

: value==="IN_PROGRESS"

? "bg-yellow-500 text-black"

: value==="REJECTED"

? "bg-red-600 text-white"

: "bg-blue-600 text-white"

: title==="Priority"

? value==="HIGH"

? "bg-red-500 text-white"

: value==="MEDIUM"

? "bg-orange-500 text-white"

: "bg-green-500 text-white"

: "text-left text-lg text-white"

}`}

>

{value || "-"}

</h3>
        </div>
    );
}