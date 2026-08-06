import resumeUrl from '../assets/resume/resume.pdf';
import { memo, useState } from 'react';

const Resume = memo(function Resume() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {isLoading && <p>Loading resume...</p>}
            <object
                data={resumeUrl}
                type="application/pdf"
                width="100%"
                height="100%"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
            >
                <p>My resume</p>
            </object>
        </div>
    );
});

export default Resume;