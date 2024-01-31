//import React from 'react';(don't do this, it's already imported in next.js)

import Link from 'next/link';

function StudentInfo() {
    const name = 'Meron Weld';
    const githubRepo = 'https://github.com/WeldSD/cprg306-assignments';

    return (
        <div>
            <h1>{name}</h1>
            <Link href={githubRepo}>
                <h1>My GitHub Repo</h1>
                
            </Link>
        </div>
    );
}

export default StudentInfo;
