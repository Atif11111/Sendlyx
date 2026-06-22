"use client";

import React, { useEffect, useRef, useState } from "react";
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";

import { DefaultJsonData } from "@/assets/mails/default";
import { saveEmail } from "@/actions/save.email";
import { GetEmailDetails } from "@/actions/email.details";
import { sendEmail } from "@/shared/utils/email.sender";

interface EmailEditorComponentProps {
  subjectTitle: string;
}

const EmailEditorComponent = ({
  subjectTitle,
}: EmailEditorComponentProps) => {
  const { user } = useClerk();
  const router = useRouter();

  const editorRef = useRef<EditorRef>(null);

  const [loading, setLoading] = useState(true);
  const [designData, setDesignData] = useState(DefaultJsonData);

  useEffect(() => {
    if (user?.id) {
      loadDraft();
    }
  }, [user]);

  const loadDraft = async () => {
    try {
      const draft = await GetEmailDetails({
        title: subjectTitle,
        newsLetterOwnerId: user?.id!,
      });

      if (draft?.content) {
        setDesignData(JSON.parse(draft.content));
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load draft");
    } finally {
      setLoading(false);
    }
  };

  const onReady: EmailEditorProps["onReady"] = () => {
    editorRef.current?.editor?.loadDesign(designData as any);
  };

  const saveDraft = async () => {
    const editor = editorRef.current?.editor;

    editor?.exportHtml(async ({ design }) => {
      try {
        const response = await saveEmail({
          title: subjectTitle,
          content: JSON.stringify(design),
          newsLetterOwnerId: user?.id!,
        });

        toast.success(response?.message || "Email saved successfully");
        router.push("/dashboard/write");
      } catch {
        toast.error("Failed to save draft");
      }
    });
  };

  const sendCampaign = async () => {
    const editor = editorRef.current?.editor;

    editor?.exportHtml(async ({ design, html }) => {
      try {
        setDesignData(design as any);

        await sendEmail({
          userEmail: ["sponsorship@sendlyx.com"],
          subject: subjectTitle,
          content: html,
        });

        toast.success("Email sent successfully");
        router.push("/dashboard/write");
      } catch {
        toast.error("Failed to send email");
      }
    });
  };

  if (loading) {
    return (
      <div className="flex h-[75vh] items-center justify-center">
        <p className="text-slate-500">Loading editor...</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <EmailEditor
        ref={editorRef}
        minHeight="80vh"
        onReady={onReady}
      />

      <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 p-4">
        <Button
          onClick={saveDraft}
          className="border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
        >
          Save Draft
        </Button>

        <Button
          onClick={sendCampaign}
          className="bg-slate-900 text-white hover:bg-slate-800"
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default EmailEditorComponent;