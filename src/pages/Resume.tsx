import resumeUrl from '../assets/resume.pdf';
import { memo } from 'react';

const Resume = memo(function Resume() {
    return (
        <object
            data={resumeUrl}
            type="application/pdf"
            width="100%"
            height="100%"
        >
            <p>My resume</p>
        </object>
    );
});

export default Resume