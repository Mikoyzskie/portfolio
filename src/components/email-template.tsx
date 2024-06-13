import * as React from "react";

interface EmailTemplateProps {
    name: string;
    message: string;
    email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    message,
    email
}) => (
    <div>
        <p>From: {name}</p>
        <p>Email: {email}</p>
        <p>Message: {message}</p>
    </div>
);

export default EmailTemplate;